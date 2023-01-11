// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]




//WRONG SOLUTION
// function maps(x) {
//     for (let i = 0; i < x.length; i++) {
//         console.log(i * 2)
//     }
// }
// maps([1, 2, 3])

//solution
function maps(x) {
    return x.map(num => num * 2)
}
