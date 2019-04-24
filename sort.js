// Sort Js

let listOfNumber = [ 3, 5, 1, 6, 2, 4];
let isSorted = false;

function move(arr, i, j) {
  let tmp = listOfNumber[i];
  listOfNumber[i] = listOfNumber[j];
  listOfNumber[j] = tmp;
}

while (!isSorted) {
  isSorted = true;
  for (let i = 0; i < listOfNumber.length - 1; i++) {
    if (listOfNumber[i] > listOfNumber[i + 1]) {
      move(listOfNumber, i , i + 1);
      isSorted = false;
    }
  }
}

console.log(listOfNumber);
