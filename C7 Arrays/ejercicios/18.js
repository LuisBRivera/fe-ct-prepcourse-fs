function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumaTest = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
        sumaTest += resultadosTest[i];
  }
  return sumaTest / resultadosTest.length;
}

module.exports = promedioResultadosTest;
