//collection of ndoes

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }

    addAtHead(val) {
        let node = new Node(val);
        if (this.size == 0) {
            this.head = node;
            // return;
        } else {
            node.next = this.head // new node valuwe jo head mei thi vode next node mei jayegi
            this.head = node;
        } // jo node hai vo head mei h=jayegi 
        this.size++;

    }

    addAtIndex(index, val) {
        if (index < 0 && index > this.size) {
            return;
        }
        if (index === this.size) { // Step 2: Handle adding at tail
            this.addAtTail(val);
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        let node = new Node(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            //current = this.head.next;
            current = current.next;
        }
        node.next = current.next;
        //node.next= this.head.next
        current.next = node; // this.head.next = node
        this.size++;
    }

    addAtTail(val) {
        let node = new Node(val)
        if (this.size == 0) {
            this.head = node;
        }
        // if(this.size==0)
        // {   this.addAtHead(val);
        //     return;
        // } 
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            // this.addAtIndex(index,val)
            // return;
        } this.size++;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return null; // or throw an error
        }
        if (index == 0) {
            return this.head;
        }
        else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            return current.next.val;

        }
    }
    deleteAtIndex(index) {
        if (index < 0 && index >= this.size) {
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) { // if we wny to delete at 2 it will run 1 time
                current = current.next;

            }
            current.next = current.next.next;
        }
        this.size--;
        // let current = this.head;
        // for(let i=0; i<index-1; i++){
        //     current = current.next; // this.head = this.head.next
        // }
        // current.next = current.next.next; // this.head.next = this.head.next.next
        // this.size--;

    }
    // print(){
    //     if(this.size==0){
    //         return;
    //     }
    //     let result = [this.head.val];
    //     let current = this.head;
    //     for(let i=0; i< this.size-1; i++){
    //         current = current.next;
    //         result.push(current.val);
    //     }
    //     // while(current){
    //       console.log(result);
    //     //     current = current.next;
    //     // }
    // }
    print() {
        if (this.size == 0) {
            console.log("List is empty");
            return;
        }
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result);
    }



}
const list = new LinkedList();
list.addAtHead(1)
list.addAtHead(2)
list.addAtTail(3)
list.addAtIndex(0, 78)
list.print()
list.deleteAtIndex(0)
list.print()
//console.log(list.get(2))

