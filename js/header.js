function crearHeader(isAdmin, isLoggedIn) {
    const header = document.createElement('header');

    header.innerHTML = `
        <!-- INICIO HEADER -->
        <nav class="navbar container">
            <picture class="navbar__logo">
                <a href="/index.html">
                    <img src="../../MULTIMEDIA/branding/logo_light_horizontal.svg" alt="Logotipo Marca Funko" />
                </a>
            </picture>
            <ul class="navbar__menu">
                ${isLoggedIn ? `
                    <!-- Admin submenus -->
                    <li class="navbar__item">
                        <a class="navbar__link" href="/pages/shop/shop.html">Ver Tienda</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/pages/admin/admin.html">Admin</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/pages/admin/logout.html">Salir</a>
                    </li>
                ` : `
                    <li class="navbar__item with-submenu">
                        <a class="navbar__link with-icon" href="/pages/Shop/shop.html">SHOP <iconify-icon icon="mdi:chevron-down"></iconify-icon></a>
                        <ul class="submenu">
                            <li class="submenu__item">
                                <a href="/pages/shop/funkos.html" class="submenu__link">Funkos</a>
                            </li>
                            <li class="submenu__item">
                                <a href="/pages/shop/remeras.html" class="submenu__link">Remeras</a>
                            </li>
                            <li class="submenu__item">
                                <a href="/pages/shop/llaveros.html" class="submenu__link">Llaveros</a>
                            </li>
                        </ul>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/pages/Shop/contacto.html">CONTACTO</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__link" href="/pages/admin/login.html">LOGIN</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__cart" href="/pages/Shop/cart.html">
                            <img src="/MULTIMEDIA/icons/cart-icon.svg" alt="">
                        </a>
                    </li>
                `}
            </ul>
        </nav>
        <!-- FIN HEADER -->
    `;

    return header;
}

window.addEventListener('DOMContentLoaded', function () {
    const isAdmin = false; // Cambia a 'false' si no es un administrador
    const isLoggedIn = false; // Cambia a 'true' si el usuario está logueado
    const header = crearHeader(isAdmin, isLoggedIn);
    document.body.insertBefore(header, document.body.firstChild);
});