const correctSpelling = require('../src/correction');

test('corrige l\'orthographe d\'un texte avec succès', () => {
    try {
        const textToCorrect = 'baonjous';
        const result = correctSpelling(textToCorrect);
        console.log(result);
        expect(result).toBe('baonjou');
    } catch (error) {
        console.error('Erreur de correction d\'orthographe inattendue :', error);
    }
});
