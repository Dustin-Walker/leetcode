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

type AddNodes = (l1 :ListNode | undefined, l2 :ListNode | undefined, carry: 1 | 0) => ({
    val: number,
    carryOver: 1 | 0;
});

const addNodes: AddNodes = (l1, l2, carry) => {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = sum % 10;
    const carryOver = sum >= 10 ? 1 : 0;
    return {
        val,
        carryOver,
    };
}


function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
    let sumRootNode!: ListNode;
    let sumLLCurr!: ListNode;
    let index = 0;
    let l1Curr!: ListNode;
    let l2Curr!: ListNode;
    let carry: 0 | 1;

    // TODO Reverse both lists first

    while(true) {
        // First iteration initializes root node
        if (index === 0) {
            const {val, carryOver} = addNodes(l1, l2, 0);
            carry = carryOver;
            // Set up root node
            sumRootNode = new ListNode(val);
            if (l1.next === null && l2.next === null) {
                if (carryOver === 1) {
                    sumRootNode.next = new ListNode(1);
                }
                return sumRootNode;
            }
            if (l1.next === null && l2.next !== null) {
                sumRootNode.next = new ListNode();
                sumLLCurr = sumRootNode.next;
                break;
            }
            if (l1.next !== null && l2.next === null) {
                sumRootNode.next = new ListNode();
                sumLLCurr = sumRootNode.next;
                break;
            }
            l1Curr = l1.next!;
            l2Curr = l2.next!;
            sumRootNode.next = new ListNode();
            sumLLCurr = sumRootNode.next;
            index += 1;
            continue;
        }

        const {val, carryOver} = addNodes(l1Curr, l2Curr, carry!);
        sumLLCurr.val = val;
        carry = carryOver;
        if (l1Curr.next === null && l2Curr.next === null) {
            if (carryOver === 1) {
                sumLLCurr.next = new ListNode(1);
            }
            return sumRootNode;
        }
        if (l1Curr.next === null && l2Curr.next !== null) {
            break;
        }
        if (l1Curr.next !== null && l2Curr.next === null) {
            break;
        }
        l1Curr = l1Curr.next!;
        l2Curr = l2Curr.next!;
        index += 1;
        sumLLCurr.next = new ListNode();
        sumLLCurr = sumLLCurr.next!;
    }

    if (l1Curr?.next || (index === 0 && l1.next)) {
        if (index === 0) {
            l1Curr = l1.next!;
        } else {
            l1Curr = l1Curr.next!;
            sumLLCurr.next = new ListNode();
            sumLLCurr = sumLLCurr.next!;
        }

        while (true) {
            const {val, carryOver} = addNodes(l1Curr, undefined, carry!);
            sumLLCurr.val = val;
            carry = carryOver;
            if (l1Curr?.next === null) {
                if (carryOver === 1) {
                    sumLLCurr.next = new ListNode(1);
                }
                return sumRootNode;
            }
            l1Curr = l1Curr.next!;
            sumLLCurr.next = new ListNode();
            sumLLCurr = sumLLCurr.next!;
        }
    }

    if (l2Curr?.next || (index === 0 && l2.next)) {
        if (index === 0) {
            l2Curr = l2.next!;
        } else {
            l2Curr = l2Curr.next!;
            sumLLCurr.next = new ListNode();
            sumLLCurr = sumLLCurr.next!;
        }
        while (true) {
            const {val, carryOver} = addNodes(l2Curr, undefined, carry!);
            sumLLCurr.val = val;
            carry = carryOver;
            // @ts-ignore
            if (l2Curr?.next === null) {
                if (carryOver === 1) {
                    sumLLCurr.next = new ListNode(1);
                }
                return sumRootNode;
            }
            l2Curr = l2Curr?.next;
            sumLLCurr.next = new ListNode();
            sumLLCurr = sumLLCurr.next!;
        }
    }


    return sumRootNode;
};

export default addTwoNumbers;