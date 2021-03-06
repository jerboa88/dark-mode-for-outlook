# Dark Mode for Outlook™ [Extension]
![](https://img.shields.io/badge/type-Extension-yellow.svg "Project type")
[![](https://img.shields.io/chrome-web-store/v/kjfbefcenipnnpbcbbklcidpjiamlcpl.svg "View on the Chrome Web Store")][chrome_link]
[![](https://img.shields.io/amo/v/dark-mode-for-outlook.svg "View on the Firefox Add-ons Page")][firefox_link]
[![](https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fncmfoiokkfipenppipihehpoikhacpep "View on the Edge Add-ons Page")][edge_link]
[![](https://img.shields.io/badge/dynamic/json?label=opera%20add-on&color=blue&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fjerboa88%2Fdark-mode-for-outlook%2Freleases%2Flatest "View on the Opera Add-ons Page")][opera_link]
![](https://img.shields.io/github/repo-size/jerboa88/dark-mode-for-outlook.svg "Repository size")
[![](https://img.shields.io/github/license/jerboa88/dark-mode-for-outlook.svg "Project license")](LICENSE.md)


A browser extension/add-on that applies a better (unofficial) dark mode to Microsoft Outlook and removes the ad sidebar. Available for Chrome, Firefox, Edge, and Opera, and compatible with Firefox mobile!


## Installation
### Simple
The extension can be installed for your browser here:
| [![Chrome logo][chrome_logo]][chrome_link] | **[Chrome][chrome_link]** |
| - | - |
| [![Firefox logo][firefox_logo]][firefox_link] | **[Firefox][firefox_link]** |
| [![Edge logo][edge_logo]][edge_link] | **[Edge][edge_link]** |
| [![Opera logo][opera_logo]][opera_link] | **[Opera][opera_link]** |

**Notes:**
- It can also be installed on [Brave](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-), [Vivaldi](https://help.vivaldi.com/article/extensions/#install), and other Chromium-based browsers from the Chrome Web Store (or by sideloading).
- Installing add-ons for Firefox mobile is complicated at the moment, since Android's [new Geckoview-based browser](https://blog.mozilla.org/addons/2020/09/02/update-on-extension-support-in-the-new-firefox-for-android/) does not officially support all add-ons yet. If you still want to use this add-on on Firefox mobile, refer to [this page](https://support.mozilla.org/en-US/kb/find-and-install-add-ons-firefox-android#w_expanded-extension-support-in-firefox-for-android-nightly) for more information.


### Advanced
If you wish to build yourself, you can download the repository, run `npm install` to install dependencies, and build the project with `npm start`. Make sure you have npm and Node.js v10.0.0 or greater installed ([how?](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)). If you have any issues running the build script, you can perform all the steps in that script manually.

Next, the build directory or zip file can be loaded into your browser of choice: [Chrome](https://developer.chrome.com/extensions/getstarted#manifest) / [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) / [Edge](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension#run-your-extension-locally-in-your-browser-while-developing-it-side-loading) / [Opera](https://dev.opera.com/extensions/testing/)


## Usage
Just install the extension and you should be good to go! Styles are automatically applied to any page on the following domains:
- http(s)://outlook.live.com/
- http(s)://outlook.office.com/
- http(s)://outlook.office365.com/
- http(s)://support.office.live.com/

### Options
#### Custom Domains
If your Outlook exchange server is running on a custom domain (ex. https://mail.yourcompany.com/owa), you can add it here so that the dark mode is applied for any page on this domain. This is still an experimental feature so styles may not be applied correctly. If you encounter any issues, please create a bug report.

Multiple domains can be added and styles will be added to any page starting with the given URL, so this doesn't need to be super specific. For example, if you add the domain `mail.yourcompany.com/owa`, styles will be applied to `https://mail.yourcompany.com/owa/inbox` or `http://mail.yourcompany.com/owa/mail?id=someId`, but not `https://mail.yourcompany.com/` or `http://otherstuff.yourcompany.com/owa/`.

This feature is optional. The necessary permissions are requested when you add a custom domain.

### Privacy
This extension does not collect or transmit any personal information. Please see below for an explanation of the permissions required by this extension.

#### Required Permissions
Access to any site on the following domains is required so we can apply custom styles:
- **"http(s)://outlook.live.com/"**
- **"http(s)://outlook.office.com/"**
- **"http(s)://outlook.office365.com/"**
- **"http(s)://support.office.live.com/"**

#### Optional permissions
These permissions are requested only when they are needed:
- **"tabs":** Access to open tabs is required if you are using the [Custom Domains](#Custom%20Domains) feature. This is so we can check if any open tabs match the custom domains you specified
- **"http(s)://*/":** Access to 'any site' is required if you are using the [Custom Domains](#Custom%20Domains) feature. This is so we can apply styles to any domain you specify. Note that the extension does not have access to all sites. It will only request permissions for the specific custom domains you add

### Reporting Issues
Translations needed! If you know another language and want to help out, please create an issue [here][issues_link] with details.

If you encounter any problems while using the extension, please create an issue [here][issues_link] or create a pull request yourself to fix the issue (see [Contributing](#Contributing)).

I try to fix the extension as soon as possible when Outlook makes breaking changes, but keep in mind it may take some time for me to fit the work into my schedule and make all the changes that need to be made. Thanks for your patience 🙂.


## Screenshots
Desktop site | &#8291;
:-:|:-:
![Screenshot 1](screenshots/desktop_mail.png) | ![Screenshot 2](screenshots/desktop_sidebar.png)
![Screenshot 3](screenshots/desktop_viewmessage.png) | ![Screenshot 4](screenshots/desktop_newmessage.png)

Mobile site | &#8291; | &#8291; | &#8291;
:-:|:-:|:-:|:-:
![Screenshot 1](screenshots/mobile_mail.png) | ![Screenshot 2](screenshots/mobile_sidebar.png) | ![Screenshot 3](screenshots/mobile_viewmessage.png) | ![Screenshot 4](screenshots/mobile_newmessage.png)


## Contributing
Contributions, issues, and forks are welcome. Please note that any code/translations you contribute will be licensed under the same license as this project. By making any contributions, you agree to this.

[SemVer](http://semver.org/) is used for versioning this project, although the patch number is left out.

### Translations
If you know another language and want to help out, please follow these steps:
1. Create an issue [here][issues_link] with details about which language you are adding. Make sure your language is listed in the table [here](https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support). If not, your language is not supported unfortunately 😢
2. Make sure your language is not already in the [_locales](_locales) folder. If it is, we may have translations for your language already, but they might be out of date.
3. Download the [english messages file](_locales/en/messages.json) and translate each message into your language. The descriptions explain how each message is used in the extension, so these don't need to be translated.
4. Upload your translated messages file to the issue you created
5. Profit!

### Code
**Guidelines:**
- SCSS is used to make writing styles easier and more maintainable. Please take advantage of its features
- Variables are defined in [_vars.scss](styles/_vars.scss) and should be used whenever possible instead of hardcoding values
- Any styles written should be specific enough to not affect unintended areas of the application, but not overly specific such that styles are broken every time Outlook releases an update (do not use Outlook's randomly generated class names)
- Styles should be as short as possible, and written in relation to other elements with hardcoded attributes. See [main.scss](styles/main.scss) for examples


## License
This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details. Outlook is a trademark of Microsoft and this project is not affiliated with or endorsed by Microsoft in any way.


[issues_link]: ../../issues

[chrome_link]: https://chrome.google.com/webstore/detail/dark-mode-for-outlook/kjfbefcenipnnpbcbbklcidpjiamlcpl
[firefox_link]: https://addons.mozilla.org/en-US/firefox/addon/dark-mode-for-outlook/
[edge_link]: https://microsoftedge.microsoft.com/addons/detail/ncmfoiokkfipenppipihehpoikhacpep
[opera_link]: https://addons.opera.com/en/extensions/details/dark-mode-for-outlook/

[chrome_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/chrome/chrome_32x32.png
[firefox_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/archive/firefox_57-70/firefox_57-70_32x32.png
[edge_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/edge/edge_32x32.png
[opera_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/opera/opera_32x32.png
