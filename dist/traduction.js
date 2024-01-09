"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traduct = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Traduit un terme en fonction de la langue spécifiée ou de la langue du navigateur.
 *
 * @param {Object} options - Options de traduction.
 * @param {string} options.term - Terme à traduire.
 * @param {string} [options.lang] - Langue dans laquelle traduire le terme. Si non spécifié, utilise la langue du navigateur.
 * @returns {Promise<string>} La traduction du terme.
 */
const traduct = async ({
  term,
  lang
}) => {
  try {
    const userLanguage = lang || navigator.language || navigator.userLanguage;
    const rapidAPIKey = '2e93884cb5msh37f0365a8d8518ep1c06dbjsnef9e3009d2b1';
    const options = {
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
      params: {
        langpair: `en|${userLanguage}`,
        q: term,
        mt: '1',
        onlyprivate: '0',
        de: 'a@b.c'
      },
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
      }
    };
    const response = await _axios.default.request(options);
    const translation = response.data.responseData.translatedText;
    return translation;
  } catch (error) {
    console.error('Erreur de traduction:', error);
    return term;
  }
};
exports.traduct = traduct;