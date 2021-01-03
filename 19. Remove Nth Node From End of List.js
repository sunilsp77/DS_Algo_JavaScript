// with 2 passes

var removeNthFromEnd = function(head, n) {
    // calculate the length of list
    let first = head;
    let length = 0;
    while(first){
        length++;
        first = first.next
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    first = dummy;
    length -= n;
    while(length > 0){
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};


// In one pass

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy, second = dummy;
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    
    while(first){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}
