//initiallization

 const myArray=[0,1,2,3,4,5,6];
// console.log(myArray[1]);
//op:-1

//array methods
// myArray.push(7);
// console.log(myArray);
//op:-(8) [0, 1, 2, 3, 4, 5, 6, 7]

// myArray.pop();
// console.log(myArray);
//op:-(6) [0, 1, 2, 3, 4, 5]

// myArray.unshift(10);
// console.log(myArray);
//op:-(8) [10, 0, 1, 2, 3, 4, 5, 6]

// myArray.shift();
// console.log(myArray);
//op:-(6) [1, 2, 3, 4, 5, 6]

// let check=myArray.includes(9);
// console.log(check);
// op:-false

// let index=myArray.indexOf(9);
// console.log(index);
// op:-1;

// const newArray=myArray.join();
// console.log(newArray);
// console.log(typeof(newArray));
//op:-0,1,2,3,4,5,6
// string


//******************slice and splice********************** */
// console.log("A",myArray);
// const myn1=myArray.slice(1,3);
// console.log(myn1);

// //(7) [0, 1, 2, 3, 4, 5, 6]
// //(2) [1, 2]

// console.log("B",myArray);
// const myn2=myArray.splice(1,3);
// console.log(myn2);
// //(7) [0, 1, 2, 3, 4, 5, 6]
// //(3) [1, 2, 3]

// console.log(myArray);
//(4) [0, 4, 5, 6]
