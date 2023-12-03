function crearFooter(isAdmin) {
    const footer = document.createElement('footer');
    
    footer.innerHTML = `
    <nav class="navbar container">
    <ul class="navbar_item">
        <li class="navbar__item">
            <a class="navbar__link" href="/pages/Shop/shop.html">SHOP</a>
        </li>
        <li class="navbar__item">
            <a class="navbar__link" href="/pages/admin/register.html">REGISTRARSE</a>
        </li>
        <li class="navbar__item">
            <a class="navbar__link" href="/pages/admin/login.html">LOGIN</a>
        </li>
        <li class="navbar__item">
            <a class="navbar__link" href="/pages/contacto.html">CONTACTO</a>
        </li>
    </ul>
<picture>
   <img  src="./MULTIMEDIA/branding/isotype.svg" alt="isotipo">
</picture>
</nav>


<p class="footer_copy">All rights reserved 2023 - Funkoshop &copy;</p>
    `;

    return footer;
}

// Simula el estado de inicio de sesión y rol
const isAdmin = false; // Cambia a 'false' si no es un usuario admin
const footer = crearFooter(isAdmin);
document.body.appendChild(footer);