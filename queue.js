	/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

	/** Queue: chained-together nodes where you can
	 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		let newNode = new Node(val);

		if (!this.first) this.first = newNode;

		if (this.last) this.last.next = newNode;

		this.last = newNode;

		this.size++;
	}

	/** dequeue(): remove the node from the start of the queue
	 * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		try {
			let firstItem = this.first;
			if (this.size > 1) this.first = this.first.next;
			else this.head = null;
			this.size--;
			return firstItem.val;
		} catch (e) {
			throw Error("Queue is empty. Error:", e)
		}
	}

	/** peek(): return the value of the first node in the queue. */

	peek() {
		try {
			return this.first.val;
		} catch (e) {
			throw Error("Queue is empty. Error:", e)
		}
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		if (this.size) return false;
		else return true;
	}
}

	module.exports = Queue;
