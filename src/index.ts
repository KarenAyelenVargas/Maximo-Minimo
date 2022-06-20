let valorMayor: number = 0;
let valorMenor: number = 0;
let numero: number = Number(prompt("Ingresar un número entero"));

while (numero != 0) {
  console.log("El número ingresado es:" + numero);
  if (numero > valorMayor) {
    valorMayor = numero;
    numero = Number(prompt("Ingresar un número entero"));
  } else {
    if (numero < valorMenor) {
      valorMenor = numero;
      numero = Number(prompt("Ingresar un número entero"));
    } else {
      numero = Number(prompt("Ingresar un número entero"));
    }
  }
}
console.log("El número más grande ingresado es:" + valorMayor);
console.log("El número más chico ingresado es:" + valorMenor);
