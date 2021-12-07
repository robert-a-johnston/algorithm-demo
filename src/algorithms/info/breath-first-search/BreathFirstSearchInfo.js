
import React from 'react'
import './BreathFirstSearhInfo.css'


export default function DijkstraInfo() {
  return (
    <div>
      <h2>Breath First Search Algorithm</h2>
      
      <div className="container">
        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <p>* V = vertices</p>
          <ul>
            <li>Worst Time: O(V)</li>
            <li>Worst Space: O(V)</li>
          </ul>

          <h4>Steps for Breath First Search</h4>
          <ol>
            <li>Given a graph and start node</li>
            <li>Create QUEUE for vertices visited</li>
            <li>Put first node(start node) in visited queue.</li>
            <li>While queue is not empty.</li>
              <ol type="a">
                <li>Select unvisited adjacent node from first item</li>
                <li>Mark next node as visited by adding it to the queue.</li>
                <li>Repeat above steps until no unvisited adjacent nodes
                  to start node.
                </li>
                <li>Remove first node visited from first node from queue.</li>
                <li>Repeat above steps with adjacent node becoming start node</li>
              </ol>
            <li>End while loop.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
