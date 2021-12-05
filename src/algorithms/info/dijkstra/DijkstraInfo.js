
import React from 'react'
import './DijkstraInfo.css'
//import bubbleSortAlgo from '../../algo-images/bubbleSortAlgo.JPG'

export default function DijkstraInfo() {
  return (
    <div>
      <h2>Dijkstra's Algorithm</h2>
      
      <div className="container">
        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <p>* Depends on Implementation(V = vertices E = edges)</p>
          <ul>
            <li>Average Time: O(|E| log|V|))</li>  
            <li>Worst Time: O(|V|^2)</li>
            <li>Worst Space: O(|V| + |E|)</li>
          </ul>
          <h3>Requirements</h3>
          <ul>
            <li>Can only have positive weights.</li>
          </ul>
          <h4>Steps for Dijkstra's Algorithm</h4>
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
