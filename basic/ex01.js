function myFunction(a, b) {

    var resultado = 0;

    for (const letraAtual of b) {
      if (letraAtual === a) {
        resultado++;
      }
    }
    
    console.log(resultado)
}

myFunction('m', 'how many times does the character occur in this sentence?')
myFunction('h', 'how many times does the character occur in this sentence?')