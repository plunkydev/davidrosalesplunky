class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++;
    }

    remove(data) {
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        while (current) {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;
                    if (!current.next) {
                        this.tail = previous;
                    }
                } else {
                    this.head = current.next;
                    if (!this.head) {
                        this.tail = null;
                    }
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }

        return null;
    }

    print() {
        if(!this.size) return null;
        let result = ''
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            result += `[${current.data}] -> `
            if(!current.next) {
                result += 'null'
            }
            current = current.next
        }
        return result
    }
}

const list = new LinkedList();

export { list }