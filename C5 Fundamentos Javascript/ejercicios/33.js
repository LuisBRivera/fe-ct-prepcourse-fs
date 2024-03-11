function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let num, cont = 0;
  for(i=1; i<=numero; i++){
    num = numero % i;
    if(num === 0){
      cont++;
    }
  }
  if(cont == 2){
    return true;
  }else{
    return false;
  }
}

module.exports = esNumeroPrimo;
