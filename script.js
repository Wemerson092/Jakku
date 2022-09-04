function myFunction(a, b) {

    /*
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24
    */

    var sub = Math.abs(b.getTime() - a.getTime());
    var dias = Math.ceil(sub / (1000 * 3600 * 24));

    console.log(dias)

}

myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
