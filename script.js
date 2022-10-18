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
  constructor() {
    this.head = null;
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
      this.head = nodeFactory(value, this.temp.value);
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
      this.temp.nextNode = this.tail.value;
    }
  }

  getSize() {
    if (this.head === null) {
      return 0;
    } else {
      let i = 1;
      let current = this.head;
      while (current.nextNode != null) {
        console.log(`current.nextNode is ${current.nextNode}`);
        i++
        current = current.nextNode;
        console.log(`current.nextNode is ${current.nextNode}`);
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

}


