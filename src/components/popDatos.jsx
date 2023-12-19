/* eslint-disable no-constant-condition */
/* eslint-disable no-prototype-builtins */

export const detectorInst = (dato) => {
    if (dato.strInstructionsES == null) {
        return `Instrucciones EN: ${dato.strInstructions}`
    } else {
        return `Instrucciones ES: ${dato.strInstructionsES}`
    }
}
export const detectorIBA = (dato) => {
    if (dato.strIBA == null) {
        return 'IBA: no aplica'
    } else {
        return `IBA: ${dato.strIBA}`
    }
}
export const detectorIng = (dato) => {
    function buscarPropiedades(objeto, patron, condicion) {
        let indice = 1;
        let propiedadesEncontradas = [];
        while (true) {
          let propiedad = patron + indice;
          if (!objeto.hasOwnProperty(propiedad)) {
            break;
          }
          if (condicion(objeto[propiedad])) {
            propiedadesEncontradas.push(objeto[propiedad]);
          } else {
            break;
          }
          indice++;
        }
        return propiedadesEncontradas.join(', ');
      }
      
      var resultado = buscarPropiedades(dato, 'strIngredient', function(valor) {
        return typeof valor === 'string' && valor.trim() !== '';
      });
      return `Ingredientes: ${resultado}`
}
