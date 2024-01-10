const axios = require('axios');

/**
 * Fonction de détection de la langue d'un texte.
 *
 * @param {string} text - Texte dont la langue doit être détectée.
 * @param {string} apiKey - Clé API pour l'API de détection de langue (DetectLanguage).
 * @returns {Promise<string>} Code de langue détecté.
 */
async function detectLanguage(text, apiKey) {
  try {
    const apiUrl = `https://ws.detectlanguage.com/0.2/detect?q=${encodeURIComponent(text)}&key=${apiKey}`;
    const response = await axios.get(apiUrl);
    const detectedLanguage = response.data.data.detections[0]?.language || 'unknown';
    return detectedLanguage;
  } catch (error) {
    console.error('Erreur lors de la détection de la langue :', error.message);
    return 'unknown';
  }
}
module.exports = detectLanguage;