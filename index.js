//排序数组 - 给定一个整数数组 nums，将该数组升序排列。

let array = [5, 1, 3, 2, 0, 6, 2];

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
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
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




function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, l, r) {
  if (l >= r) return;
  let midIndex = l + Math.floor(Math.random() * (r - l + 1));
  let mid = array[midIndex];
  swap(array,midIndex, r);
  let i=l;
  let j=r-1;
  while(i<=j){
    if(array[i]<mid){
      i++
    }else{
      swap(array,i,j);
      j--;
    }
  }
  swap(array,i,r);
  quickSortHelper(array,l,i-1);
  quickSortHelper(array,i+1,r);
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function mergeSort(array){
  mergerSortHelper(array,0,array.length-1);
}
function mergerSortHelper(array,l,r){
  if(l>=r) return;
  let mid=l+Math.floor((r-l)/2);
  mergerSortHelper(array,l,mid);
  mergerSortHelper(array,mid+1,r);
  merge(array,l,mid,r);
}
function merge(array,l,mid,r){
  let i=l;
  let j=mid+1;
  let result=[];
  while(i<=mid&&j<=r){
    if(array[i]<array[j]){
      result.push(array[i]);
    }else {
      result.push(array[j]);
    }
  }
  while(i<=mid){
    result.push(array[i]);
  }
  while(j<=r){
    result.push(array[j]);
  }
  let t=l;
  for(let k=0;k<result.length;k++,t++){
    array[t]=result[k];
  }
}

mergeSort(array);
console.log(array);