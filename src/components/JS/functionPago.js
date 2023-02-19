


function saldarDeuda(persona, deudores, montoPorPersona, arrayFinal) {
    
    

    let leFaltaQueLePaguen = persona.monto - montoPorPersona;
    
    
    let pago = {
        nombre: "",
        monto: 0,
    }
    let ultimoDeudor=""
    
    while (deudores.length>0 && leFaltaQueLePaguen > 0)
    
        if (deudores[0].leFaltaPagar > leFaltaQueLePaguen) {
            
            pago = {
                nombre: persona.nombre,
                monto: leFaltaQueLePaguen,
            }

            deudores[0].leFaltaPagar = deudores[0].leFaltaPagar - leFaltaQueLePaguen;
            deudores[0].tieneQueDarle.push(pago);
            leFaltaQueLePaguen=0;

        } else {
            
            //Si a el deudor no le alcanza para pagar la deuda de la persona.
            pago = {
                nombre: persona.nombre,
                monto: deudores[0].leFaltaPagar
            }

            leFaltaQueLePaguen = leFaltaQueLePaguen - deudores[0].leFaltaPagar;
            deudores[0].leFaltaPagar = 0;
            deudores[0].tieneQueDarle.push(pago)
            ultimoDeudor = deudores.shift()
            
            arrayFinal.push(ultimoDeudor)
            ultimoDeudor=null;
        }
   

}






function devolucion(aParticipantes, m) {
    
    //borro el contenido de la anterior division
    for (let index = 0; index < aParticipantes.length; index++) {
        aParticipantes[index].tieneQueDarle = []
    }
    

    //informacion inicial, usamos un nuevo array para no modificar el primero
    let arrayParticipantesScope = [...aParticipantes]
    let totalParticipantes = aParticipantes.length;

    //Nos deshacemos de un posible decimal.
    let montoPorPersona = Math.floor(m / totalParticipantes);
    m = montoPorPersona * totalParticipantes;
    
    //Creo 3 arrays, uno para los que pagaron de mas, otro para los que pagaron de menos, y otro por si se da la casualidad en el que pago justo.
    let arrayPagaronDeMas = arrayParticipantesScope.filter(participante => participante.monto > montoPorPersona)
    for (let index = 0; index < arrayPagaronDeMas.length; index++) {
        arrayPagaronDeMas[index].leFaltaPagar = 0;
    }

    

    let arrayPagaronDeMenos = arrayParticipantesScope.filter(participante => participante.monto < montoPorPersona)
    for (let index = 0; index < arrayPagaronDeMenos.length; index++) {
        arrayPagaronDeMenos[index].leFaltaPagar = montoPorPersona - arrayPagaronDeMenos[index].monto

    }
    
    
    let arrayFinal = arrayParticipantesScope.filter(participante => participante.monto === montoPorPersona)
    arrayFinal = [...arrayFinal, ...arrayPagaronDeMas]

    




    while (arrayPagaronDeMas.length > 0) {
        
        saldarDeuda(arrayPagaronDeMas[0], arrayPagaronDeMenos, montoPorPersona, arrayFinal)
        arrayPagaronDeMas.shift()
    }
    
   
    return arrayFinal
}




//************************************Hardcodeado de una prueba con lo que recibe**********************


/*
let arrayParticipantes = [
    {
        nombre: "Amado",
        monto: 17,
        tieneQueDarle: [],
    },
    {
        nombre: "Marcos",
        monto: 600,
        tieneQueDarle: [],
    },
    {
        nombre: "Joaquin",
        monto: 16,
        tieneQueDarle: [],
    },
    {
        nombre: "pedrito",
        monto: 12,
        tieneQueDarle: [],
    },
    {
        nombre: "marquitos",
        monto: 1900,
        tieneQueDarle: [],
    },
]



let monto = 0;
for (let index = 0; index < arrayParticipantes.length; index++) {
    monto = monto + arrayParticipantes[index].monto;
}



let array = devolucion(arrayParticipantes, monto)
*/

export default devolucion
