/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    let pointerIntersection = null;
    while(pointerA && pointerB) {
        if (pointerA.next === pointerIntersection && pointerB.next === pointerIntersection) {
            if (pointerA !== pointerB) {
                return pointerIntersection;
            } else {
                pointerIntersection = pointerA;
                pointerA = headA;
                pointerB = headB;
            }
        }
        if (pointerA.next !== pointerIntersection) {
            pointerA = pointerA.next;
        }
        if (pointerB.next !== pointerIntersection) {
            pointerB = pointerB.next;
        }
    }
    
    return pointerIntersection;
};
