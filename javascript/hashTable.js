const hashFn = (str, max) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) { //Cycle through char of str
    hash = (hash << 5) + hash + str.charCodeAt(i) //<< is bit shift left 5 digits, charCodeAt provides ASCII code for character
    hash = hash & hash //This is bitwise operation to overlay the 1s of two different numbers
    // If you have A = 1 0 1 0
    // And         B = 0 1 0 1
    // The result of A & B will be 1 1 1 1
    hash = Math.abs(hash) // To protect from edge cases
  }
  return hash % max //This is to reduce the number to the 0 - max range
}

class HashTable {
  constructor() {
    this.storage = []
    this.storageMax = 4
    this.size = 0
  }

  insert(key, val) {
    let index = hashFn(key, this.storageMax) //retrieve index
    if (!this.storage[index]) { //if the bucket doesn't exist
      this.storage[index] = [[key, val]] //insert the key/value pair into the bucket
    } else { //else if the bucket does exist
      let inserted = false //variable for checking if the kv pair is already in the bucket
      for (let i = 0; i < this.storage[index].length; i++) { //iterate through bucket
        if (this.storage[index][i][0] === key) { //find key
          this.storage[index][i][1] = val //update value
          inserted = true //set bool to true to skip reinsertion
        }
      }
      if (!inserted) { //if it's not found in bucket
        this.storage[index].push([key, val]) //insert it into the bucket
        this.size++ //double check if this is where I need to do this
        if (this.size / this.storageMax >= 0.75) { //check for resize conditions
          this.resize(this.storageMax * 2) //resize with a new max two times greater
        }
      }
    }
  }

  retrieve(key) {
    let index = hashFn(key, this.storageMax) //retrieve index
    if (!this.storage[index]) { //if the bucket doesn't exist
      return //return nothing
    } else {
      for (let i = 0; i < this.storage[index].length; i++) { //else, iterate through the bucket
        if (this.storage[index][i][0] === key) { //to find the key
          return this.storage[index][i][1] //and return the value
        }
      }
    }
  }

  remove(key) {
    let index = hashFn(key, this.storageMax)
    if (this.storage.length && storage[index][0][0] === key) {
      delete this.storage[index]
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i]
          this.size--
          if (this.size / this.storageMax <= 0.25) { //I need to put the resize checks above under the bucket deletion and retest
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