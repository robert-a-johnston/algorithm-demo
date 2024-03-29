
import React from 'react'
import './QuickSortInfo.css'
import quickSortAlgo from '../../algo-images/quickSortAlgo.JPG'

export default function QuickSortInfo() {
  return (
    <div>
      <h2>QuickSort Algorithm</h2>
      
      <div className="container">

        <div className="algo-info">
          <h3><u>Time/Space Complexity</u></h3>
          <ul>
            <li>Average Time: O(n log(n))</li>  
            <li>Worst Time: O(n^2)</li>
            <li>Space: O(log(n))</li>
          </ul>

          <h4><u>Steps for QuickSort</u></h4>
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
      <div className="algo-pic">
            <img className="quicksort-img" src={quickSortAlgo} alt="Quick Sort Algorithm"></img>     
      </div>
    </div>
  )
}
