// Returns all nodes in the order in which they were visited.
// Make nodes point back to their previous node so that we can compute the shortest path
// by backtracking from the finish node.

export function AStar(grid, startNode, finishNode) {
  console.log('in astar')
  // array of all visited nodes
  const visitedNodesInOrder = [];
  // set start node distance to 0
  startNode.distance = 0;
  // array of all unvisited nodes
  const unvisitedNodes = getAllNodes(grid); 
  
  // unvisitedNodes.length = 15 * 15 or size of graph
  while (unvisitedNodes.length) {
    // get array of unvisited nodes by  sorted by distance
    sortByDistance(unvisitedNodes);
    // pop top node from sorted unvisited nodes array
    const closestNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (!closestNode.isWall) {
      // If the closest node is at a distance of infinity,
      // we must be trapped and should stop.
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === finishNode) return visitedNodesInOrder;
      updateUnvisitedNeighbors(closestNode, grid);
    }
  }
}

// creates and returns array of all nodes
function getAllNodes(grid) {
  // nodes array
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      console.log(node)
      nodes.push(node);
    }
  }
  return nodes;
}

function sortByDistance(unvisitedNodes) {
  // return sorted array of unvisited nodes by distance
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1 + neighbor.distanceToFinishNode;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}