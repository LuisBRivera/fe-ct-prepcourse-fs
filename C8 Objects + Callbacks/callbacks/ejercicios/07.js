function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   
   var nuevoArray = arrayOfStrings.filter(function(elemento){
      if(elemento[0] === 'a'){
         return elemento;
      }
      // otra forma de hacerlo con un metodo startsWith
      // if(elemento.startsWith('a')){
      //    return elemento;
      // }
   });
   return nuevoArray;
}

module.exports = filter;
