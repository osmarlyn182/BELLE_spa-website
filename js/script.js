document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");
    console.log(form);
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var nombre = document.getElementById("name").value;
        var telefono = document.getElementById("telefono").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;

        if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
            alert("Por favor, complete todos los campos del formulario.");
            
        } else {
            alert("¡El formulario se envió correctamente!");
        }
    });
});

//copos


