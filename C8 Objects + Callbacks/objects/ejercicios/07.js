function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   return list.sort((objeto1, objeto2) => {
      if (objeto1[sortBy] < objeto2[sortBy]) {
          return 1; // Si el valor de sortBy en objeto1 es menor que el valor de sortBy en objeto2, devuelve 1
      } else if (objeto1[sortBy] > objeto2[sortBy]) {
          return -1; // Si el valor de sortBy en objeto1 es mayor que el valor de sortBy en objeto2, devuelve -1
      } else {
          return 0; // Si los valores son iguales, no se cambia el orden
      }
  });
}

module.exports = sort;
