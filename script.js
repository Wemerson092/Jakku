function myFunction(arr) {
    
    let soma = arr[0].a + arr[0].b 
    let soma2 = arr[1].a + arr[1].b 

    if(soma > soma2) {
        console.log([arr[1], arr[0]])
    } else {
        console.log([arr[0], arr[1]])
    }
}


myFunction([{a:1,b:2},{a:5,b:4}])
myFunction([{a:2,b:10},{a:5,b:4}])
myFunction([{a:1,b:7},{a:2,b:1}])
