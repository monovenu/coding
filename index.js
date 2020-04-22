//排序数组 - 给定一个整数数组 nums，将该数组升序排列。

let array = [5, 1, 3, 2, 0, 6];

function sortArrayBubble(array) {
  let n = array.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// console.log(sortArrayBubble(array));

function chooseSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let min = Number.MAX_VALUE;
    let minIndex = -1;
    for (let j = i; j < n; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [array[minIndex],array[i]]=[array[i],array[minIndex]]
    }
  }
}

function insertSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let temp = array[i]; //给temp找插入位置
    for (; j >= 0; j--) {
      if (array[j] <= temp) {
        break;
      }
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
}
chooseSort(array);
console.log(array);
