function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  /// Solucion con el metodo filter
  // let numeroNuevo = numeros.filter(function(elementos){
  //   return elementos % 2 === 0;
  // });
  // return numeroNuevo.length;

 ///       -----------------

  //  Otra manera de hacerlo
  ///let numeroNuevo = numeros.filter(numero => numero % 2 === 0);
  // return numeroNuevo.length;

   ///       -----------------
  let cantidadPares = 0;

  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 !== 0) {
          continue; // Omite los números impares
      }
      cantidadPares++;
  }

  return cantidadPares;

  
}

module.exports = contarParesConContinue;
