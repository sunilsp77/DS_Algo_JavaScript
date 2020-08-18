/**
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True
 **/
 
 /**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function(word) {
  const wordSize = word.length;
  let i = 1;

  if (isLower(word[0])) {
    while (word[i] && isLower(word[i])) ++i;

    return i == wordSize;
  } else {
    while (word[i] && isUpper(word[i])) ++i;

    if (i == wordSize) {
      return true;
    } else if (i > 1) {
      return false;
    }

    while (word[i] && isLower(word[i])) ++i;
    return i == wordSize;
  }
};

var detectCapitalUse11 = function(word) {
  const wordSize = word.length;
  let upper = 0;

  for (let i = 0; i < wordSize; i++) {
    if (isUpper(word[i])) upper++;
  }

  if (upper === 0 || upper === wordSize || (isUpper(word[0]) && upper === 1))
    return true;

  return false;
};

function isLower(c) {
  return c === c.toLowerCase() && c !== c.toUpperCase();
}

function isUpper(c) {
  return c === c.toUpperCase() && c !== c.toLowerCase();
}
