const arr = [ 3, 5, 1, 6, 2, 4];

let x = 3;

for (let i = 0; i < arr.length; i++) {
  if (x > arr[ i ]) {
    x = arr[i]
  }
}

console.log(x);
