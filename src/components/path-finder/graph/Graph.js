import React, { Component } from 'react'
import Node from '../node/Node'
import { dijkstra } from '../../../algorithms/searches/Dijkstra'
import { AStar } from '../../../algorithms/searches/AStar'
import { dfs } from '../../../algorithms/searches/DepthFirstSearch'
import { bfs } from '../../../algorithms/searches/BreathFirstSearch'
import DijkstraInfo from '../../../algorithms/info/dijkstra/DijkstraInfo'
import AstarInfo from '../../../algorithms/info/a-star/AstarInfo'
import BreathFirstSearchInfo from '../../../algorithms/info/breath-first-search/BreathFirstSearchInfo'
import DepthFirstSearchInfo from '../../../algorithms/info/depth-first-search/DepthFirstSearchInfo'


import './Graph.css'

export default class Graph extends Component {
  constructor() {
    super()
    this.state = {
      grid: [],
      START_NODE_ROW: 1,
      FINISH_NODE_ROW: 12,
      START_NODE_COL: 2,
      FINISH_NODE_COL: 12,
      mouseIsPressed: false,
      ROW_COUNT: 15,
      COLUMN_COUNT: 15,
      isRunning: false,
      isStartNode: false,
      isFinishNode: false,
      isWallNode: false, 
      currRow: 0,
      currCol: 0,
      info: '',
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.toggleIsRunning = this.toggleIsRunning.bind(this)
  }
  // occurs when page loads
  // create initial grid and set state
  componentDidMount() {
    const grid = this.getInitialGrid()
    this.setState({grid})
  }

  toggleIsRunning() {
    this.setState({isRunning: !this.state.isRunning})
  }


  // Create initial grid with number of rows and columns
  getInitialGrid = (
    rowCount = this.state.ROW_COUNT,
    colCount = this.state.COLUMN_COUNT,
  ) => {
    const initialGrid = []
    for (let row = 0; row < rowCount; row++) {
      const currentRow = []
      for (let col = 0; col < colCount; col++) {
        currentRow.push(this.createNode(row, col))
      }
      initialGrid.push(currentRow)
    }
    return initialGrid
  }

  // Creates node with row and column values
  createNode = (row, col) => {
    return {
      row,
      col,
      isStart:
        row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
      isFinish:
        row === this.state.FINISH_NODE_ROW &&
        col === this.state.FINISH_NODE_COL,
      distance: Infinity,
      distanceToFinishNode:
        Math.abs(this.state.FINISH_NODE_ROW - row) +
        Math.abs(this.state.FINISH_NODE_COL - col),
      isVisited: false,
      isWall: false,
      previousNode: null,
      isNode: true,
    }
  }

 // What happens when you click down on mouse
  handleMouseDown(row, col) {
    // check to make sure animation is not running
    if (!this.state.isRunning) {
      // check to see if grid is clear
      if (this.isGridClear()) {
        // determines if start node
        if (
          document.getElementById(`node-${row}-${col}`).className ===
          'node node-start'
        ) {
          // selects if click on start node allowing change of start
          this.setState({
            mouseIsPressed: true,
            isStartNode: true,
            currRow: row,
            currCol: col,
          })
          // determines of finish node
        } else if (
          document.getElementById(`node-${row}-${col}`).className ===
          'node node-finish'
        ) {
          this.setState({
            mouseIsPressed: true,
            isFinishNode: true,
            currRow: row,
            currCol: col,
          })
        } else {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col)
          this.setState({
            grid: newGrid,
            mouseIsPressed: true,
            isWallNode: true,
            currRow: row,
            currCol: col,
          })
        }
      } else {
        // resets grid if path search has run and click down on mouse
        this.clearGrid()
      }
    }
  }

