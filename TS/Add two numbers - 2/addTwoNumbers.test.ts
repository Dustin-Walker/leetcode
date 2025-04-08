import addTwoNumbers, {ListNode} from "./AddTwoNumbersRecursive";

describe('addTwoNumbers', () => {
    test('case 1', () => {
        const l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        const l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        const expectedOutputLL = new ListNode(7);
        expectedOutputLL.next = new ListNode(0);
        expectedOutputLL.next.next = new ListNode(8);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 2', () => {
        const l1 = new ListNode(0);

        const l2 = new ListNode(0);

        const expectedOutputLL = new ListNode(0);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 3', () => {
        const l1 = new ListNode(9);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(9);
        l1.next.next.next = new ListNode(9);
        l1.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next.next = new ListNode(9);

        const l2 = new ListNode(9);
        l2.next = new ListNode(9);
        l2.next.next = new ListNode(9);
        l2.next.next.next = new ListNode(9);

        const expectedOutputLL = new ListNode(8);
        expectedOutputLL.next = new ListNode(9);
        expectedOutputLL.next.next = new ListNode(9);
        expectedOutputLL.next.next.next = new ListNode(9);
        expectedOutputLL.next.next.next.next = new ListNode(0);
        expectedOutputLL.next.next.next.next.next = new ListNode(0);
        expectedOutputLL.next.next.next.next.next.next = new ListNode(0);
        expectedOutputLL.next.next.next.next.next.next.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 4', () => {
        const l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(9);

        const l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        l2.next.next.next = new ListNode(9);

        const expectedOutputLL = new ListNode(7);
        expectedOutputLL.next = new ListNode(0);
        expectedOutputLL.next.next = new ListNode(4);
        expectedOutputLL.next.next.next = new ListNode(0);
        expectedOutputLL.next.next.next.next = new ListNode(1);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 5', () => {
        const l1 = new ListNode(9);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(1);

        const l2 = new ListNode(1);

        const expectedOutputLL = new ListNode(0);
        expectedOutputLL.next = new ListNode(0);
        expectedOutputLL.next.next = new ListNode(2);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 6', () => {
        const l1 = new ListNode(1);
        l1.next = new ListNode(8);

        const l2 = new ListNode(0);

        const expectedOutputLL = new ListNode(1);
        expectedOutputLL.next = new ListNode(8);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
    test('case 7', () => {
        const l1 = new ListNode(0);

        const l2 = new ListNode(7);
        l2.next = new ListNode(3);

        const expectedOutputLL = new ListNode(7);
        expectedOutputLL.next = new ListNode(3);

        expect(addTwoNumbers(l1, l2)).toEqual(expectedOutputLL)
    });
})