export function bubbleSortAnimations(arr) {
  // copy the array
  const copyArray = [...arr]
  const animations = []

  bubbleSort(copyArray, animations)

  return animations
}

function bubbleSort(arr, animations) {
  let i, j
  let len = arr.length
  let isSwapped = false

  for (i = 0; i < len; i++){
    isSwapped = false
    for (j = 0; j < len; j ++){
      
      if(arr[j] > arr[j + 1]) {
        animations.push([[j, arr[j + 1]], true])
        animations.push([[j + 1, arr[j]], true])
        swap(arr, j, j + 1)
        isSwapped = true
        
      } 
        animations.push([[j], false])
    }
    if(!isSwapped){
      break
    }
  }
  return j
}
function swap(arr, index1, index2) {
  // create temp value and set to index1 value
  const temp = arr[index1]
  // change index1 value to index2 value
  arr[index1] = arr[index2]
  // set index2 value to temp value that was index1 old value
  arr[index2] = temp
}
