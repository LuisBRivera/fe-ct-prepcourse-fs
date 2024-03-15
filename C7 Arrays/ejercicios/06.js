function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  
  var arrayNuevo = [];
  for(var i = array.length - 1; i >= 0; i--){
    arrayNuevo.push(array[i]);
  }
  
  ///console.log(array.reverse())
  return arrayNuevo;
}

///invertirArray([1,2,3,4]);
module.exports = invertirArray;
