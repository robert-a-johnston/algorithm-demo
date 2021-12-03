
import React from 'react'
import './AstarInfo.css'


export default function AstarInfo() {
  return (
    <div>
      <h2>A * Algorithm</h2>
      
      <div className="container">
        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <p>* Depends on Implementation</p>

          <h4>Steps for A * Algorithm</h4>
          <ol>
            <li>Set all vertices distances = infinity except for the 
              source vertex, set the source distance = 0.</li>
            <li>Push the source vertex in a min-priority queue in the 
              form (distance , vertex), as the comparison in the min-priority 
              queue will be according to vertices distances.</li>
            <li>Pop the vertex with the minimum distance from the priority 
              queue (at first the popped vertex = source).</li>
            <li>Update the distances of the connected vertices to the popped 
              vertex in case of "current vertex distance + edge weight less 
              than next vertex distance", then push the vertex
              with the new distance to the priority queue.
            </li>
            <li>If the popped vertex is visited before, just continue without using it.</li>
            <li>Apply the same algorithm again until the priority queue is empty.</li>
          </ol>

        </div>
      </div>
    </div>
  )
}
