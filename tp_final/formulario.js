"use stric";

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let consulta = document.getElementById("texto");
btnEnviar = document.getElementById("boton");
let informacion = [];

btnEnviar.addEventListenner("click",(e)=>{
e.preventDefault();
informacion[0]= nombreApellido.value;
informacion[1]=correo.value;
informacion[2]=contraseña.value;
informacion[3]=consulta.value;

let blob = new Blob([informacion], {type: "text/plain;charset-utf-8"}); 

saveAs(blob, "contacto.txt");

console.log(blob);
})