# Knights-Travails

This is a project assignment from The Odin Project.

## Purpose

---

The purpose of this project is to apply and deepen my understanding of graph traversal algorithms, specifically Depth-First Search (DFS) and Breadth-First Search (BFS), by solving a practical problem. I will implement a function called `knightMoves` that calculates the shortest path a knight can take to move from one square to another on a standard 8x8 chessboard. This project will help me grasp the concepts of graphs and their representations, as well as the mechanics of search algorithms, by simulating the movement of a knight on a chessboard. Through this exercise, I will enhance my problem-solving skills and gain practical experience in using data structures to navigate and find optimal paths in complex scenarios.

## Breadth-First and Depth-Frist Search

---

_Breadth-First Search_:
A graph traversal algorithm used to explore nodes and edges of a graph. It starts at a given node (often referred to as the "root") and explores all its neighboring nodes at the present depth level before mvoing on to nodes at the next depth level.

# Algorithm

1. Initialization:

   - Start with a queue and add the initial node to it.
   - Maintain a set or array to keep track of visited nodes to avoid reprocessing.

2. Processing:

   - Dequeue a node from the front of the queue.
   - For each unvisited neighbor of this node, mark it as visited, and enqueue it.
   - If the target node is found, terminate the search.

3. Termination:

   - The algorithm continues until the queue is empty or the target node is found.

## Depth-First Search

_Breadth-First Search_:
A graph traversal algorithm used to explore nodes and edges of a graph by starting at a given node ("root") and exploring as far as possible along each branch before backtrack. This method is useful for tasks that require exploring all possible paths or confirgurations, such as puzzles and maze-solving.

# Algorithm

1. Initialization:

   - Start with a stack (or use recursion) and add the initial node to it.
   - Maintain a set or array to keep track of visited nodes to avoid reprocessing.

2. Processing:

   - Pop a node from the stack.
   - For each unvisited neighbor of this node, mark it as visited and push it onto the stack.
   - If the target node is found, terminate the search.

3. Termination:

   - The algorithm continues until the stack is empty or the target node is found.
