function myFunction(a, b) {
    
    var pos = 0, n = b;
    var remove = a.splice(pos, n)
    console.log(remove)

    var soma = a.reduce(function(soma, i) {
        return soma + i;
    });
    
    console.log(soma)
}

myFunction([1, 2, 3, 4, 5, 6, 7], 2)
myFunction([-10, -11, -3, 1, -4], -3)
myFunction([78, 99, 100, 101, 401], 99)

