/**
 * https://leetcode.com/problems/pascals-triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let allRows = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row = [1];
        const middle = ((i + 1) / 2);
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                row.push(1)
            } else  {
                row.push(allRows[i - 1][j - 1] + allRows[i - 1][j]);
            }
            
        }
        allRows.push(row);
    }
    return allRows;
};
