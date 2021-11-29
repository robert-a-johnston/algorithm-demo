export function quickSortAnimations(arr) {
    // copy the array
    const copyArray = [...arr]
    // create array for animations
    const animations = []
    // run quicksort
    quickSort(copyArray, 0, copyArray.length - 1, animations)
    // return animation array for 'main' 
    return animations
  }
  
  function quickSort(arr, start, end, animations) {
    // check that end is > start
    if (end <= start) return
    // get partition value for recursive calls
    const part = partition(arr, start, end, animations)
    // recursive calls to go through all of array
    quickSort(arr, start, part, animations)
    quickSort(arr, part + 1, end, animations)
  }
  
  function partition(arr, start, end, animations) {
    // start pointer
    let i = start
    // end pointer
    let j = end + 1
    // set pivot to first element in arr
    const pivot = arr[start]
    
    // run until break
    while (true) {
      // move right one from start and checks value against pivot
      while (arr[++i] <= pivot) {
        // quit if i gets to end of array
        if (i === end) break
        // add array of [i, false] to animations array
        animations.push([[i], false])
      }
      // moves left one from end and checks pivot
      while (arr[--j] >= pivot) {
        // quit if j gets to start of array
        if (j === start) break
        // add array of [j, false] to animations array
        animations.push([[j], false])
      }
      // quit if end index is < = to start index
      if (j <= i) break
      // add array [[i, arrayValue at j], true]
      animations.push([[i, arr[j]], true])
      // add array [[j, arrayValue at i], true]
      animations.push([[j, arr[i]], true])
      // switch i with j in arr
      swap(arr, i, j)
    }

    // add array to animation [[start index, arrayValue at j],
    // true]
    animations.push([[start, arr[j]], true])
    // add array to animation [[j index, arrayValue at start index],
    // true]
    animations.push([[j, arr[start]], true])
    // swap start element with jth element
    swap(arr, start, j)
    // return index at j
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