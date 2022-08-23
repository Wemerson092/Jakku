function myFunction(a, b) {
    

    let resu = a.filter((a) => a !== b)
    console.log(resu)

}


myFunction([1,2,3], 2)
myFunction([1,2,'2'], '2')
myFunction([false,'2',1], false)
myFunction([1, 2,'2',1], 1)

