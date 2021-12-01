
import React from 'react'
import './BubbleSortInfo.css'
import bubbleSortAlgo from '../../algo-images/bubbleSortAlgo.JPG'

export default function BubbleSortInfo() {
  return (
    <div>
      <h2>BubbleSort Algorithm</h2>
      
      <div className="container">

          <div className="algo-pic">
            <img className="bubble-sort-img" src={bubbleSortAlgo} alt="Bubble Sort Algorithm"></img>     
          </div>

        <div className="algo-info">
          <h3>Time/Space Complexity</h3>
          <ul>
            <li>Average Time: O(n^2)</li>  
            <li>Worst Time: O(n^2)</li>
            <li>Space: O(1)</li>
          </ul>

          <h4>Steps for BubbleSort</h4>
          <ol>
            <li>Start at first item in unsorted array.</li>
            <li>Check if the next item is less than first item.</li>
            <li>If the next item is less than the first swap items.</li>
            <li>Continue checking if next value is greater or less than and switching when
              value is less than.
            </li>
            <li>Continue iterating through all of the items in the array until sorted.</li>
          </ol>

        </div>
      </div>
    </div>
  )
}
