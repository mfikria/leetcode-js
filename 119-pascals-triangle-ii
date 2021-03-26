/**
 * https://leetcode.com/problems/pascals-triangle-ii
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // Use Pascal’s Triangle and the Binomial Theorem
    const row = [1];
    const middle = (rowIndex + 1) / 2;
    for(let i = 1; i <= rowIndex; i++) {
        if (i < middle) {
            row.push(row[i - 1] * (rowIndex + 1 - i) / i);
        } else {
            row.push(row[rowIndex - i]);
        }
    }
    
    return row;
};
