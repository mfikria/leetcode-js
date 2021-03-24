/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const mapDiff = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapDiff.has(nums[i])) {
            return [mapDiff.get(nums[i]), i];
        }
        const diff = target - nums[i];
        mapDiff.set(diff, i);
    }

    return [-1, -1];
};
