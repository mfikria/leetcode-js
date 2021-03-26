/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
          if (prices[i] < buy) {
              buy = prices[i];
          }
          if (prices[i] > buy) {
              profit = Math.max(profit, prices[i] - buy);
          }
    }
    
    return profit;
};
