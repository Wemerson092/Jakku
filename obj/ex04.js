function myFunction(a, b) {

   let obj = {}
   a.forEach((a, x) => obj[a] = b[x])  
   console.log(obj)
}

myFunction(['a','b','c'],[1,2,3])