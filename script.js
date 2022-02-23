  //função que adiciona números ao visor 
  function calcNum(num) {
    if (typeof gvisor == 'undefined') {
      document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
  }

  //função que limpa a calculadora
  function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
  }

  //função que executa as operações
  function calcoper(oper, x, y) {
    if (oper == 'somar') {
      var valor = parseFloat(x) + parseFloat(y)
    } else if (oper == 'subtrair') {
      var valor = x - y
    } else if (oper == 'multiplicar') {
      var valor = x * y;
    } else {
      var valor = x / y
    }


    return(valor)
  }

  //função do algoritmo de "passagem"
  function calcParse(oper) {
    var valor = document.calcform.visor.value;
    delete gvisor;
  
    if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcoper(goper, gvalor, valor);
      document.calcform.visor.value = gvalor;
      delete oper;
      delete gvalor;
      return (0)
    }
  
    if (typeof gvalor != 'undefined') {
      gvalor = calcoper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;
    } else {
      gvalor = valor;
      goper = oper;
    }
  
  }