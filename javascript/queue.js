//Queue: start
//Notes: Queue = shift(), stack = pop()
console.log('Queue: start')
//es6 class style instantiation:
//This is essentially the same as psuedoclassical instantiation* Double check this
//Repeat in the other 3 instantiation styles*
//
//A queue is a type of data structure where the first datum into the structure
//is the first one out. Similarly, the last datum in is the last one out.
//Making it either FIFO or LILO, for short.
//Use cases: research use cases for queue*

class Queue {
  constructor() {
    this.storage = []
    this.count = 0
  }
  
  enqueue(val) {
    this.count++
    this.storage.push(val)
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
  
  viewStorage() {
    this.storage.forEach(v => console.log(v))
  }
}

//Test:
const queueExamp = new Queue()
queueExamp.enqueue(1)
queueExamp.enqueue(2)
queueExamp.enqueue(3)
queueExamp.dequeue()
queueExamp.enqueue(4)
queueExamp.enqueue(5)
queueExamp.enqueue(6)
queueExamp.dequeue()
console.log(queueExamp.size()) //Should equal 4
queueExamp.viewStorage() //Should equal 3 4 5 6
console.log('Queue: end')
//Queue: end