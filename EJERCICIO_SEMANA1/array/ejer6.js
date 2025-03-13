let frutas = ["manzana","naranja","pera"]
let posicion= parseInt(prompt("Ingresa la posición"))
let fruta= prompt("Ingresa la fruta a modificar: ")
frutas[posicion]=fruta
let nueva= prompt("Ingresa la fruta nueva: ")
frutas.push(nueva)
frutas.pop();
console.log(frutas);
frutas.forEach((fruta, index)=>{
    console.log(`${index+1} = ${fruta}`)
})
let frutasMay= frutas.map(fruta=>fruta.toUpperCase())
let largas= frutas.filter(fruta=> fruta.length>5)
console.log(frutasMay)
console.log(largas)
console.log(frutas)