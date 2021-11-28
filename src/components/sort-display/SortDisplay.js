import React, { useState, useEffect, useRef } from 'react'
import { getMergeSortAnimations } from '../../algorithms/sorts/MergeSort'
import { quickSortAnimations } from '../../algorithms/sorts/QuickSort'
import { createArray, getArrayLength, getMinValue } from './create-array-functions/CreateArray'
import './SortDisplay.css'

const DELAY = 200
const PRIMARY_COLOR = 'green'
const SECONDARY_COLOR = 'red'

const quickSortInfo = ' some information about quicksort'
const mergeSortInfo = ' some information about mergesort'

export default function SortDisplay() {
  const [intArr, setIntArr] = useState([])
  const [info, setInfo] = useState('')
  const containerRef = useRef(null)
 
  // on load creates new array
  useEffect(() => setIntArr(createArray(containerRef, intArr)), [])


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
  // on click functions
  function onClickSetIntArr() {
    setInfo('')
    setIntArr(createArray(containerRef, intArr))
  }

  

  // SORTING FUNCTIONS
  // mergeSort
  function mergeSort() {
    setInfo(mergeSortInfo)
    const animations = getMergeSortAnimations(intArr)
    animateArrayUpdate(animations)
  }
  // quickSort
  function quickSort() {
    setInfo(quickSortInfo)
    const animations = quickSortAnimations(intArr)
    animateArrayUpdate(animations)
  }


  return (
    <div className="display-container">
      <div className="button-container">
        <button 
          className="button" 
          id="create-array"
          onClick={() => onClickSetIntArr()}>
            Create/Reset Array
        </button>
        <button
          className="button"
          id="merge-sort"
          onClick={mergeSort}>
            MergeSort
        </button>
        <button
          className="button"
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
            width: `${100 / getArrayLength()}vw`,
            color: 'white',
          }}
          key={index}
          >{barHeight - getMinValue() + 1}</div>
        ))} 
      </div>
      <div className="info">{info}</div>
    </div>
  )
}
