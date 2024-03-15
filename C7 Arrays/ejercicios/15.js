function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var numeroMayr = array[0];
  var cont = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > numeroMayr ){
      numeroMayr = array[i];
      cont = i;
    }
  }
  
  
  return cont;
}


module.exports = encontrarIndiceMayor;
