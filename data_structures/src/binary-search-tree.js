class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    // traverse tree
    const traverse = (node) => {
      cb(node.value);
      // move left
      if(node.left !== null) traverse(node.left);
      // move right
      if(node.right !== null) traverse(node.right);
  };
  // start at root (PreOrder)
  traverse(this);

  }

  breadthFirstForEach(cb) {
    /* Your code here */
    // create queue
    const queue = [];
    queue.push(this);

    // is not empty
    while (queue.length !== 0) {
        const node = queue.shift();
        cb(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;