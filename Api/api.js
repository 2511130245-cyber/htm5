(function () {

    emailjs.init("6UuM20_3UKzUrH96C");

})();
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");

const email = document.getElementById("email");

const mensaje = document.getElementById("mensaje");

const botonEnviar = document.getElementById("btnEnviar");

const textoBoton = document.getElementById("textoBoton");

const mensajeEstado = document.getElementById("mensajeEstado");
formulario.addEventListener("submit", function (e) {

    e.preventDefault();


    if (!navigator.onLine) {

        mostrarMensaje(
            "⚠️ Dispositivo sin Internet.<br>" +
            "No es posible enviar el correo.",
            "error"
        );

        return;
    }




    const nombreValor = nombre.value.trim();

    const emailValor = email.value.trim();

    const mensajeValor = mensaje.value.trim();



    if (nombreValor.length < 2) {

        mostrarMensaje(
            "⚠️ Ingresa un nombre válido.",
            "error"
        );

        nombre.focus();

        return;
    }


    if (!correoValido(emailValor)) {

        mostrarMensaje(
            "⚠️ Ingresa un correo electrónico válido.",
            "error"
        );

        email.focus();

        return;
    }



    if (mensajeValor.length < 3) {

        mostrarMensaje(
            "⚠️ Escribe un mensaje antes de enviar.",
            "error"
        );

        mensaje.focus();

        return;
    }




    botonEnviar.disabled = true;

    textoBoton.textContent = "Enviando...";


    mostrarMensaje(
        "📨 Enviando correo...<br>" +
        "Por favor espera un momento.",
        "enviando"
    );




    emailjs.send(
    "service_dcnlx6p",
    "template_wwltu5q",
    {
        from_name: nombreValor,
        from_email: emailValor,
        to_email: emailValor,
        message: mensajeValor
    }
)




    .then(function (respuesta) {

        console.log(
            "Correo enviado correctamente:",
            respuesta
        );


        mostrarMensaje(

            "✅ <strong>¡Correo enviado exitosamente!</strong><br>" +

            "📩 El mensaje fue enviado al correo conectado con EmailJS.",

            "exito"

        );




        formulario.reset();




        botonEnviar.disabled = false;

        textoBoton.textContent = "Enviar correo";




        setTimeout(function () {

            mensajeEstado.innerHTML = "";

            mensajeEstado.className = "";

        }, 7000);

    })


  

    .catch(function (error) {

        console.error(
            "Error al enviar:",
            error
        );


        mostrarMensaje(

            "❌ <strong>No se pudo enviar el correo.</strong><br>" +

            "Verifica tu conexión a Internet e inténtalo nuevamente.",

            "error"

        );


        botonEnviar.disabled = false;

        textoBoton.textContent = "Enviar correo";

    });

});



function correoValido(correo) {

    const expresion =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);

}




function mostrarMensaje(texto, tipo) {

    mensajeEstado.innerHTML = texto;

    mensajeEstado.className = tipo;

}