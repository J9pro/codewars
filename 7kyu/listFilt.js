// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]


// function filter_list(l) {
//     const result = l.map(item => item)
//     console.log(result)
// }

//solution

function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
}