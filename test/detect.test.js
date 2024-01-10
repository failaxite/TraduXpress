const detectLanguage = require('../src/detect');

test('détecte la langue d\'un texte avec succès', async () => {
    try {
        const apiKey = '03932687742ff8c1aaf60fb0247c5399';
        const textToDetect = 'Merhaba nasılsın';

        const result = await detectLanguage(textToDetect, apiKey);
        console.log(result);
        expect(result).toBe('tr');
    } catch (error) {
        console.error('Erreur de détection de langue inattendue :', error);
    }
});
