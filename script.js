function myFunction(a, b) {
    
    
    if (b in a) {
        console.log(true);
      } 
    else {
        console.log(false) 
    }
    
}

myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:'b',z:'c'},'a')
myFunction({x:'a',y:'b',z:undefined},'z')