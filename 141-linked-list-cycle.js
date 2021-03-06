/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/submissions/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        if (fast === slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
    
};
