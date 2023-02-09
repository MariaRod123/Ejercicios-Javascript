let valores = [true, 5, false, "hola", "adios", 2];
let resultados = [];

for (let i = 0; i < valores.length; i++) {
  let valor1 = valores[i];
  
  //comparando si el valor1 encontrado es un booleano
  if (typeof valor1 === 'boolean') {
    for (let j = i + 1; j < valores.length; j++) {
      let valor2 = valores[j];
      
      // comparando si el valor2 encontrado es un booleano
      if (typeof valor2 === 'boolean') {
        resultados.push(valor1 || valor2);
        resultados.push(valor1 && valor2);
        break;
      }
    }
    break;
  }
}

console.log(resultados); 