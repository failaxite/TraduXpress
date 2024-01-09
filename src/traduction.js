require('dotenv').config();
import axios from 'axios';

/**
 * Traduit un terme en fonction de la langue spécifiée ou de la langue du navigateur.
 *
 * @param {Object} options - Options de traduction.
 * @param {string} options.term - Terme à traduire.
 * @param {string} [options.lang] - Langue dans laquelle traduire le terme. Si non spécifié, utilise la langue du navigateur.
 * @returns {Promise<string>} La traduction du terme.
 */
export const traduct = async ({ term, lang }) => {
    try {
        const userLanguage = lang || (navigator.language || navigator.userLanguage);

        const rapidAPIKey = process.env.RAPIDAPI_KEY;

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

        const response = await axios.request(options);

        const translation = response.data.responseData.translatedText;

        return translation;
    } catch (error) {
        console.error('Erreur de traduction:', error);
        return term;
    }
};
