/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

  	/** push(val): add new value to end(should be top?) of the stack. Returns undefined. */

	push(val) {
		let newNode = new Node(val);

		if (!this.last) this.last = newNode;

		if (this.first) newNode.next = this.first;

		this.first = newNode;

		this.size++;
	}

  	/** pop(): remove the node from the top of the stack
   	* and return its value. Should throw an error if the stack is empty. */

	pop() {
		try {
			let firstItem = this.first;
			if (this.size === 1) {
				this.first = null
			} else { 
				this.first = this.first.next
			}
			this.size--;
			return firstItem.val;
		} catch (e) {
			throw Error("Stack empty, Error:", e)
		}
	}

  	/** peek(): return the value of the first node in the stack. */

	peek() {
		try {
			return this.first.val;
		} catch (e) {
			throw Error("Stack empty, Error:", e)
		}
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		if (this.size) return false;
		else return true;
	}
}

module.exports = Stack;
