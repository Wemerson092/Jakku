function myFunction(arr) {
    
    arr.sort();
    let inverso = arr.sort().reverse();


    if(arr[0] < arr[1]) {
        console.log(inverso)
    } else {
        console.log(arr)
    }
    
    
}

myFunction([1,3,2])
myFunction([4,2,3,1])