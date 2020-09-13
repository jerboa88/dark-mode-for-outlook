# Dark Mode for Outlook™ [Extension]
![](https://img.shields.io/badge/type-Extension-yellow.svg "Project type")
[![](https://img.shields.io/chrome-web-store/v/kjfbefcenipnnpbcbbklcidpjiamlcpl.svg "View on the Chrome Web Store")][chrome_link]
[![](https://img.shields.io/amo/v/dark-mode-for-outlook.svg "View on the Firefox Add-ons Page")][firefox_link]
[![](https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Fncmfoiokkfipenppipihehpoikhacpep "View on the Edge Add-ons Page")][edge_link]
[![](https://img.shields.io/static/v1?label=opera%20add-on&message=version%20unknown&color=blue "View on the Opera Add-ons Page")][opera_link]
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

**Note:** It can also be installed on [Brave](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-), [Vivaldi](https://help.vivaldi.com/article/extensions/#install), and other Chromium-based browsers from the Chrome Web Store (or by sideloading).

### Detailed
If you wish to build yourself, `build.sh` is used to copy all files to the `build/` directory, compile SCSS to CSS, and zip the extension, but you can do these steps any other way you wish. Next, the build directory or zip file can be loaded into your browser of choice:
- [Instructions for Chrome](https://developer.chrome.com/extensions/getstarted#manifest)
- [Instructions for Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Instructions for Edge](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension#run-your-extension-locally-in-your-browser-while-developing-it-side-loading)
- [Instructions for Opera](https://dev.opera.com/extensions/testing/)

**Note:** A command line version of [SASS](https://sass-lang.com/) is required for compiling stylesheets.


## Usage
Just install the extension, **enable the built-in Outlook dark mode**, and you should be good to go! The extension does not have any other settings at the moment.

**Note:** If the built-in dark mode is not enabled, some of the styles will not be applied correctly. This is something I hope to fix in a future version, but for now please be sure to enable this setting to avoid problems.


## Screenshots
Desktop site | &#8291;
:-:|:-:
![Screenshot 1](screenshots/desktop_mail.png) | ![Screenshot 2](screenshots/desktop_sidebar.png)
![Screenshot 3](screenshots/desktop_viewmessage.png) | ![Screenshot 4](screenshots/desktop_newmessage.png)

Mobile site | &#8291; | &#8291; | &#8291;
:-:|:-:|:-:|:-:
![Screenshot 1](screenshots/mobile_mail.png) | ![Screenshot 2](screenshots/mobile_sidebar.png) | ![Screenshot 3](screenshots/mobile_viewmessage.png) | ![Screenshot 4](screenshots/mobile_newmessage.png)


## Contributing
Contributions, issues, and forks are welcome but this is a hobby project so don't expect too much from it. [SemVer](http://semver.org/) is used for versioning.


## License
This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details. Outlook is a trademark of Microsoft and this project is not affiliated with or endorsed by Microsoft in any way.


[chrome_link]: https://chrome.google.com/webstore/detail/dark-mode-for-outlook/kjfbefcenipnnpbcbbklcidpjiamlcpl
[firefox_link]: https://addons.mozilla.org/en-US/firefox/addon/dark-mode-for-outlook/
[edge_link]: https://microsoftedge.microsoft.com/addons/detail/ncmfoiokkfipenppipihehpoikhacpep
[opera_link]: https://addons.opera.com/en/extensions/details/dark-mode-for-outlook/

[chrome_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/chrome/chrome_32x32.png
[firefox_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/archive/firefox_57-70/firefox_57-70_32x32.png
[edge_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/edge/edge_32x32.png
[opera_logo]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.0/opera/opera_32x32.png
