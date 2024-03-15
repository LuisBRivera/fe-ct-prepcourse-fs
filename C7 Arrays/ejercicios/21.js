function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPedidos = ['Enero', 'Marzo', 'Noviembre'];
  // let mesesEncontrados = [];

    // for (let i = 0; i < mesesPedidos.length; i++) {
    //     let encontrado = false;
    //     for (let j = 0; j < array.length; j++) {
    //         if (array[j] === mesesPedidos[i]) {
    //             mesesEncontrados.push(array[j]);
    //             encontrado = true;
    //             break;
    //         }
    //     }
    //     if (!encontrado) {
    //         return "No se encontraron los meses pedidos";
    //     }
    // }

  //   for (let i = 0; i < mesesPedidos.length; i++) {
  //     if (array.includes(mesesPedidos[i])) {
  //         mesesEncontrados.push(mesesPedidos[i]);
  //     } else {
  //         return "No se encontraron los meses pedidos";
  //     }
  // }


  //   return mesesEncontrados;


  var mesesRequeridos = ['Enero', 'Marzo', 'Noviembre'];
  
  var mesesEncontrados = array.filter(function(mes){
    return mesesRequeridos.includes(mes)
  })

  var estanTodos = mesesRequeridos.every(function(mes){
    return mesesEncontrados.includes(mes)
  })

  if (estanTodos) return mesesEncontrados
  else return "No se encontraron los meses pedidos"
}



module.exports = mesesDelAño;
