function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var duplicados = array.map(function(elemento){
    return elemento * 2;
  });
  return duplicados;
}

module.exports = duplicarElementos;
