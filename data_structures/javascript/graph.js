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