export function getMergeSortAnimations(arr) {
  const copyArray = [...arr]
  const len = copyArray.length
  const tempArray = Array(len)
  const animations = []
  mergeSortHelper(copyArray, tempArray, 0, len - 1, animations)
  return animations
}

function mergeSortHelper(arr, tempArray, left, right, animations) {
  if (right <= left) return
  const mid = left + Math.floor((right - left) / 2)
  mergeSortHelper(arr, tempArray, left, mid, animations)
  mergeSortHelper(arr, tempArray, mid + 1, right, animations)
  merge(arr, tempArray, left, mid, right, animations)
}

function merge(arr, tempArray, left, mid, right, animations) {
  for (let i = left; i <= right; i++) tempArray[i] = arr[i]
  let i = left
  let j = mid + 1
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      animations.push([[j], false])
      animations.push([[k, tempArray[j]], true])
      arr[k] = tempArray[j++]
    } else if (j > right) {
      animations.push([[i], false])
      animations.push([[k, tempArray[i]], true])
      arr[k] = tempArray[i++]
    } else if (tempArray[j] < tempArray[i]) {
      animations.push([[i, j], false])
      animations.push([[k, tempArray[j]], true])
      arr[k] = tempArray[j++]
    } else {
      animations.push([[i, j], false])
      animations.push([[k, tempArray[i]], true])
      arr[k] = tempArray[i++]
    }
  }
}