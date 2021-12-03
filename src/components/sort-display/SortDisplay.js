import React, { useState, useEffect, useRef } from 'react'
import { getMergeSortAnimations } from '../../algorithms/sorts/MergeSort'
import { quickSortAnimations } from '../../algorithms/sorts/QuickSort'
import { bubbleSortAnimations } from '../../algorithms/sorts/BubbleSort'
import { createArray, getArrayLength, getMinValue } from './create-array-functions/CreateArray'
import QuickSortInfo from '../../algorithms/info/quick-sort/QuickSortInfo'
import MergeSortInfo from '../../algorithms/info/merge-sort/MergeSort'
import BubbleSortInfo from '../../algorithms/info/bubble-sort/BubbleSortInfo'
import './SortDisplay.css'

const DELAY = 15
const PRIMARY_COLOR = 'green'
const SECONDARY_COLOR = 'red'



export default function SortDisplay() {
  const [intArr, setIntArr] = useState([])
  const [info, setInfo] = useState('')
  const containerRef = useRef(null)
  const [disabled, setDisabled] = useState(false)
  const [disableCreate, setDisableCreate] = useState(false)
  
 
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
  // sets color to green when sorted
  function animateSortedArray() {
    
    const arrayBars = containerRef.current.children
    console.log(arrayBars)
    for (let i = 0; i < arrayBars.length -1; i++) {
      const arrayBarStyle = arrayBars[i].style
      setTimeout(
        () => (arrayBarStyle.backgroundColor = PRIMARY_COLOR),
        i * DELAY,
      )
    }
    setTimeout(() => {
     setDisableCreate(false)
    }, arrayBars.length * DELAY)
  }

  // ON CLICK FUNCTIONS
  function onClickSetIntArr() {
    setInfo('')
    setDisabled(false)
    setIntArr(createArray(containerRef, intArr))
    setDisableCreate(false)
  }

  

  // SORTING FUNCTIONS
  // mergeSort
  function mergeSort() {
    setDisabled(true)
    setDisableCreate(true)
    setInfo(MergeSortInfo)
    const animations = getMergeSortAnimations(intArr)
    animateArrayUpdate(animations)
  }
  // quickSort
  function quickSort() {
    setDisabled(true)
    setDisableCreate(true)
    setInfo(QuickSortInfo)
    const animations = quickSortAnimations(intArr)
    animateArrayUpdate(animations)
    
  }
  function bubbleSort() {
    setDisabled(true)
    setDisableCreate(true)
    setInfo(BubbleSortInfo)
    const animations = bubbleSortAnimations(intArr)
    animateArrayUpdate(animations)
    
  }


  return (
    <div className="display-container">
      <div className="button-container">
        <button 
          className="button" 
          id="create-array"
          onClick={() => onClickSetIntArr()}
          disabled={disableCreate}>
            Create/Reset Array
        </button>
        <button
          className="button"
          id="merge-sort"
          onClick={mergeSort}
          disabled={disabled}>
            MergeSort
        </button>
        <button
          className="button"
          id="quick-sort"
          onClick={quickSort}
          disabled={disabled}>
            QuickSort
          </button>  
          <button
          className="button"
          id="bubble-sort"
          onClick={bubbleSort}
          disabled={disabled}>
            BubbleSort
          </button>  
      </div>
      
      <div className="array-bar-container" ref={containerRef}>
        {intArr.map((barHeight, index) => (
          <div
          className="array-bar"
          style={{
            height: `${barHeight}Vmin`,
            width: `${100 / getArrayLength()}vw`,
            color: 'white',
          }}
          key={index}
          >{barHeight - getMinValue() + 1}</div>
        ))}
        <div 
        className="array-bar-topper"
        style={{height: `55vmin`,
        width:`${100 / getArrayLength()}vw`}}></div>
      </div>
      <code className="info">{info}</code>
    </div>
  )
}
