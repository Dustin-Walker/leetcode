// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 **/
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


const recursivelyAddTwoNumbers = (l1: ListNode | null, l2: ListNode | null, sumLL: ListNode, carryOver: 0 | 1): null => {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carryOver;
    const val = sum % 10;
    const carry = sum >= 10 ? 1 : 0;

    sumLL.val = val;

    if (l1?.next) {
        l1 = l1.next;
    } else {
        l1 = null;
    }

    if (l2?.next) {
        l2 = l2.next;
    } else {
        l2 = null;
    }

    if (l1 === null && l2 === null) {
        if (carry === 1) {
            sumLL.next = new ListNode(1);
        }
        return null;
    }

    sumLL.next = new ListNode();


    return recursivelyAddTwoNumbers(l1, l2, sumLL.next, carry)
}


function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
      let rootNode = new ListNode();
      recursivelyAddTwoNumbers(l1, l2, rootNode, 0);
      return rootNode
};

  export default addTwoNumbers;