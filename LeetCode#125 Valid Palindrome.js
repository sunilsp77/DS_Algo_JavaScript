/**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;

  const len = s.length;
  const alphnumericRegex = /^[a-zA-Z0-9]+$/;
    
  let l = 0,
    r = len - 1;
    
  while (l < r) {
      
    while (!alphnumericRegex.test(s[l]) && l < r) l++;
    while (!alphnumericRegex.test(s[r]) && l < r) r--;

    if (s[l].toLowerCase() == s[r].toLowerCase()) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
