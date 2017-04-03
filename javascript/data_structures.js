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

//LINKED LIST_start
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
//LINKED LIST_end

//GRAPH_start
Array.prototype.contains = function(name) {
  let i = this.length
  while (i--) {
    if (this[i].name === name) {
      return true
    }
  }
  return false
}

class Node {
  constructor(name) {
    this.edge_list = []
    this.name = name
  }

  addEdge(end) {
    this.edge_list.push(end)
  }
}

class Graph() {
  constructor() {
    this.node_list = []
  }

  addEdge(start, end) {
    const first = this.node_list.contains(start)
    const second = this.node_list.contains(end)

    if (first) {
      let i = this.node_list.length
      while (i--) {
        if (this.node_list[i].name === start) {
          this.node_list[i].addEdge(end)
          break
        }
      }
    }
    if (second) {
      let i = this.node_list.length
      while (i--) {
        if (this.node_list[i].name === end) {
          this.node_list[i].addEdge(start)
          break
        }
      }
    }
    if (!first || !second) {
      if (!first) {
        const node = new Node(start)
        node.addEdge(end)
        this.node_list.push(node)
      }
      if (!second) {
        const node = new Node(end)
        node.addEdge(start)
        this.node_list.push(node)
      }
    }
  }

  printNodes() {
    for (let i = 0; i < this.node_list.length; i++) {
      console.log(this.node_list[i].name + ':' + this.node_list[i].edge_list)
    }
  }
}
//GRAPH_end




//GRAPH_end

//HASH TABLE_start
const hashFn = (str, max) => {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash & hash
    hash = Math.abs(hash)
  }
  return hash % max
}

class HashTable {
  constructor() {
    this.storage = []
    this.storageMax = 4
    this.size = 0
  }

  insert(key, val) {
    var index = hashFn(key, this.storageMax)
    if (!this.storage[index]) {
      this.storage[index] = [[key, val]]
    } else {
      var inserted = false
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = val
          inserted = true
        }
      }
      if (!inserted) {
        this.storage[index].push([key, val])
        this.size++
        if (this.size / this.storageMax >= 0.75) {
          this.resize(this.storageMax * 2)
        }
      }
    }
  }

  retrieve(key) {
    var index = hashFn(key, this.storageMax)
    if (!this.storage[index]) {
      return 
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1]
        }
      }
    }
  }

  remove(key) {
    var index = hashFn(key, this.storageMax)
    if (this.storage.length && storage[index][0][0] === key) {
      delete this.storage[index]
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i]
          this.size--
          if (this.size / this.storageMax <= 0.25) {
            this.resize(this.storageMax / 2)
          }
        }
      }
    }
  }

  resize(newStorageMax) {
    const oldStorage = this.storage
    this.storageMax = newStorageMax
    this.storage = []
    this.size = 0

    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i]) {
        for (let j = 0; j < oldStorage[i].length; j++) {
          this.insert(oldStorage[i][j][0], oldStorage[i][j][1])
        }
      }
    }
  }
}
//HASH TABLE_end

//Tree

//Binary Search Tree
