/**
 * https://leetcode.com/problems/valid-palindrome/submissions/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[\W_]+/g, '').toLowerCase();
    for(let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};
