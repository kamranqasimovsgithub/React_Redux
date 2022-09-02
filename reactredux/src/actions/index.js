export const sebeteQoy = (book) => {
    return { type: 'SEBETE_QOY', payload: book}
}

export const sebetdenCixar = (id) => {
    console.log("ID", id);
    return { type: 'SEBETDEN_CIXAR', payload: id}
}


export const artir = (id) => {
    console.log("ID", id);
    return { type: 'ARTIR', payload: id}
}

export const azalt = (id) => {
    console.log("ID", id);
    return { type: 'AZALT', payload: id}
}
