function textsAlertsBody(leng) {
    let texts = "";
    if (leng === "ESP") {
        texts = {
            errorNombre: "Se debe introducir un Nombre",
            errorMonto: "Se debe introducir un monto",
            errorMontoDos: "Se debe introducir un monto mayor que cero"
        }
    } else {
        texts = {
            errorNombre: "You must enter a Name",
            errorMonto: "You must enter an amount",
            errorMontoDos: "An amount greater than zero must be entered"
        }
    }



    return texts

}


function alerts (nombre,plata,errorNombre,errorMonto,errorMontoDos){
    if (nombre === "") {
        alert(errorNombre)
    } else if (plata === "") {
        alert(errorMonto)
    } else {
        alert(errorMontoDos)
    }

}



export {textsAlertsBody,alerts}