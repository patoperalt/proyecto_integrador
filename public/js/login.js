document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login__form');
    
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const email = emailInput.value;
        const password = passwordInput.value;
        
        // Verifica las credenciales (esto es solo un ejemplo, en un entorno real debes consultar una base de datos)
        if (email === 'admin@gmail.com' && password === 'admin123') {
            // Autenticación exitosa
            const isAdmin = true; // El usuario es un administrador
            const isLoggedIn = true; // El usuario está logueado
            actualizarHeader(isAdmin, isLoggedIn);
        } else {
            // Autenticación fallida
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });
});

function actualizarHeader(isAdmin, isLoggedIn) {
    // Actualiza el encabezado con el nuevo estado de inicio de sesión y rol
    const header = crearHeader(isAdmin, isLoggedIn);
    const oldHeader = document.querySelector('header');
    oldHeader.replaceWith(header);
}