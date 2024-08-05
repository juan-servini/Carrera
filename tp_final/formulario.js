document.addEventListener('DOMContentLoaded', (event) => {

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let consulta = document.getElementById("texto");
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

        if (!formulario.reportValidity()) {   
            return;
        }

        let informacion = [
            nombre = '${nombre.value}',
            email = '${email.value}',
            telefono = '${telefono.value}',
            consulta = '${consulta.value}'
        ].join('\n'); 

        let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

        saveAs(blob, "contacto.txt");

        console.log('Archivo generado: contacto.txt');
    });
});