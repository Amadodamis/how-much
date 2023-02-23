function textsFunction(leng, tieneQueDarle) {
    let texto = ""

    if (leng === "ESP") {

        let texto = "y tiene que darle "

        for (let index = 0; index < tieneQueDarle.length; index++) {

            texto = texto + tieneQueDarle[index].monto + " a " + tieneQueDarle[index].nombre

            if ((index + 1) < tieneQueDarle.length) {
                texto = texto + " tambien le tiene que dar "
            }
            else {
                texto = texto + "."
            }

        }

    } else {

        let texto = "and he/she has to give "

        for (let index = 0; index < tieneQueDarle.length; index++) {

            texto = texto + tieneQueDarle[index].monto + "$ " + " to " + tieneQueDarle[index].nombre;

            if ((index + 1) < tieneQueDarle.length) {
                texto = texto + " he/she also has to give "
            }
            else {
                texto = texto + "."
            }

        }

    }



    return texto
}

export default textsFunction
