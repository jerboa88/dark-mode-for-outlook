# Dark Mode for Outlook™ [Extension]
![](https://img.shields.io/badge/type-Extension-yellow.svg "Project type")
[![](https://img.shields.io/chrome-web-store/v/kjfbefcenipnnpbcbbklcidpjiamlcpl.svg "View on the Chrome Web Store")][1]
[![](https://img.shields.io/amo/v/dark-mode-for-outlook.svg "View on the Firefox Add-ons Page")][2]
[![](https://img.shields.io/static/v1?label=edge%20add-on&message=v2.11&color=blue "View on the Edge Add-ons Page")][3]
![](https://img.shields.io/github/repo-size/jerboa88/dark-mode-for-outlook.svg "Repository size")
[![](https://img.shields.io/github/license/jerboa88/dark-mode-for-outlook.svg "Project license")](LICENSE.md)


A Chrome extension/Firefox add-on that applies a better (unofficial) dark mode to Microsoft Outlook and removes the ad sidebar. Compatible with Firefox mobile!


## Installation
The extension can be installed for your browser here:
| [![Chrome logo][4]][1] | **[Chrome][1]** |
| - | - |
| [![Firefox logo][5]][2] | **[Firefox][2]** |
| [![Edge logo][6]][3] | **[Edge][3]** |

If you wish to build yourself, `build.sh` is used to copy all files to the `build/` directory, compile css, and zip the extension. You can do this any other way you wish. [SASS](https://sass-lang.com/) is used for CSS compilation. After running `build.sh`, the build directory can be loaded into Chrome. The `.zip` file can also be loaded into Firefox after renaming the file extension to `.xpi`.


## Usage
Just install the extension and go. Please **switch to Outlook Beta** on both desktop and mobile sites because I have not made a theme for classic Outlook yet. The extension does not have any other settings at the moment.


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


[1]: https://chrome.google.com/webstore/detail/dark-mode-for-outlook/kjfbefcenipnnpbcbbklcidpjiamlcpl
[2]: https://addons.mozilla.org/en-US/firefox/addon/dark-mode-for-outlook/
[3]: https://microsoftedge.microsoft.com/addons/detail/ncmfoiokkfipenppipihehpoikhacpep

[4]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/62.2.25/chrome/chrome_32x32.png
[5]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/62.2.25/archive/firefox_57-70/firefox_57-70_32x32.png
[6]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/62.2.25/edge/edge_32x32.png
