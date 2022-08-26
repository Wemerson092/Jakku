function myFunction(arr) {
    for(var i = 1;i < this.length; i++) {
        if(this[i] !== this[0]) {
            console.log(false) ;
        }
    }
    console.log(true);
}


myFunction([true, true, true, true])
myFunction(['test', 'test', 'test'])
myFunction([1, 1, 1, 2])
myFunction(['10',10,10,10])