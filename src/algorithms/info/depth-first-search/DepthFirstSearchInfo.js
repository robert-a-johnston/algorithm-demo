
import React from 'react'
import './DepthFirstSearchInfo.css'


export default function DepthFirstSearchInfo() {
  return (
    <div>
      <h2>
        <a href="https://en.wikipedia.org/wiki/Depth-first_search#:~:text=Depth%2Dfirst%20search%20(DFS),along%20each%20branch%20before%20backtracking."
        target="_blank" rel="noreferrer">
          Depth First Search Algorithm</a></h2>
      
      <div className="container">
        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <p>* V = vertices</p>
          <ul>
            <li>Worst Time: O(V)</li>
            <li>Worst Space: O(V)</li>
          </ul>

          <h4>Steps for Depth First Search</h4>
          <ol>
            <li>Given a graph and start node and end node.</li>
            <li>Create STACK for vertices visited</li>
            <li>Put first node(start node) in visited stack.</li>
            <li>While stack is not empty.</li>
              <ol type="a">
                <li>Select unvisited adjacent node from first item</li>
                <li>Mark node as visited by adding it to the stack.</li>
                <li>Repeat above steps until you reach a node has no 
                  unvisited child nodes.
                </li>
                <li>Pop node  with no unvisited child nodes from stack</li>
                <li>Repeat above with each node in stack, until all nodes are
                  visited.
                </li>
                <li> When find end node return stack.  This is the path for 
                  nodes traveled to get to end node.
                </li>
              </ol>
            <li>End while loop.</li>
            <li>If you never find the end node return no way to get to node.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
