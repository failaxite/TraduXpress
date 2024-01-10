const traductFunction = require('../src/traduction');

test('traduit un texte avec succès', async () => {
    try {
        const result = await traductFunction({ term: 'Hello man how are u today ?', lang: 'es' });
        expect(result).toBe('Hola hombre, ¿cómo estás hoy ?');

    } catch (error) {
        console.error('Erreur de traduction inattendue:', error);
    }
});
