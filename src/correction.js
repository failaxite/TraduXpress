const natural = require('natural');

/**
 * Fonction de normalisation d'un texte.
 *
 * @param {string} text - Texte à normaliser.
 * @returns {string} Texte normaliser.
 */
function correctSpelling(text) {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(text);

    const correctedWords = words.map((word) => {
        const stemmedWord = natural.PorterStemmer.stem(word);
        const correctedWord = natural.JaroWinklerDistance(word, stemmedWord) > 0.7
            ? stemmedWord
            : word;

        return correctedWord;
    });

    return correctedWords.join(' ');
}

module.exports = correctSpelling;
