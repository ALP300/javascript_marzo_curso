const persona={
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

for(const clave in persona){
    console.log(clave+" : "+persona[clave])
}