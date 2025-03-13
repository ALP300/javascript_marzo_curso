const { parse } = require("path");

/*
Calculadora de Expresiones Matemáticas
Descripción: Crea una función evaluarExpresion que reciba una cadena como
 "3 + 5 * 2" y devuelva el resultado numérico (en este caso, 13).
  La función debe respetar el orden de operaciones
   (primero multiplicación/división, luego suma/resta). No uses eval() por seguridad.
Requisitos:
Soporta +, -, *, y /.
Ignora espacios en blanco.
Maneja números enteros y decimales.

*/
function evaluarExpresion(expresion){
    const lista= expresion.split(" ");
    let resultado= parseFloat(lista[0]);
    for(let i=1; i<lista.length; i+=2){
        const operador= lista[i];
        const num= parseFloat(lista[i+1])
        if(operador==='+'){
            resultado+=num;
        } else if(operador==='-'){
            resultado-=num
        } else if(operador==='*'){
            resultado*=num
        }else{
            resultado/=num;
        }
    }
    return resultado;

}
let res= evaluarExpresion("10 + 5 * 202")
console.log(res)
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)