  isGridClear() {
    // traverse rows of grid
    for (const row of this.state.grid) {
      // traverse columns of grid
      for (const node of row) {
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`,
        ).className
        if (
          nodeClassName === 'node node-visited' ||
          nodeClassName === 'node node-shortest-path'
        ) {
          return false
        }
      }
    }
    return true
  }

  handleMouseEnter(row, col) {
    if (!this.state.isRunning) {
      if (this.state.mouseIsPressed) {
        const nodeClassName = document.getElementById(`node-${row}-${col}`)
          .className
        if (this.state.isStartNode) {
          if (nodeClassName !== 'node node-wall') {
            const prevStartNode = this.state.grid[this.state.currRow][
              this.state.currCol
            ]
            prevStartNode.isStart = false
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`,
            ).className = 'node'

            this.setState({currRow: row, currCol: col})
            const currStartNode = this.state.grid[row][col]
            currStartNode.isStart = true
            document.getElementById(`node-${row}-${col}`).className =
              'node node-start'
          }
          this.setState({START_NODE_ROW: row, START_NODE_COL: col})
        } else if (this.state.isFinishNode) {
          if (nodeClassName !== 'node node-wall') {
            const prevFinishNode = this.state.grid[this.state.currRow][
              this.state.currCol
            ]
            prevFinishNode.isFinish = false
            document.getElementById(
              `node-${this.state.currRow}-${this.state.currCol}`,
            ).className = 'node'

            this.setState({currRow: row, currCol: col})
            const currFinishNode = this.state.grid[row][col]
            currFinishNode.isFinish = true
            document.getElementById(`node-${row}-${col}`).className =
              'node node-finish'
          }
          this.setState({FINISH_NODE_ROW: row, FINISH_NODE_COL: col})
        } else if (this.state.isWallNode) {
          const newGrid = getNewGridWithWallToggled(this.state.grid, row, col)
          this.setState({grid: newGrid})
        }
      }
    }
  }

  handleMouseUp(row, col) {
    if (!this.state.isRunning) {
      this.setState({mouseIsPressed: false})
      if (this.state.isStartNode) {
        const isStartNode = !this.state.isStartNode
        this.setState({isStartNode, START_NODE_ROW: row, START_NODE_COL: col})
      } else if (this.state.isFinishNode) {
        const isFinishNode = !this.state.isFinishNode
        this.setState({
          isFinishNode,
          FINISH_NODE_ROW: row,
          FINISH_NODE_COL: col,
        })
      }
      this.getInitialGrid()
    }
  }

  handleMouseLeave() {
    if (this.state.isStartNode) {
      const isStartNode = !this.state.isStartNode
      this.setState({isStartNode, mouseIsPressed: false})
    } else if (this.state.isFinishNode) {
      const isFinishNode = !this.state.isFinishNode
      this.setState({isFinishNode, mouseIsPressed: false})
    } else if (this.state.isWallNode) {
      const isWallNode = !this.state.isWallNode
      this.setState({isWallNode, mouseIsPressed: false})
      this.getInitialGrid()
    }
  }

  /******************** Clear Board/Walls ********************/

  clearGrid() {
    if (!this.state.isRunning) {
      this.setState({info: ''})
      const newGrid = this.state.grid.slice()
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className
          if (
            nodeClassName !== 'node node-start' &&
            nodeClassName !== 'node node-finish' &&
            nodeClassName !== 'node node-wall'
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node'
            node.isVisited = false
            node.distance = Infinity
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col)
          }
          if (nodeClassName === 'node node-finish') {
            node.isVisited = false
            node.distance = Infinity
            node.distanceToFinishNode = 0
          }
          if (nodeClassName === 'node node-start') {
            node.isVisited = false
            node.distance = Infinity
            node.distanceToFinishNode =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col)
            node.isStart = true
            node.isWall = false
            node.previousNode = null
            node.isNode = true
          }
        }
      }
    }
  }

  clearWalls() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice()
      for (const row of newGrid) {
        for (const node of row) {
          let nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className
          if (nodeClassName === 'node node-wall') {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node'
            node.isWall = false
          }
        }
      }
    }
  }

  /******************** Create Animations ********************/
  visualize(algo) {
    if (!this.state.isRunning) {
      
      this.clearGrid()
      this.toggleIsRunning()
      const {grid} = this.state
      const startNode =
        grid[this.state.START_NODE_ROW][this.state.START_NODE_COL]
      const finishNode =
        grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL]
      let visitedNodesInOrder
      switch (algo) {
        case 'Dijkstra':
          this.setState({info: <DijkstraInfo></DijkstraInfo>})
          visitedNodesInOrder = dijkstra(grid, startNode, finishNode)
          break
        case 'AStar':
          this.setState({info: <AstarInfo></AstarInfo>})
          visitedNodesInOrder = AStar(grid, startNode, finishNode)
          break
        case 'BFS':
          this.setState({info: <BreathFirstSearchInfo></BreathFirstSearchInfo>})
          visitedNodesInOrder = bfs(grid, startNode, finishNode)
          break
        case 'DFS':
          this.setState({info: <DepthFirstSearchInfo></DepthFirstSearchInfo>})
          visitedNodesInOrder = dfs(grid, startNode, finishNode)
          break
        default:
          // should never get here
          break
      }
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode)
      nodesInShortestPathOrder.push('end')
      this.animate(visitedNodesInOrder, nodesInShortestPathOrder)
    }
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder)
        }, 10 * i)
        return
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i]
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`,
        ).className
        if (
          nodeClassName !== 'node node-start' &&
          nodeClassName !== 'node node-finish'
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited'
        }
      }, 10 * i)
    }
  }

  /******************** Create path from start to finish ********************/
  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      if (nodesInShortestPathOrder[i] === 'end') {
        setTimeout(() => {
          this.toggleIsRunning()
        }, i * 50)
      } else {
        setTimeout(() => {
          const node = nodesInShortestPathOrder[i]
          const nodeClassName = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className
          if (
            nodeClassName !== 'node node-start' &&
            nodeClassName !== 'node node-finish'
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-shortest-path'
          }
        }, i * 40)
      }
    }
  }

  render() {
    const {grid, mouseIsPressed} = this.state
    return (

      <div className="main-container">
        <div className="left-side">
         
          <div className="info-box">{this.state.info}</div>
        </div>
        <div className="button-container-graph">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.clearGrid()}>
            Clear Grid
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.clearWalls()}>
            Clear Walls
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('Dijkstra')}>
            Dijkstra's
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('AStar')}>
            A*
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('BFS')}>
            Breath First Search
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('DFS')}>
            Depth First Search
          </button>
        

        <table
          className="grid-container"
          onMouseLeave={() => this.handleMouseLeave()}>
          <tbody className="grid">
            {grid.map((row, rowIdx) => {
              return (
                <tr key={rowIdx}>
                  {row.map((node, nodeIdx) => {
                    const {row, col, isFinish, isStart, isWall} = node
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        mouseIsPressed={mouseIsPressed}
                        onMouseDown={(row, col) =>
                          this.handleMouseDown(row, col)
                        }
                        onMouseEnter={(row, col) =>
                          this.handleMouseEnter(row, col)
                        }
                        onMouseUp={() => this.handleMouseUp(row, col)}
                        row={row}></Node>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
          <div className="instructions-container">
            <h4>Instructions</h4>
            <ul className="instructions-list">
              <li>You  can move the start an end nodes by clicking and dragging the nodes within
                the grid.
              </li>
              <li>You can create walls by clicking empty squares on the grid.  They will turn 
                black.</li>
            </ul>
          </div> 
        </div>     
      </div>
    )
  }
}

/******************** Create Walls ********************/
const getNewGridWithWallToggled = (grid, row, col) => {
  // mouseDown starts to act strange if I don't make newGrid and work off of grid instead.
  const newGrid = grid.slice()
  const node = newGrid[row][col]
  if (!node.isStart && !node.isFinish && node.isNode) {
    const newNode = {
      ...node,
      isWall: !node.isWall,
    }
    newGrid[row][col] = newNode
  }
  return newGrid
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called after the path-finding methods.
function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = []
  let currentNode = finishNode
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode)
    currentNode = currentNode.previousNode
  }
  return nodesInShortestPathOrder
}