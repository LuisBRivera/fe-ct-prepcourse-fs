function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var cadena = '';
   for(let i = texto.length - 1; i >=0; i-- ){
      cadena += texto[i];
   }
   return cadena;
}

module.exports = invertirTexto;
