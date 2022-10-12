class MinStack {
  stack: number[] = [];
  minStack: number[] = [];
  
  constructor() {

  }

  push(val: number): void {
      this.stack[this.stack.length] = val;
      this.minStack[this.minStack.length] = Math.min(val, this.getMin());
  }

  pop(): void {
      this.stack.length = this.stack.length - 1;
      this.minStack.length = this.minStack.length - 1;
  }

  top(): number {
      return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    if (this.minStack[this.minStack.length - 1] || this.minStack[this.minStack.length - 1] === 0) {
      return this.minStack[this.minStack.length - 1];
    } else {
      return Infinity;
    }
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/