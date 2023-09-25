class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (!this.top) this.top = new Node(value);
    else {
      let nodo = new Node(value);
      nodo.next = this.top;
      this.top = nodo;
    }
  }
  pop() {
    let oldTop = this.top;
    this.top = oldTop && oldTop.next;
    return oldTop && oldTop.value;
  }
  peek() {
    return this.top && this.top.value;
  }
}

class MinStack extends Stack {
  // Your code here:
  constructor() {
    super();
    this.minimum = new Stack();
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
      this.minimum.push(value);
    } else {
      let nodo = new Node(value);
      nodo.next = this.top;
      this.top = nodo;
      if (this.minimum.peek() > value) this.minimum.push(value);
      else this.minimum.push(this.minimum.peek());
    }
  }

  pop() {
    let oldTop = this.top;
    this.top = oldTop && oldTop.next;
    this.minimum.pop();
    return oldTop && oldTop.value;
  }

  min() {
    return this.minimum.peek();
  }
}

module.exports = {
  Node,
  MinStack,
};
