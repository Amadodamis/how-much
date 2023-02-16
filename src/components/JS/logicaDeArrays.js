/*
let arrayParticipantes = [
    {
        nombre: "Amado",
        monto: 1000,
        tieneQueDarle: [],
    },
    {
        nombre: "Marcos",
        monto: 500,
        tieneQueDarle: [],
    },
    {
        nombre: "Martin",
        monto: 1500,
        tieneQueDarle: [],
    },
]
*/
    


function devolucion(aParticipantes, m) {
    
    //borro el contenido de la anterior division
    for (let index = 0; index < aParticipantes.length; index++) {
        aParticipantes[index].tieneQueDarle=[]
    }

    //informacion inicial, usamos un nuevo array para no modificar el primero
    let arrayParticipantesScope = [...aParticipantes]
    let totalParticipantes = aParticipantes.length;

    //Nos deshacemos de un posible decimal.
    let montoPorPersona = Math.floor(m / totalParticipantes);

    //Creo 3 arrays, uno para los que pagaron de mas, otro para los que pagaron de menos, y otro por si se da la casualidad en el que pago justo.
    let arrayPagaronDeMas = arrayParticipantesScope.filter(participante => participante.monto > montoPorPersona)
    let arrayPagaronDeMenos = arrayParticipantesScope.filter(participante => participante.monto < montoPorPersona)

    let arrayFinal = arrayParticipantesScope.filter(participante => participante.monto == montoPorPersona)
    arrayFinal = [...arrayFinal, ...arrayPagaronDeMas]



    for (let i = 0; i < arrayPagaronDeMenos.length; i++) {

        //primero tomamos cuanto le falta pagar al que pago de menos 
        let faltaPagar = montoPorPersona - arrayPagaronDeMenos[i].monto;

        while (arrayPagaronDeMas.length > 0 && faltaPagar > 0) {


            //Primero vemos cuanto falta que le paguen a esta persona
            let faltaQueLePaguen = arrayPagaronDeMas[0].monto - montoPorPersona

            //El primer caso es si la persona puede pagarle a mas de una persona con su deuda
            if (faltaPagar > faltaQueLePaguen) {

                //Primero saldo mi deuda con la persona
                let pague = {
                    nombre: arrayPagaronDeMas[0].nombre,
                    monto: faltaQueLePaguen,
                }

                arrayPagaronDeMenos[i].tieneQueDarle.push(pague)
                faltaPagar = faltaPagar - faltaQueLePaguen;


                //Saco a la persona la cual ya se la saldo la deuda, y lo pusheo en el array Final
                arrayPagaronDeMas.shift()

            }
            else if (faltaPagar == faltaQueLePaguen) {

                let pague = {
                    nombre: arrayPagaronDeMas[0].nombre,
                    monto: faltaPagar,
                }
                arrayPagaronDeMenos[i].tieneQueDarle.push(pague)
                faltaPagar = faltaPagar - faltaQueLePaguen;

                //Saco a la persona la cual ya se la saldo la deuda, y lo pusheo en el array Final
                arrayPagaronDeMas.shift()

            }
            //Este es el caso en el que la persona no llega a pagar lo que le falta a la otra persona
            else {


                let pague = {
                    nombre: arrayPagaronDeMas[0].nombre,
                    monto: faltaPagar,
                }
                arrayPagaronDeMenos[i].tieneQueDarle.push(pague)
                faltaPagar = 0;
            }



        }

    }

    arrayFinal = [...arrayFinal, ...arrayPagaronDeMenos]


    return arrayFinal
}

/*
let monto = 0;
for (let index = 0; index < arrayParticipantes.length; index++) {
    monto = monto + arrayParticipantes[index].monto;

}
*/

//let array=devolucion(arrayParticipantes, monto)


export default devolucion
