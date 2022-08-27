var op1="Piedra"
var op2="Papel"
var op3="Tijera"

var input_1;
var input_2;

function juego(input_1,input_2){
    if (input_1==op1) {
        if (input_2==op2) {
            console.log("Gana CPU")
        } else if (input_2==op3) {
            console.log("Gana Usuario")
        } else {
            console.log("Intentar nuevamente")
        }
    }
    if (input_1==op2) {
        if (input_2==op3) {
            console.log("Gana CPU")
        } else if (input_2==op1) {
            console.log("Gana Usuario")
        } else {
            console.log("Intentar nuevamente")
        }
    }
    if (input_1==op3) {
        if (input_2==op1) {
            console.log("Gana CPU")
        } else if (input_2==op2) {
            console.log("Gana Usuario")
        } else {
            console.log("Intentar nuevamente")
        }
    }
}