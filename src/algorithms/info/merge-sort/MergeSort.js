import React from 'react'
import './MergeSort.css'
import mergeSortAlgo from '../../algo-images/mergeSortAlgo.JPG'

export default function MergeSortInfo() {
  return (
    <div>
      <h3>MergeSort Algorithm</h3>
      <div className="container">
          <div className="algo-pic">
            <img className="merge-sort-img" src={mergeSortAlgo} alt="Merge Sort Algorithm"></img>     
          </div>
        <div className="algo-info">
          <h4>Time/Space Complexity</h4>
          <p>Average Time: O(n log(n)) Worst Time: O(n log(n)) Space: O(n)</p><br></br>
          <h4>Steps for MergeSort</h4>
          <ol>
            <li>Split given array in half.</li>
            <li>Recursively divide sub-arrays in half until you are left with an array 
              with a single value.
            </li>
            <li>Merge single value sub-arrays so that they are sorted.</li>
            <li>Repeat merging sub-arrays and sorting until all values are in sorted array.</li>
          </ol>

        </div>
      </div>
    </div>
  )
}
