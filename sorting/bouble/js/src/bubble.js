export const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export const bubbleSortOptimized = (arr) => {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while(leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while(rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}

export const mergeSort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
