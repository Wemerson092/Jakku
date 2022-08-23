function myFunction(arr) {

    let i = arr.length
    let valores = arr.slice(0, 4)
    
    if(valores === arr[0]) {
        console.log(true)
    } else {
        console.log(false)
    }

    /* for (var i = 0; i < arr.length; i++) {
        
        if (arr[0] === arr[i]) {
            console.log(true)
        }
        else {
            console.log(false)
        }

    }
 */
    /* let resu = arr.filter((arr) === arr)
    console.log(resu) */

}


myFunction([true, true, true, true])
myFunction(['test', 'test', 'test'])
myFunction([1, 1, 1, 2])
myFunction(['10',10,10,10])