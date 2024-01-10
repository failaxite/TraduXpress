const correctSpelling = require('../src/correction');

test('corrige l\'orthographe d\'un texte avec succès', () => {
    const result = correctSpelling('baonjous');
    console.log(result);
});
