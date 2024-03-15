function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const resultado = array.map(function(elemento) {
  
    if (typeof elemento === 'string') {
        return elemento.toUpperCase(); 
    } else {
        return elemento;
    }
});
return resultado;
}

module.exports = convertirStringAMayusculas;
