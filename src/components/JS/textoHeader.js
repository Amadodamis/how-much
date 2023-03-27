let espText = "¿Quién le tiene que dar dinero a quién?"
let engTexT = "Who has to give money to whom?"

export default function getTextHeader(leng) {
    let texto;
    leng === "ESP" ? texto = espText : texto = engTexT;
    return texto
}