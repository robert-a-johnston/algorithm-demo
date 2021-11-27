export function quickSortAnimations(items) {
    console.log('in qsa')
    const copy = [...items]
    const animations = []
    quickSort(copy, 0, copy.length - 1, animations)
    return animations
}



function quickSort(items, start, end, animations) {
    console.log('in qs')
    if(start >= end) {
        return
    }
    let index = partition(items, start, end, animations)
    console.log('index', index)
    // quickSort(items, start, index, animations)
    // quickSort(items, index + 1, end, animations)
  }


function partition(items, start, end, animations) {
    console.log('in par')
 let pivotIndexI = start
 let pivotIndexJ = end + 1

 const pivotValue = items[start] // sets pivot value to first value
 console.log('par', pivotValue, pivotIndexI, pivotIndexJ)
 while(true) {
     while(items[++pivotIndexI] <= pivotValue) {
        if(pivotIndexI === end) break
        animations.push([[pivotIndexI], false])
     }
     while (items[--pivotIndexJ] >= pivotValue) {
         if(pivotIndexJ === start) break
         animations.push([[pivotIndexJ], false])
     }
     if(pivotIndexJ <= pivotIndexI) break
     animations.push([[pivotIndexI, items[pivotIndexJ]], true])
     animations.push([[pivotIndexJ, items[pivotIndexI]], true])
     swap(items, pivotIndexI, pivotIndexJ)
     return pivotIndexJ
 }
}


function swap(items, leftIndex, rightIndex){
    console.log('in swap')
    let temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
  }



