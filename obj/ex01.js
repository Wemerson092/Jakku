function myFunction(a, b) {
    
    

    if(a[b] == undefined || a[b] == null) {
        console.log(false) 
    } else {
        console.log(true)     
    }
}

myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:null,z:'c'},'y')
myFunction({x:'a',b:'b',z:undefined},'z')
