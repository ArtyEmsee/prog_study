class Node(data, next) {
  constructor() {
    this.data = data
    this.next = next
  }

  getData() {
    return this.data
  }
}

class LinkedList() {
  constructor() {
    this.head = new Node(null, null)
    this.length = 0
  }

  append(data) {
    if (!this.head.data) {
      this.head = new Node(data, null)
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      const node = new Node(data, null)
      curr.next = node
    }
    this.length++
  }

  prepend(data) {
    if (!this.head.data) {
      this.head = new Node(data, null)
    } else {
      let node = new Node(data, this.head)
      this.head = node
    }
  }

  getHead() {
    return this.head
  }

}