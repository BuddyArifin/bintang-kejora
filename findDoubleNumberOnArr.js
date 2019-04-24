const arr = [ 3, 5, 1, 6, 2, 4, 5, 3, 1];
let arrNew = [];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj.hasOwnProperty(arr[i])) {
    arrNew.push(arr[i]);
  } else {
    obj[arr[i]] = arr[i];
  }
}

console.log(arrNew);
