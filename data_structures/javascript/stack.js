//Stack: start
//Notes: Queue = shift(), stack = pop()
console.log('Stack: start')
//es6 class style instantiation:
//This is essentially the same as psuedoclassical instantiation* Double check this
//Repeat in the other 3 instantiation styles*
//
//A stack is a type of data structure where the first datum into the structure
//is the last one out. Similarly, the last datum in is the first one out.
//Making it either FILO or LIFO, for short.
//Use cases: Bracket balancing, research other possibilities*
class Stack {
  constructor() {
    this.storage = []
    this.count = 0
  }
  
  push(val) {
    this.count++
    this.storage.push(val)
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
  
  viewStorage() {
    this.storage.forEach(v => console.log(v))
  }
}
//Test:
const stackExamp = new Stack()
stackExamp.push(1)
stackExamp.push(2)
stackExamp.push(3)
stackExamp.pop()
stackExamp.push(4)
stackExamp.push(5)
stackExamp.push(6)
stackExamp.pop()
console.log(stackExamp.size()) //Should equal 4
stackExamp.viewStorage() //Should equal 1 2 4 5
console.log('Stack: start')
//Stack: end