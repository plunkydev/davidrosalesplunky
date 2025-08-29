class Stak {
    constructor() {
        this.item = {};
        this.top = 0;
    }

    push(data) {
        this.top++;
        this.item[this.top] = data;
    }

    pop() {
        if (!this.isEmpty()) {
            delete this.item[this.top];
            this.top--;
        } else {
            return null;
        }
    }

    isEmpty() {
        if(this.getSize() === 0) {
            return true;
        } else {
            return false;
        }
    }

    getSize() {
        return this.top;
    }

    peek() {
        if(this.isEmpty()) return null
        return this.item[this.top];
    }

    print() {
        if (!this.isEmpty()) {
            let print = [];
            for (let i = this.top; i > 0; i--) {
                print.push(this.item[i]);
            }
            return print
        } else {
            return null;
        }
    }
}

export const stak = new Stak();