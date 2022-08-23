function myFunction(a, b) {
    
    var soma = 0;
    for(var i = 0; i < a.length; i++) {
        soma += a[i]
    }

    const add = (a, b) => a + b
    const somar = a.reduce(add)
    console.log(somar)
    
}


myFunction([1, 2, 3, 4, 5, 6, 7], 2)
