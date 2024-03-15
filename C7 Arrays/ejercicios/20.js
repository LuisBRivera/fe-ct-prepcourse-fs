function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var igual = array[0];
  for (let i = 0; i < array.length; i++) {
    if(array[i] !== igual) return false;    
  }
  return true;
}

module.exports = todosIguales;
