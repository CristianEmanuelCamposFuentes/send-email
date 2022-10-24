document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos 
    inputEmail.addEventListener('blur', function(e){
        // Evento cuando abandonas un campo 'blur'
        console.log(e.target.value);
    });

    inputAsunto.addEventListener('blur', function(e){
        // Evento cuando abandonas un campo 'blur'
        console.log(e.target.value);
    });

    inputMensaje.addEventListener('blur', function(e){
        // Evento cuando abandonas un campo 'blur'
        console.log(e.target.value);
    });

    function validar() {
        console.log('desde la fn de validar');
    }

});