class Stack {
  constructor() {
    this.storage = []
    this.count = 0
  }

  push(val) {
    this.storage.push(val)
    this.count++
  }

  pop() {
    if (this.count) {
      this.count--
      return this.storage.pop()
    }
  }

  size() {
    return this.count
  }
}