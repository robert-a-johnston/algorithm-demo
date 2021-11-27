export function quickSortAnimations(items) {
    const copy = [...items]
    const animations = []
    quickSort(copy, 0, copy.length - 1, animations)
    return animations
}



function quickSort(items, start, end, animations) {
    if(start >= end) {
        return
    }
    let index = partition(items, start, end, animations)
  
    quickSort(items, start, index, animations)
    quickSort(items, index + 1, end, animations)
  }


function partition(items, start, end, animations) {
 let pivotIndexI = start
 let pivotIndexJ = end + 1

 const pivotValue = items[start] // sets pivot value to first value

 while(true) {
     while(items[++pivotIndexI] <= pivotValue) {
        if(pivotIndexI === end) break
        animations.push([[pivotIndexI], false])
     }
     while (items[--pivotIndexJ] >= pivotValue) {
         if(pivotIndexJ === start) break
         animations.push([[j], false])
     }
     if(pivotIndexJ <= pivotIndexI) break
     animations.push([[pivotIndexI, items[pivotIndexJ]], true])
     animations.push([[pivotIndexJ, items[pivotIndexI]], true])
     swap(items, pivotIndexI, pivotIndexJ)
     return pivotIndexJ
 }
}
function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
  }



