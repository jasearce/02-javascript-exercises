const palindromes = function (word) {
    const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const tmpChars = word.toLowerCase().split('').filter(letter => allowedChars.includes(letter));
    const cleanedStr = tmpChars.join('');
    const reversedWord = tmpChars.reverse().join('');
    console.log(`given word: ${cleanedStr} | palindrome: ${reversedWord}`);
    return cleanedStr === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
