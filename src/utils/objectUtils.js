const filterNullValues = object => {
    const filteredObject = {};
    for (const key in object) {
        if (object[key] != null || object[key] != undefined) {
            filteredObject[key] = object[key];
        }
    }
    return filteredObject;
};

const filterNullValuesFromArray = array => {
    return array.filter(object => {
        return object != null;
    });
};

const wer = (reference, hypothesis) => {
    // Tokenize to words
    let refWords = reference
        .replace('.', '')
        .replace(',', '')
        .replace('\n', '')
        .replace('"', '')
        .replace('?', '')
        .replace('!', '')
        .toUpperCase();
    let hypWords = hypothesis
        .replace('.', '')
        .replace(',', '')
        .replace('\n', '')
        .replace('"', '')
        .replace('?', '')
        .replace('!', '')
        .toUpperCase();

    refWords = refWords.split(/\s+/);
    hypWords = hypWords.split(/\s+/);

    // Create a matrix
    const d = Array.from({ length: refWords.length + 1 }, () =>
        Array(hypWords.length + 1).fill(0),
    );

    // Initialize matrix
    for (let i = 0; i <= refWords.length; i++) {
        d[i][0] = i;
    }
    for (let j = 0; j <= hypWords.length; j++) {
        d[0][j] = j;
    }

    // Populate matrix
    for (let i = 1; i <= refWords.length; i++) {
        for (let j = 1; j <= hypWords.length; j++) {
            const cost = refWords[i - 1] === hypWords[j - 1] ? 0 : 1;
            d[i][j] = Math.min(
                d[i - 1][j] + 1, // deletion
                d[i][j - 1] + 1, // insertion
                d[i - 1][j - 1] + cost,
            ); // substitution
        }
    }

    // Calculate WER
    const werValue = d[refWords.length][hypWords.length] / refWords.length;
    return werValue;
};

export { filterNullValues, filterNullValuesFromArray, wer };
