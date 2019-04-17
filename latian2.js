/**

output 1:
*
**
* *
**
*

output 2:
*
**
***
** *
***
**
*

*/

let bintang = [];
let arr = [];
let n = 3;

for (let i = 0; i < n ; i++) {
  bintang.push('*');

  if (i === n - 1) {
    bintang[i-1] = ' ';
  }

  arr.push(bintang.join(''))
}

// Running Code
print(arr);
arr.pop();
print(arr.reverse())

function print(arr) {
  for (let a of arr) {
    console.log(a);
  }
}
