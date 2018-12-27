//TO DO: create stack

class Stack {
  constructor() {
    this.storage = []
    this.size = 0 //should refer to this as count
  }

  push(val) {
    this.size++
    this.storage.push(val)
  }

  pop() { //ERROR: needs to check if there is anything in storage first
    this.size--
    return this.storage.shift() //ERROR: this should be a pop, not shift, shift is for queue
  }

  size() {
    return this.size
  }
}

//TO DO: create queue

//TO DO: create linked list

//TO DO: create graph

//TO DO: create hash table