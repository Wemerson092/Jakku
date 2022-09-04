function myFunction(a, b) {
    

    const c = a.concat(b);
    const d = [...new Set(c)];  

        d.sort(function(a, b) {
            return a - b;
        });
    console.log(d)

    
    /* function myFunction(a, b) {
        return [...new Set([...a, ...b])].sort((x, y) => x - y);
    }   */  
    
}

myFunction([1, 2, 3], [3, 4, 5])
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
