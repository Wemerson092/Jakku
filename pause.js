function myFunction(a, b) {
    
    if(a[b] == null) {
        console.log(false) 
    } 
    else {
        console.log(true) 
    }
    
}

myFunction({a:1,b:2,c:3})
myFunction({x:'a',y:'b',z:'c'},'a')
myFunction({x:'a',y:'b',z:undefined},'z')