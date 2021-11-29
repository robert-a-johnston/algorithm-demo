import { shuffleArray } from "./ShuffleArray"
import { resetArrayColour } from "./ResetArrayColor"
const MAX_VALUE = 55
const MIN_VALUE = 5
const ARRAY_LENGTH = MAX_VALUE - MIN_VALUE

// Create new array of integers
export function createArray(containerRef, intArr) {
  // resets to original color when new array created
  resetArrayColour(containerRef, intArr)
  // variables for use to create array of
  // numbers from minValue to end of arrayLength
  const tempArr = []
  let arrayValue = MIN_VALUE
  // create array of values from min to max
  for(let i = 0; i < ARRAY_LENGTH; i++) {
    // add array value to temp array
    tempArr.push(arrayValue)
    // add 1 to arrayValue
    arrayValue++
  }
  // shuffle values in array
  shuffleArray(tempArr)
  return tempArr
}

export function getArrayLength() {
  return MAX_VALUE - MIN_VALUE
}

export function getMinValue(){
  return MIN_VALUE
}
