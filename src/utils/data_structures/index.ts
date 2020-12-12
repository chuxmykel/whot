export class Node<T> {
  public next: Node<T> | null = null;
  constructor(public data: T) {}
}

export class Stack<T> {
  private top: Node<T> | null = null;

  get isEmpty(): boolean {
    return this.top === null;
  }

  peek(): T {
    if (this.top === null) {
      throw new Error('Stack is empty');
    }
    return this.top.data;
  }

  push(data: T): void {
    const node = new Node<T>(data);
    node.next = this.top;
    this.top = node;
  }

  pop(): T {
    if (this.top === null) {
      throw new Error('Stack is empty');
    }
    const { data } = this.top;
    this.top = this.top.next;
    return data;
  }

  fromArray(arr: T[]): Stack<T> {
    const stack = new Stack<T>();

    arr.forEach(item => {
      stack.push(item);
    });

    return stack;
  }

  toArray(): T[] {
    const array: T[] = [];

    while (!this.isEmpty) {
      array.push(this.pop());
    }

    return array;
  }
}
