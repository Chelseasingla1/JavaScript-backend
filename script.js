// classes and constructors functions

// function Student(roll_no, name, age){
//     this.roll_no = roll_no
//     this.name = name
//     this.age = age
//     this.printName = function(){
//         console.log(this.name)
//     }
// }

// const student1 = new Student(1, "Chelsea", 20)
// console.log(student1.age)
// student1.printName()

  // classes
// class Student{
//     constructor(roll_no, name, age){ // constructor
//         this.roll_no = roll_no
//         this.name = name
//         this.age = age
//     }
//     printName(){ // methods
//         console.log(this.name)
//     }
//     printName(name){
//         console.log(name)
    
//     }
// }

// const Student1 = new Student(1, "Chelsea", 20) // object
// console.log(Student1.age)
// Student1.printName()
// Student1.printName("hey")


// function Add(a,b,c){
//     //console.log(arguments) // it did not work here 
//     console.log(a+b+c)
// }

// function Add(a,b){
//     console.log(arguments) // final call // arguments will be checked here // js treats last function as finsl
//     console.log(a+b)
// }

// Add(1,2,3) // only adding first two numbers
// Add(3,4)


// function LinkedList(){
//     this.head = null
//     this.tail = null
//     this.add = function(){
//         const node = {
//             value: 2,
//             next: null
//         }
//         if(this.head === null){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//     }
//     this.print = function(){
//         let current = this.head
//         while(current !== null){
//             console.log(current.value)
//             current = current.next
//         }
//     }
//     // this.remove = function(value){
//     //     if(this.head.value === value){
//     //         this.head = this.head.next
//     //     }else{
//     //         let current = this.head
//     //         while(current.next !== null){
//     //             if(current.next.value === value){
//     //                 current.next = current.next.next
//     //                 break
//     //             }
//     //             current = current.next
//     //         }
//     //     }
//     // }

// }

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// class LinkedList{
//     constructor(){
//         this.head = null
//     }
// }

class LinkedList{
    constructor(){
        this.head = null
    }
    add(value) {
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }

    addAtIndex(index, value){
        const node = new Node(value)
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let current = this.head
            let currentIndex = 0
            while(current && currentIndex < index - 1){
                current = current.next
                currentIndex++
            }
            if(current){
                node.next = current.next
                current.next = node
            }
        }
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

    deleteAt(index)
    {
        if(!this.head) return; // if list is empty return nothing to delete
        let current = this.head;  //  point to current node , starting from head of list
        let previous = null; // points to the previous node in the list, which is set to null
        let currentIndex =0; // keeps track of current index being processed staring from 0
        // basically creating a loop to go through each node
        // loop execution 
        while(current && currentIndex < index){ // first current node is not null ensuring we have not reached the end of linked list
            // second is currentIndex is less than targeted index which we want to delete
            previous = current; // point to the current node
            current = current.next;
            currentIndex++;
        }

        if(!current) return;

        if(!previous){
            this.head = current.next;}
            else{
                previous.next = current.next;
            }
            return current.value;
    }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.print()

list.deleteAt(2)
list.print()