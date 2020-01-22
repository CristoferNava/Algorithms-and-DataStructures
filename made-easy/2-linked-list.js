class ListNode {
  constructor(data) {
    this.data = data;
  }
}

const test = {
  head: {
    data: 4,
    next: {
      data: 15,
      next: {
        data: 40,
        next: {
          data: 7,
          next: null,
        }
      }
    }, 
  }
};

console.log(test.head.next.next.next.next.data);