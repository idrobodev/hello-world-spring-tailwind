// Intenta obtener datos de la API "/api/hello"
fetch('/api/hello')
    .then(response => response.text()) // Convierte la respuesta en texto
    .then(data => {
        // Elementos del DOM (HTML)
        const messageElement = document.getElementById('message');
        const loaderElement = document.getElementById('loader');

        // Animación y cambio de mensaje
        messageElement.classList.add('animate__animated', 'animate__flipInX'); // Efecto de volteo
        messageElement.textContent = data; // Muestra el mensaje de la API

        // Oculta el indicador de carga después de 1 segundo
        setTimeout(() => {
            loaderElement.classList.add('hidden');
        }, 1000);

        // Elimina las clases de animación después de 1 segundo
        setTimeout(() => {
            messageElement.classList.remove('animate__animated', 'animate__flipInX');
        }, 1000);
    })
    .catch(error => {
        // Manejo de errores
        const messageElement = document.getElementById('message');
        const loaderElement = document.getElementById('loader');

        messageElement.textContent = "Error al cargar"; // Mensaje de error
        messageElement.classList.remove('text-transparent', 'bg-gradient-to-r'); // Quita el gradiente
        messageElement.classList.add('text-red-500'); // Color rojo para el error
        loaderElement.classList.add('hidden'); // Oculta los puntos de carga
    });