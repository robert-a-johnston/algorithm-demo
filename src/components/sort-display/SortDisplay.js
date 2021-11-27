import React, { useState, useEffect, useRef } from 'react'
// import { getMergeSortAnimations } from '../../algorithms/MergeSort'
import { quickSortAnimations } from '../../algorithms/sorts/QuickSort'
import { createArray } from './create-array/CreateArray'
import './SortDisplay.css'

const MAX_VALUE = 50
const MIN_VALUE = 5
const ARRAY_LENGTH = MAX_VALUE - MIN_VALUE
const DELAY = 5
const PRIMARY_COLOR = 'green'
const SECONDARY_COLOR = 'red'



export default function SortDisplay() {
  const [intArr, setIntArr] = useState([])
  const containerRef = useRef(null)
 
  // on load creates new array
  useEffect(() => setIntArr(createArray(MIN_VALUE, ARRAY_LENGTH, containerRef, intArr)), [])


  // ANIMATION FUNCTIONS
  function animateArrayUpdate(animations) {
    
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison
            animateArrayAccess(i)
            animateArrayAccess(j)
          } else {
            const [i] = comparison
            animateArrayAccess(i)
          }
        } else {
          setIntArr((prevArr) => {
            const [k, newValue] = comparison
            const newArr = [...prevArr]
            newArr[k] = newValue
            return newArr
          })
        }
      }, index * DELAY)
    })
    setTimeout(() => {
      animateSortedArray()
    }, animations.length * DELAY)
  }

  function animateArrayAccess(index) {
    const arrayBars = containerRef.current.children
    const arrayBarStyle = arrayBars[index].style
    setTimeout(() => {
      arrayBarStyle.backgroundColor = SECONDARY_COLOR
    }, DELAY)
    setTimeout(() => {
      arrayBarStyle.backgroundColor = ''
    }, DELAY * 2)
  }

  function animateSortedArray() {
    const arrayBars = containerRef.current.children
    for (let i = 0; i < arrayBars.length; i++) {
      const arrayBarStyle = arrayBars[i].style
      setTimeout(
        () => (arrayBarStyle.backgroundColor = PRIMARY_COLOR),
        i * DELAY,
      )
    }
    setTimeout(() => {
     
    }, arrayBars.length * DELAY)
  }


  // SORTING FUNCTIONS
  // quickSort
  function quickSort() {
    const animations = quickSortAnimations(intArr)
    animateArrayUpdate(animations)
  }

  return (
    <div className="display-container">
      <div className="buttons">
        <button 
          className="button" 
          id="create-array"
          onClick={() => setIntArr(createArray(MIN_VALUE, ARRAY_LENGTH, containerRef, intArr))}>
            Create/Reset Array
        </button>
        <button
          className="buttons"
          id="quick-sort"
          onClick={quickSort}>
            QuickSort
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
          >{barHeight - MIN_VALUE + 1}</div>
        ))} 
      </div>
      <div>some more info</div>
    </div>
  )
}
