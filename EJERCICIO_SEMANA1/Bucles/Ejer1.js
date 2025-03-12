let i=10;

function contadorRegresivo(){
    if(i>=0){
        console.log(i)
        i--;
        setTimeout(contadorRegresivo, 1000)
    }
}
contadorRegresivo()