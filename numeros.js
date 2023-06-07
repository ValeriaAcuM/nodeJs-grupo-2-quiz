/* Escribir una aplicación en node.js (Usar módulos) que recibirá 20 números enteros positivos */
function ingresarNumeros() {
  let numeros = [];
  for (let i = 0; i < 20; i++) {
    numeros.push(i);
  }
}

/* El número mayor de la lista de números recibidos. */
function numeroMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

/* El número menor de la lista recibida. */
function numeroMenor(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

/* La sumatoria de todos los números recibidos */
function numerosSumatoria() {
  let numeros = [];
  let sumatoria = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
  }
}

module.exports = {
  ingresarNumeros: ingresarNumeros,
  numeroMayor: numeroMayor,
  numeroMenor: numeroMenor,
  numerosSumatoria: numerosSumatoria,
}