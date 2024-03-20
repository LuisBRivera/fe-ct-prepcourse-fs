function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   // convertir ambas a minusculas
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

   // Verifica si las longitudes de los strings son diferentes
   if (str1.length !== str2.length) {
       return false;
   }

   // Convierte los strings en arreglos de caracteres y los ordena
   const arr1 = str1.split('').sort();
   const arr2 = str2.split('').sort();

   // Compara los arreglos ordenados
   for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
           return false; // Si encuentras caracteres diferentes, no son anagramas
       }
   }

   return true;
}

module.exports = esAnagrama;
