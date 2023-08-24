// Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


// Solution from Copilot (correct)
// Big O time complexity: O(n log n)
var mergeKLists = function(lists) {
    let result = [];
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) {
            result.push(node.val);
            node = node.next;
        }
    }
    result.sort((a, b) => a - b);
    let head = new ListNode(0);
    let node = head;
    for (let i = 0; i < result.length; i++) {
        node.next = new ListNode(result[i]);
        node = node.next;
    }
    return head.next;
};



// Solution from ChatGPT (correct)
// Big O time complexity: O(n log n)
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    
    // Merge lists recursively
    while (lists.length > 1) {
        let merged = mergeTwoLists(lists[0], lists[1]);
        lists = lists.slice(2);
        lists.push(merged);
    }
    
    return lists[0];
};

function mergeTwoLists(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}