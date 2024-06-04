# Knights-Travails

This is a project assignment from The Odin Project.

## Assignment

Build a function called knightMoves(startingPosition, targetPosition) that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
Example:
` > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]`

## Steps

1. Think about the rules of the board and knight, make sure to follow them.
2. For every square there is a number of possible moves, choose a data structure that will allow you to work with them. Don't allow any moves to go off the board.
3. Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. OUtput what that full path looks like.

## Rules

# Rules of board

- The board is an 8x8 grid.
- Any coordinate (x, y) must satisfy 0 <= x < 8 and 0 <= y < 8.

# Rules of Knight

- A night may add the following values to their current X,Y values:
  movements = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  ];
- The movements reflect an 'L' shape of the knight's move: either two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular.

After calculating a potential new position(newX, newY) by adding one of the movemement vectors to the current position, we will check the new positions within the board boundaries.

## Purpose

---

The purpose of this project is to apply and deepen my understanding of graph traversal algorithms, specifically Depth-First Search (DFS) and Breadth-First Search (BFS), by solving a practical problem. I will implement a function called `knightMoves` that calculates the shortest path a knight can take to move from one square to another on a standard 8x8 chessboard. This project will help me grasp the concepts of graphs and their representations, as well as the mechanics of search algorithms, by simulating the movement of a knight on a chessboard. Through this exercise, I will enhance my problem-solving skills and gain practical experience in using data structures to navigate and find optimal paths in complex scenarios.

## Breadth-First and Depth-Frist Search

---

_Breadth-First Search_:
A graph traversal algorithm used to explore nodes and edges of a graph. It starts at a given node (often referred to as the "root") and explores all its neighboring nodes at the present depth level before mvoing on to nodes at the next depth level.

### Algorithm

1. Initialization:

   - Start with a queue and add the initial node to it.
   - Maintain a set to keep track of visited nodes to avoid reprocessing.

2. Exploration Loop:

- While the queue is not empty:

  - Dequeue a node from the front of the queue and initialize it as path.
  - If the current node is the target node return the path.
  - For each unvisited neighbor:
    - If the neighbor is valid and not yet visited:
      - mark the neighbor as visited
      - add the neighbor to the queue.

3. Termination:

   - The algorithm continues until the queue is empty or the target node is found.
