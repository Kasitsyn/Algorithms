function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let smallest = arr[j]
        arr[j] = arr[i]
        arr[i] = smallest
      }
    }
  }
  return arr
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]))