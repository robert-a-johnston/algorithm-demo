export function quickSortAnimations(arr) {
    const copyArray = [...arr]
    const animations = []
    quickSortHelper(copyArray, 0, copyArray.length - 1, animations)
    return animations
  }
  
  function quickSortHelper(arr, left, right, animations) {
    if (right <= left) return
    const part = partition(arr, left, right, animations)
    
    quickSortHelper(arr, left, part, animations)
    quickSortHelper(arr, part + 1, right, animations)
  }
  
  function partition(arr, left, right, animations) {
    let i = left
    let j = right + 1
    const pivot = arr[left]
    console.log('pivot', i, pivot)
    while (true) {
      while (arr[++i] <= pivot) {
        if (i === right) break
        animations.push([[i], false])
      }
      while (arr[--j] >= pivot) {
        if (j === left) break
        animations.push([[j], false])
      }
      if (j <= i) break
      animations.push([[i, arr[j]], true])
      animations.push([[j, arr[i]], true])
      swap(arr, i, j)
    }
    animations.push([[left, arr[j]], true])
    animations.push([[j, arr[left]], true])
    swap(arr, left, j)
    return j
  }

  function swap(arr, index1, index2) {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }