const BST = value => {
  this.value = value;
  this.right = null;
  this.left = null;
  this.count = 1;
};

// adding a node to a BST
BST.prototype.add = value => {
  // init a current var to track the current position
  let current = this;

  // init a while loop
  while (current !== null) {
    // check if value is less than current value and if it is null
    if (value < current.value) {
      if (current.left === null) {
        // if null and val is less, you reached the end of the tree and can place the node there
        current.left = new BST(value);
        break;
      }
      // if val is not null, set current to left side because it is less
      current = current.left;
      continue;
    }
    else if (value > current.value) {
      if (current.right === null) {
        // if null and val is greater, you reached end and can place node
        current.right = new BST(value);
        break;
      }
      // otherwise, set current to right side because it is greater
      current = current.right;
      continue;
    }
    else if (value === current.value) {
      // if value is the same, increment that node's count
      current.count++;
      break;
    }
  }
};

BST.prototype.contains = value => {
  // init a variable to track current position
  let current = this;
  // traverse through the tree, checking the value of current at each point
  while (current !== null) {
    // if val is the value we're looking for, return true
    if (current.value === value) {
      return true;
    }

    // if val is smaller, go left
    if (value < current.value) {
      current = current.left;
      continue;
    }
    // if val is larger, go right
    if (value > current.value) {
      current = current.right;
      continue;
    }
    // if we run into null, stop traversing & return false
  }
  return false;
};

// applies the callback in the order of depth first (pre-order)
BST.prototype.depthFirstPre = callback => {
  const current = this;
  callback(current.value);

  if (current.left) {
    current.left.depthFirstPre(callback);
  }

  if (current.right) {
    current.right.depthFirstPre(callback);
  }
};

// applies the callback in the order of depth first (in-order)
BST.prototype.depthFirstIn = callback => {
  const current = this;

  const left = current.left;
  if (left) {
    left.depthFirstIn(callback);
  }

  callback(current.value);

  const right = current.right;
  if (right) {
    right.depthFirstIn(callback);
  }
};

// applies the callback in the order of depth first (post-order)
BST.prototype.depthFirstPost = callback => {
  const current = this;

  const left = current.left;
  if (left) {
    left.depthFirstPost(callback);
  }

  const right = current.right;
  if (right) {
    right.depthFirstPost(callback);
  }
  callback(current.value);
};

// applies the callback in the order of breadth first (level order)
BST.prototype.breadthFirst = callback => {
  // not implementing a queue data structure for this algo
  // unshifting is generally not the quickest way to achieve the desired result

  // [] => queue;
  const queue = [];
  // push in our current node
  queue.push(this);

  while (queue.length) {
    const current = queue[0];
    callback(current.value);

    if (current.left) {
      queue.push(current.left);
    }
    
    if (current.right) {
      queue.push(current.right);
    }
    queue.shift();
  }
};