# Dark Mode for Outlook™ [Extension]
![](https://img.shields.io/badge/type-Extension-yellow.svg "Project type")
[![](https://img.shields.io/chrome-web-store/v/kjfbefcenipnnpbcbbklcidpjiamlcpl.svg "View on the Chrome Web Store")](https://chrome.google.com/webstore/detail/dark-mode-for-outlook/kjfbefcenipnnpbcbbklcidpjiamlcpl)
[![](https://img.shields.io/amo/v/dark-mode-for-outlook.svg "View on the Firefox Add-ons Page")](https://addons.mozilla.org/en-US/firefox/addon/dark-mode-for-outlook/)
![](https://img.shields.io/github/repo-size/jerboa88/dark-mode-for-outlook.svg "Repository size")
[![](https://img.shields.io/github/license/jerboa88/dark-mode-for-outlook.svg "Project license")](LICENSE.md)


A Chrome extension/Firefox add-on that applies a better (unofficial) dark mode to Microsoft Outlook and removes the ad sidebar. Compatible with Firefox mobile!


## Installation
The extension can be installed from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/dark-mode-for-outlook/kjfbefcenipnnpbcbbklcidpjiamlcpl) or from the Firefox Add-on page [here](https://addons.mozilla.org/en-US/firefox/addon/dark-mode-for-outlook/).

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
