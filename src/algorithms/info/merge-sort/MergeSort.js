import React from 'react'
import './MergeSort.css'
import mergeSortAlgo from '../../algo-images/mergeSortAlgo.JPG'

export default function MergeSortInfo() {
  return (
    <div>
      <h2>MergeSort Algorithm</h2>

      <div className="container">
        
          
        <div className="algo-info">

          <h3>Time/Space Complexity</h3>
          <ul>
            <li>Average Time: O(n log(n))</li>  
            <li>Worst Time: O(n log(n))</li>
            <li>Space: O(n)</li>
          </ul>
      
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
      <div className="algo-pic">
        <img className="merge-sort-img" src={mergeSortAlgo} alt="Merge Sort Algorithm"></img>     
      </div>
    </div>
  )
}
