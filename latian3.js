/**

335555
22444
1133
002

*/
let n = 5;
let urutan = '';
let arr = [];

for (let i = 0; i < n ; i++) {
  urutan = `${i}${i}`

  let x = i + 2;
  for (let j = 0; j <= i ; j++) {
    urutan = `${urutan}${x}`
  }

  arr.push(urutan);
}


// Running Code
arr.reverse();
arr.forEach(elem => {
  console.log(elem);
});
