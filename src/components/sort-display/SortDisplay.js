import React, { useState, useEffect, useRef } from 'react'
import { getMergeSortAnimations } from '../../algorithms/sorts/MergeSort'
import { quickSortAnimations } from '../../algorithms/sorts/QuickSort'
import { createArray, getArrayLength, getMinValue } from './create-array-functions/CreateArray'
// import { quickSortInfo } from '../../algorithms/info/SortInfo'
import SortInfo from '../../algorithms/info/SortInfo'
import './SortDisplay.css'

const DELAY = 20
const PRIMARY_COLOR = 'green'
const SECONDARY_COLOR = 'red'
const mergeSortInfo = ' some information about mergesort'


export default function SortDisplay() {
  const [intArr, setIntArr] = useState([])
  const [info, setInfo] = useState('')
  const containerRef = useRef(null)
  const [disabled, setDisabled] = useState(false)
  const [sorting, setSorting] = useState(false)
  const [sorted, setSorted] = useState(false)
 
  // on load creates new array
  useEffect(() => setIntArr(createArray(containerRef, intArr)), [])


  // ANIMATION FUNCTIONS
  function animateArrayUpdate(animations) { 
    if(sorting) return
    setSorting(true)
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
     
     setSorted(true)
     setSorting(false)
    }, arrayBars.length * DELAY)
  }

  // on click functions
  function onClickSetIntArr() {
    setInfo('')
    setSorted(true)
    console.log(sorted)
    setIntArr(createArray(containerRef, intArr, sorting, sorted))
    setDisabled(false)
  }

  

  // SORTING FUNCTIONS
  // mergeSort
  function mergeSort() {
    if(sorting) return
    if(sorted) onClickSetIntArr()
    setInfo(mergeSortInfo)
    const animations = getMergeSortAnimations(intArr)
    animateArrayUpdate(animations)
  }
  // quickSort
  function quickSort() {
    setDisabled(true)
    console.log(disabled)
    if(sorting) return
    setInfo(SortInfo)
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
      <code className="info">{info}</code>
    </div>
  )
}
