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