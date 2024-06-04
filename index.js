function knightMoves(start, end) {
  // All possible movements added to the current position of the knight.
  const movements = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  /**
   * Checks if a movement is valid or not.
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @returns {boolean}
   */
  function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  function bfs(start, end) {
    let queue = [[start]]; // keeps track of nodes currently being visited.
    let visited = new Set(); //keeps track of nodes already explored/visited.

    // add start to visited.
    visited.add(start.toString());

    //loop through. If the queue is empty then there are no more paths to take.
    while (queue.length > 0) {
      // pop off the first element in the queue. Path is the array of coordinates.
      let path = queue.shift();

      // Initialize [x,y] which will be the current position we will explore.
      let [x, y] = path[path.length - 1];

      // check if target position is reached.
      if (x === end[0] && y === end[1]) {
        return path;
      }

      // add the movements
      for (let [dx, dy] of movements) {
        let newX = x + dx;
        let newY = y + dy;

        // check to make sure the new positions are on the board and make sure we haven't already visited.
        if (isValidMove(newX, newY) && !visited.has([newX, newY].toString())) {
          //if it's a valid move and we haven't been there before, then we add it to visited, then we push it to the queue at the end.
          visited.add([newX, newY].toString());
          queue.push([...path, [newX, newY]]);
        }
      }
    }
  }

  const resultPath = bfs(start, end);

  console.log(
    `You made it in ${resultPath.length - 1} moves! Here's your path`
  );
  resultPath.forEach((square) => {
    console.log(square);
  });

  return resultPath;
}

knightMoves([0, 0], [3, 3]); // Example output: [[0, 0], [2, 1], [3, 3]] or another valid path
knightMoves([3, 3], [0, 0]); // Example output: [[3, 3], [1, 2], [0, 0]] or another valid path
knightMoves([0, 0], [7, 7]);
