// Clears colors when array is reset
export function resetArrayColour(containerRef, intArr) {
    const arrayBars = containerRef.current.children
    // changes bar style back to original color by removing
    // colors after sorting
    for (let i = 0; i < intArr.length; i++) {
      const arrayBarStyle = arrayBars[i].style
      arrayBarStyle.backgroundColor = ''
    }
  }