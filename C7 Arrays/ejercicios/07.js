function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        // Intercambiar los elementos
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}
///console.log(array.sort());
return array;
}
///ordenarArray([2,3,1,5,4]);

module.exports = ordenarArray;
