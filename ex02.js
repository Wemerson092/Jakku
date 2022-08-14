function myFunction(a) {
    
    console.log(Object.entries(a).map(item => item[0]))
}

myFunction({a:1,b:2,c:3})