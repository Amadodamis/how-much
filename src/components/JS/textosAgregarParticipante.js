let espText = {
    title: "AGREGAR PARTICIPANTE",
    button: "Agregar",
    placeholderUno: "Nombre",
    placeholderDos: "Cuánto gastó?"

}

let engText = {
    title: "ADD PARTICIPANT",
    button: "ADD",
    placeholderUno: "Name",
    placeholderDos: "How much did he/she spend?"
}


export default function getText(leng) {
    let textos;
    leng === "ESP" ? textos = espText : textos = engText;


    return textos;
}