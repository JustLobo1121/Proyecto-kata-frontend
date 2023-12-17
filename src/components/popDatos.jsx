
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
    if (dato.strIngredient5 == null) {
        return `Ingredientes: ${dato.strIngredient1}, ${dato.strIngredient2} ${dato.strIngredient3} y ${dato.strIngredient4}`
    } else if (dato.strIngredient5 != null) {
        return `Ingredientes: ${dato.strIngredient1}, ${dato.strIngredient2}, ${dato.strIngredient3}, ${dato.strIngredient4} y ${dato.strIngredient5}`
    }
    if (dato.strIngredient4 == null) {
        return `Ingredientes: ${dato.strIngredient1}, ${dato.strIngredient2} y ${dato.strIngredient3}`
    } else if (dato.strIngredient4 != null) {
        return `Ingredientes: ${dato.strIngredient1}, ${dato.strIngredient2}, ${dato.strIngredient3} y ${dato.strIngredient4}`
    }
    if (dato.strIngredient3 == null) {
        return `Ingredientes: ${dato.strIngredient1} y ${dato.strIngredient2}`
    } else if (dato.strIngredient3 != null) {
        return `Ingredientes: ${dato.strIngredient1}, ${dato.strIngredient2} y ${dato.strIngredient3}`
    }
    if (dato.strIngredient2 == null) {
        return `Ingrediente: ${dato.strIngredient1}`
    } else if (dato.strIngredient2 != null) {
        return `Ingredientes: ${dato.strIngredient1} y ${dato.strIngredient2}`
    }
    // esto no se como mejorarlo :P
}
