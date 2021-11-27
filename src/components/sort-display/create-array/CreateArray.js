import { shuffleArray } from "./ShuffleArray"
import { resetArrayColour } from "./ResetArrayColor"

// Create new array of integers
export function createArray(minValue, arrayLength, containerRef, intArr) {
  // resets to original color when new array created
  resetArrayColour(containerRef, intArr)
  // variables for use to create array of
  // numbers from minValue to end of arrayLength
  const tempArr = []
  let arrayValue = minValue
  // create array of values from min to max
  for(let i = 0; i < arrayLength; i++) {
    // add array value to temp array
    tempArr.push(arrayValue)
    // add 1 to arrayValue
    arrayValue++
  }
  // shuffle values in array
  shuffleArray(tempArr)
  return tempArr
}
