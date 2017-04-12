class Queue {
  constructor() {
    this.storage = []
    this.count = 0
  }

  enqueue(val) {
    this.storage.push(val)
    this.count++
  }

  dequeue() {
    if (this.count) {
      this.count--
      return this.storage.shift()
    }
  }

  size() {
    return this.count
  }
}