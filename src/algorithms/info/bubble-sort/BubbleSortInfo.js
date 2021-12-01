
import React from 'react'
import './BubbleSortInfo.css'
// import quickSortAlgo from '../../algo-images/quickSortAlgo.JPG'

export default function BubbleSortInfo() {
  return (
    <div>
      <h2>BubbleSort Algorithm</h2>
      
      <div className="container">

          <div className="algo-pic">
            {/* <img className="quicksort-img" src={quickSortAlgo} alt="Quick Sort Algorithm"></img>      */}
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
            <li>Select pivot.  Can select any element(first/last/middle)</li>
            <li>Start left pointer at first element and right pointer at last element.</li>
            <li>Compare left pointer element with pivot element.</li>
            <li>While left pointer element is less than pivot shift left pointer right one element.</li>
            <li>While right pointer element is greater than pivot shift right pointer left one element.</li>
            <li>Check if left pointer element is greater than right pointer element.</li>
            <li>If left element is less than right pointer element swap left and right pointer values.</li>
            <li>Add one to left pointer and subtract one from right pointer</li>
            <li>If the index of the left pointer is less than the index of the right 
              pointer repeat the process. If not return the index of the left pointer.</li>
          </ol>

        </div>
      </div>
    </div>
  )
}
