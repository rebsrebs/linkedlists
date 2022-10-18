// NODE FACTORY FUNCTION
const nodeFactory = (value, nextNode) => {
  if (!value) {
    value = null;
  }
  if (!nextNode) {
    nextNode = null;
  }
  return { value, nextNode };
};


// LIST CLASS
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.temp = null;
  }

  // Methods
  prepend(value) {
    // if list is empty
    if (this.head === null) {
      // create a node with value and no pointer, store it as head
      this.head = nodeFactory(value);
      this.tail = this.head;
    } else {
      // move previous head to temp
      this.temp = this.head;
      // put new value at head and point it to temp value
      this.head = nodeFactory(value, this.temp);
    }
  }

  append(value) {
    // if list is empty
    if (this.head === null) {
      this.prepend(value);
    } else {
      // move previous tail to temp
      this.temp = this.tail;
      // create new node with value and no pointer
      this.tail = nodeFactory (value, null);
      // point previous tail to new tail
      this.temp.nextNode = this.tail;
    }
  }

  getSize() {
    if (this.head === null) {
      return 0;
    } else {
      let i = 1;
      let current = this.head;
      while (current.nextNode != null) {
        console.log(`current.nextNode value is ${current.nextNode.value}`);
        i++
        current = current.nextNode;
      } 
      return i;
    }
  }

  toString() {
    if (this.head === null) {
      console.log('List is empty');
    } else {
      let current = this.head;
      console.log(current.value);
      while (current.nextNode != null) {
        current = current.nextNode;
        console.log(current.value);
      } 
    }
  }

  getHead() {
    if (this.head == null) {
      console.log('List is empty');
    } else {
      console.log(this.head.value);
      return this.head.value;
    }
  }

  getTail() {
    if (this.tail == null) {
      console.log('List is empty');
    } else {
      console.log(this.tail.value);
    }
  }

  at(index) {
    // if list is empty
    if (this.head == null) {
      console.log('List is empty')
    // if index is negative
    } else if (index < 0) {
        console.log('Please put an index of 0 or greater.')
    // if index is 0
    } else if (index === 0) {
      console.log(this.head.value);
    } else {
      let i = 0;
      let current = this.head;
      while (index > i){
        if (current.nextNode) {
        current = current.nextNode;
        i++
        } else {
          console.log('The list is not that long.')
          return;
        }
      }
      console.log(current.value);
    }
  }

}



