
import React from 'react'
import './AstarInfo.css'


export default function AstarInfo() {
  return (
    <div>
      <h2><a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank" rel="noreferrer">
        A * Algorithm</a></h2>
      
      <div className="container">
        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <p>* Depends on Implementation.  E = # of edges, V = # of vertices</p>
          <ul>
            <li>Worst Time: O(E)</li>
            <li>Worst Space: O(V)</li>
          </ul>

          <h4>Steps for A * Algorithm</h4>
          <p>* Given a grid with many obstacles and a starting point and ending point </p>
          <p>* g = the movement cost to move from the starting point to a given square on the grid,
            following the path generated to get there.
          </p>
          <p>* h = the estimated movement cost to move from a given square on the grid to the final
            destination.  (Sometimes referred to as the heuristic or smart guess.)
          </p>
          <p>* f = the sum of g and h</p>
          <ol type="1">
            <li>Create two lists named open and closed.</li>
            <li>Put the starting node on the open list(can leave its f
              at 0)
            </li>
            <li>While the open list is not empty</li>
              <ol className="while" type="a"> 
                <li>Find the node with the least f on the open list, q.</li>
                <li>Generate q's 8 successors and set their parents to q.</li>

                <li>For each successor:</li>
                  <ol className="for-each" type="i">
                    <li>If the successor is the goal, stop the search
                      successor.g = q.g + distance between successor and q<br></br>
                      successor.h = distance from goal to successors<br></br>
                      successor.f = successor.g + successor.<br></br>
                    </li>
                    <li>If a node with the same position as successor is in the OPEN list
                      which has a lower f than successor, skip this successor
                    </li>
                    <li>If a node with the same position as successor is in the CLOSED list
                      which has a lower f than successor, skip this successor.  Otherwise, add
                      the node to the open list.  
                    </li>
                    <li>End for loop.</li>
                  </ol>
                <li>Push q on the closed list</li>
                <li>End while loop.</li>
              </ol>
          </ol>

        </div>
      </div>
    </div>
  )
}
