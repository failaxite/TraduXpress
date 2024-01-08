const translate = require('../src/traduction');

test('traduit un texte avec succès', async () => {
    try {
        const result = await translate.traduct({ term: 'Hello man how are u today ?', lang: 'fr' });
        console.log(result);
    } catch (error) {
        console.error('Erreur de traduction inattendue:', error);
    }
});
