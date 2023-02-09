let valores = [true, 5, false, "hola", "adios", 2];

let suma = 0;
let resta = 0;
let multiplicacion = 1;
let division = 1;

for (let i = 0; i < valores.length; i++) {
  let elemento = valores[i];

  if (typeof elemento === 'number') {
    suma += elemento;
    
    if (resta === 0) {
      resta = elemento;
    } else {
      resta -= elemento;
    }
    multiplicacion *= elemento;
    division *= elemento; 
  }
}

let modulo = suma % division;

console.log(suma); 
console.log(resta); 
console.log(multiplicacion); 
console.log(division); 
console.log(modulo); 
