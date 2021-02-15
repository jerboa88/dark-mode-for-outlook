(() => {
  'use strict';

  const customDomainForm = document.getElementById('customDomainForm');
  const customDomainInput = document.getElementById('customDomainInput');
  const customDomainsListContainer = document.getElementById('customDomainsList');
  const addCustomDomainButton = document.getElementById('addCustomDomainButton');
  const statusMessage = document.getElementById('statusMessage');
  const localizableElements = document.querySelectorAll('*[data-locale-code]');
  const localeCode = chrome.i18n.getMessage('@@ui_locale');
  const removeButtonText = '- ' + chrome.i18n.getMessage('optionsRemoveButtonText') || 'Remove';

  // Runtime
  const rawCustomDomainSet = new Set();

  // Functions
  const showMessage = (isPositive, msgCode) => {
    let msg = chrome.i18n.getMessage(msgCode);

    if (!msg) {
      isPositive = false;
      msg = 'An invalid message code (' + msgCode + ') was specified. Please create a bug report with this error message';
    }

    console.debug(msg);

    statusMessage.style.color = (isPositive) ? 'green' : 'red';
    statusMessage.textContent = msg;
    statusMessage.style.opacity = '1';

    setTimeout(() => {
      statusMessage.style.opacity = '0';
    }, 2000);
  };

  const removeInvalidChars = () => {
    customDomainInput.value = customDomainInput.value.replace(/^.*:\/\//, '').replace(/\/\//, '\/');
  };

  const getRawDomain = () => {
    let rawDomain = customDomainInput.value.toLowerCase();

    if (rawDomain === '') {
      return null;  // Not configured, return null
    } else if (/^(?:\w{1,64}\.){1,6}\w{1,20}\/?(?:.{1,64})?$/.test(rawDomain)) {
      const lastChar = rawDomain.substr(-1);

      if (lastChar !== '/') {
        if (lastChar === '*') {
          rawDomain = rawDomain.slice(0, -1);
        }

        rawDomain += '/';
      }

      return '*://' + rawDomain + '*';
    } else {
      return false; // Invalid domain, return false
    }
  };

  const toReadableDomain = (savedDomain) => {
    return (savedDomain === null) ? '' : savedDomain.replace(/^\*:\/\//, '').replace(/\/\*$/, '');
  };

  const addCustomDomain = (rawDomain) => {
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: [rawDomain]
    }, (wasGranted) => {
      if (wasGranted) {
        showMessage(true, 'optionsStatusMessage_permissionGrantedSuccess');

        if (rawCustomDomainSet.has(rawDomain)) {
          showMessage(false, 'optionsStatusMessage_addCustomDomain_alreadyExistsError');
        } else {
          addCustomDomainListItem(rawDomain);
          rawCustomDomainSet.add(rawDomain);
          showMessage(true, 'optionsStatusMessage_addCustomDomain_success');
        }
      } else {
        showMessage(false, 'optionsStatusMessage_permissionRequiredError');
      }
    });
  };

  const removeCustomDomain = (listItem, rawDomain) => {
    chrome.permissions.remove({origins: [rawDomain]}, (wasRemoved) => {
      if (wasRemoved) {
        listItem.remove();
        rawCustomDomainSet.delete(rawDomain);
        showMessage(true, 'optionsStatusMessage_removeCustomDomain_success');
      } else {
        showMessage(false, 'optionsStatusMessage_removeCustomDomain_error');
      }
    });
  };

  const validateCustomDomain = () => {
    const rawDomain = getRawDomain();

    if (rawDomain) {
      console.debug('Custom domain is', rawDomain);

      addCustomDomain(rawDomain);
    } else if (rawDomain === null) {
      showMessage(false, 'optionsStatusMessage_addCustomDomain_emptyError');
    } else {
      showMessage(false, 'optionsStatusMessage_addCustomDomain_invalidError');
    }
  };

  const addCustomDomainListItem = (rawDomain) => {
    const listItem = document.createElement('li');
    const itemLabel = document.createElement('p');
    const removeButton = document.createElement('button');

    itemLabel.innerHTML = toReadableDomain(rawDomain);
    removeButton.innerHTML = '- Remove'; // Put this in translations

    listItem.appendChild(itemLabel);
    listItem.appendChild(removeButton);
    customDomainsListContainer.appendChild(listItem);
    removeButton.addEventListener('click', () => {
      removeCustomDomain(listItem, rawDomain)
    });
  };

  const restoreCustomDomains = () => {
    chrome.permissions.getAll((permissions) => {
      if ('origins' in permissions) {
        permissions.origins.filter((origin) => {
          return origin !== '*://outlook.live.com/*'
              && origin !== '*://outlook.office.com/*'
              && origin !== '*://outlook.office365.com/*'
              && origin !== '*://support.office.live.com/*';
        }).forEach((rawDomain) => {
          addCustomDomainListItem(rawDomain);
          rawCustomDomainSet.add(rawDomain);
        });
      }
    });
  };

  document.addEventListener('DOMContentLoaded', restoreCustomDomains);
  customDomainInput.addEventListener('input', removeInvalidChars);
  addCustomDomainButton.addEventListener('click', validateCustomDomain);
  customDomainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    return false;
  });

  localizableElements.forEach((textElement) => {
    const elementLocaleCode = chrome.i18n.getMessage(textElement.getAttribute('data-locale-code'));

    if (elementLocaleCode) {
      textElement.innerHTML = elementLocaleCode;

      textElement.setAttribute('lang', localeCode);
    }
  });
})();
