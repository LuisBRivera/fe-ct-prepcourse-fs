function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let acumulador = 0;
  do {
    num = num + 5;
    acumulador++;
  } while (acumulador < 8);
  
  return num;
}


module.exports = doWhile;