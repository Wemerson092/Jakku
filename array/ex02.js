function myFunction(...arrays) {
    let arr0 = arrays[0]
    let arr2 = arrays[1]
    let arr3 = arrays[2]
    
    if(arr3 == undefined) {
        console.log(arr0.concat(arr2))
    } else {
        console.log(arr0.concat(arr2).concat(arr3))
    }
    
}

/* function myFunction( ...arrays ) {
    return arrays.flat()
} */
  

myFunction([1, 2, 3], [4, 5, 6])
myFunction(['a', 'b', 'c'], [4, 5, 6])
myFunction([true, true], [1, 2], ['a', 'b'])