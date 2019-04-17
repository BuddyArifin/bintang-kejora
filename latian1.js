/**

output:
*
**
***
**
*

*/

let bintang = '';
let arr = [];
let n = 5;

for (let i = 0; i < n ; i++) {
  bintang = `${bintang}*`;
  console.log(bintang);
  if (i < n-1) {
    arr.push(bintang);
  }
}

arr.reverse();

// Running Code
print(arr);

function print(arr) {
  for(let a of arr) {
    console.log(a);
  }
}
