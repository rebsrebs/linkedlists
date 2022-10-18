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
      this.tail = nodeFactory(value, null);
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

  // remove last item
  pop() {
    let last = this.head;
    let penult;
    while (last.nextNode != null) {
      penult = last;
      last = penult.nextNode;
    }
    last.value = null;
    penult.nextNode = null;
    this.tail = penult;
  }

  // check if value is in list - return true or false
  contains(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    if (this.head === null) {
      return null;
    } else {
      let i = 0;
      let current = this.head;
      while (current) {
        if (value === current.value) {
          return i;
        } else if (current.nextNode) {
          current = current.nextNode;
          i++;
        } else {
          return null;
        }
      }
    }
  }

  //The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.head === null) {
      console.log('List is empty');
    } else {
      let current = this.head;
      console.log(current.value);
      while (current.nextNode != null) {
        current = current.nextNode;
        console.log(`${current.value} ->`);
      } 
      console.log(null);
    }
  }

  // inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    // if index is negative
    if (index < 0 || index === null) {
      console.log('Index must be 0 or greater.')
      return;
    }
    // if list is empty and index is 0
    if (index === 0) {
      this.prepend(value);
      return;
    } else {
      let i = 0;
      let current = this.head;
      let before;
      let after;
      while (index > i) {
        if (!current.nextNode && index > i+1) {
          console.log('Index number is too big');
          return;
        }
        before = current;
        current = current.nextNode;
        i++
      } 
      after = current;
      current = nodeFactory(value);
      before.nextNode = current;
      current.nextNode = after;
    }
  }

  // removes the node at the given index.
  removeAt(index) {
    if (!this.head) {
      console.log('List is already empty.')
      return;
    } else if (index < 0) {
      console.log('Index must be 0 or greater.')
      return;
    } else if (index === 0) {
      let newHead = this.head.nextNode;
      this.head = newHead;
      return;
    } else {
      let i = 1;
      let before = this.head;
      let current = before.nextNode;
      let after = current.nextNode;
      while (index > i) {
        before = current;
        current = after;
        after = current.nextNode;
        i++
      }
      current.value = null;
      before.nextNode = after;
    };
  }
}
