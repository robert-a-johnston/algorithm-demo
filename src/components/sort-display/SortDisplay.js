import React, { useState, useEffect, useRef } from 'react'
// import { getMergeSortAnimations } from '../../algorithms/MergeSort'
// import { quickSortAnimations } from '../../algorithms/QuickSort'
import './SortDisplay.css'

const MAX_VALUE = 50
const MIN_VALUE = 5
const ARRAY_LENGTH = MAX_VALUE - MIN_VALUE



export default function SortDisplay() {
  const [intArr, setIntArr] = useState([])
  const containerRef = useRef(null)
  const [sorting, setSorting] = useState(false)
  const [sorted, setSorted] = useState(false)
  
  useEffect(createArray, [])

  // Create new array of integers
  function createArray() {
    const tempArr = []
    let arrayValue = MIN_VALUE
    // create array of values from min to max
    for(let i = 0; i < ARRAY_LENGTH; i++) {
      
      tempArr.push(arrayValue)
      arrayValue++
    }
    // shuffle values in array
    shuffleArray(tempArr)
    // set state of intArray to tempArray
    setIntArr(tempArr)
    console.log('int', intArr)
  }

  // Fisher-Yates algorithm to randomize array items
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  return (
    <div className="display-container">
      <div className="buttons">
        <button 
          className="button" 
          id="create-array"
          onClick={createArray}>
            Create/Reset Array
        </button>
      </div>
      <div className="array-bar-container" ref={containerRef}>
        {intArr.map((barHeight, index) => (
          <div
          className="array-bar"
          style={{
            height: `${barHeight}vmin`,
            width: `${100 / ARRAY_LENGTH}vw`,
          }}
          key={index}
          >{barHeight}</div>
        ))}
        
      </div>

    </div>
  )
}
