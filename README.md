# TraduxPress


TraduXpress is a simple npm package that provides translation functionality using the MyMemory Translation Memory API. It allows you to easily translate a given term into a specified language or the language of the user's browser.



## Installation

To install TraduXpress, use the following npm command:

```bash
  npm install traduxpress
```


## Usage

```javascript
const traduxpress = require('traduxpress');

// Example Usage
async function translateTerm() {
    try {
        const result = await traduxpress({ term: 'Hello man how are u today ?', lang: 'es' });
        console.log(result);
    } catch (error) {
        console.error('Unexpected translation error:', error);
    }
}

translateTerm();
```
<br>

## Ememple of code works with

https://codepen.io/failaxite/pen/BabzrjM


## API Reference

traduxpress(options)

`options (Object):` Options for translation.
<br>
`term (string):` The term to translate.
<br>
`lang (string, optional):` The language to translate the term into. If not specified, it uses the language of the user's browser.
Returns a Promise resolving to the translated text.
## Configuration

TraduXpress uses the MyMemory Translation Memory API for translation. You need to provide your RapidAPI key in the `traductFunction` function in the `traduction.js` file.
## Tests

Run tests using the following command:

```bash
  npm test
```
## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Issues

Please report any issues or suggestions on the GitHub Issues page.

## Author

- [failaxite](https://github.com/failaxite)

## Version

- Current version: **1.0.6**

## Links

- [GitHub Repository](https://github.com/failaxite/TraduXpress)
- [NPM Package](https://www.npmjs.com/package/traduxpress)
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
