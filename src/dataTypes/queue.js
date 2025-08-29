class Queue {
    constructor() {
        this.item = [];
    }

    enqueue(data) {
        this.item.push(data);
    }

    dequeue() {
        if (this.item.length > 0) {
            this.item.shift();
        }
    }

    getSize() {
        return this.item.length;
    }

    isEmpty() {
        return this.item.length === 0 ? true : false
    }

    peek() {
        return this.item[0]
    }

    peekEnd() {
        return this.item[this.item.length - 1]
    }

    print() {
        return this.item
    }
}

export const queue = new Queue();