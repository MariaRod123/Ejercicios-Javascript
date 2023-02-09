let valores = [true, 5, false, "hola", "adios", 2];
let mayor = "";

for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string" && valores[i].length > mayor.length) {
    mayor = valores[i];
  }
}

console.log("La cadena de caracteres más grande es: " + mayor);