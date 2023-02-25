"use strict";
// add whatever parameters you deem necessary & write doc comment
/** create function that takes a word string and a string of letters calls getFreqCounter
 * and checks if word can be made from letters. returns true or false.
*/
function canConstructWord(word, letters) {
    if (letters.length === 0) {
        return false;
    }
    const wordObj = getFreqCounter(word);
    const lettersObj = getFreqCounter(letters);


    for (let letter in wordObj) {
            const key = letter;

            if (!key in lettersObj) {
                return false;
            }
            if (wordObj[letter] > lettersObj[letter]){
                return false;
            }
    }
    return true;
}

/** create frequency counter that accepts string and returns object with frequency of letters*/
function getFreqCounter (items) {
    const freq = {};

    for (const item of items) {
        const curr = freq[item] || 0;
        freq[item] = curr + 1;
    }

    return freq;
}