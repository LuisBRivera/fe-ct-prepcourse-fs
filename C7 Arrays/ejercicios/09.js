function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const indiceAleatorio = Math.floor(Math.random() * array.length);
   ///console.log(array[indiceAleatorio]);
   return array[indiceAleatorio];

}
// obtenerElementoAleatorio([0,3,5])

module.exports = obtenerElementoAleatorio;
