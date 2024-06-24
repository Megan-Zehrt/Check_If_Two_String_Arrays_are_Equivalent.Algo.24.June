// 1662. Check if Two String Arrays are Equivalent



// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.








/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    

    let string1 = ""
    let string2 = ""

    for(let word of word1){
        for(let i = 0; i < word.length; i++){
            string1 += "" + word[i] + ""
        }
    }

    for(let word of word2){
        for(let i = 0; i < word.length; i++){
            string2 += "" + word[i] + ""
        }
    }

    if(string1 == string2){
        return true
    }

    return false
};