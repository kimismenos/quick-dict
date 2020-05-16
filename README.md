# quick-dict
quick-dict is a small Chrome extension which provides a simple user interface to quickly look up translations on [dict.cc](https://www.dict.cc/)

## Installation
* Download and extract the extension
* Navigate to `chrome://extensions` (via omnibox or Menu -> Tools -> Extensions)
* Enable the *Developer mode* in the upper right corner
* Click on "Load unpacked extension..."
* Select the directory containing the unpacked extension

## How to use
You can either start a search by clicking on the extension icon or by pressing `<ctrl + space>` on the keyboard, then type in the word or phrase you are looking for and press `<enter>`. If any text is selected when the popup window opens, quick-dict will automatically go ahead and use that text to search for a translation on dict.cc.

## Limitations
Since there is no options page implemented yet, the only way to change its behaviour is by modifing the source code itself.
* By default only English-German or German-English translations are supported. To change the source and target language simply change the subdomain of the query URL in `popup.js` > `lookUp()` according to: `https://<COUNTRY_CODE_1>-<COUNTRY_CODE_2>.dict.cc/?s=<TARGET_STRING>` (e.g.: https://**en**-**it**.dict.cc/?s=**play**). To see a list of all possible language combinations visit [dict.cc](https://www.dict.cc/) and click on the dropdown below the search field.
* The keyboard shortcut can be set inside `manifest.json` under `commands` (default is `<ctrl + space>`). 
* Only the first result page is currently shown in the popup window
