function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Devuelve null si el arreglo es vacío
  }

numeros.sort((a, b) => a - b); // Ordena el arreglo de números

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] + 1 !== numeros[i + 1]) {
      return numeros[i] + 1; // Devuelve el número faltante
    }
  }

return null; // Devuelve null si no hay números faltantes
}

module.exports = encontrarNumeroFaltante;