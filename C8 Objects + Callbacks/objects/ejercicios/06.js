const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let totalPropiedad = 0;
  for (const propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      totalPropiedad++;
    }
  }
  return totalPropiedad;
   
  // Otra manera mas sencilla de hacerlo con length
  // return Object.keys(objeto).length;
};

module.exports = contarPropiedades;
