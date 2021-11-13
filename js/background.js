(() => {
	'use strict';

	// 0-pad a number to 2 digits
	const pad = (num) => {
		return num.toString().padStart(2, '0');
	}

	const log = (msg) => {
		const d = new Date();

		console.debug('[' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + '.' + pad(d.getSeconds()) + '] DMFO: ' + msg);
	}

	chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		// Url property is only present when we have the 'tabs' permission
		if ('url' in tab && 'status' in changeInfo && changeInfo.status === 'loading') {
			chrome.permissions.contains({
				permissions: [],
				origins: [tab.url]
			}, (isGranted) => {
				if (isGranted) {
					log('Permission is granted for ' + tab.url);

					chrome.tabs.insertCSS(tabId, {
						file: 'main.css',
						runAt: 'document_start',
						allFrames: true
					}, () => {
						chrome.tabs.insertCSS(tabId, {
							file: 'help.css',
							runAt: 'document_start',
							allFrames: true
						}, () => {
							log('Injected styles');
						});
					});
				}
			});
		}
	});
})();
