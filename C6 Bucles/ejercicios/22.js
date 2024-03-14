function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
  let result = '';
  let index1 = 0, index2 = 0, index3 = 0;

  while (index1 < str1.length || index2 < str2.length || index3 < str3.length) {
    if (index1 < str1.length) {
      result += str1[index1];
      index1++;
    }
    if (index2 < str2.length) {
      result += str2[index2];
      index2++;
    }
    if (index3 < str3.length) {
      result += str3[index3];
      index3++;
    }
  }

  return result;
}

module.exports = combine;
