function myFunction(a) {

    let valor = Object.values(a).reduce((prev, acc) => prev + acc, 0);
    console.log(valor)
}

myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})