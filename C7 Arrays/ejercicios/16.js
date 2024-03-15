function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementoIndice = array.map(function(elemento, indice){
    return elemento * indice;
  });
  
  return elementoIndice;
}

module.exports = multiplicarElementosPorIndice;
