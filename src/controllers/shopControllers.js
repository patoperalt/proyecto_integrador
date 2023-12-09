const path = require('path');

module.exports = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Tienda", 
        });
    },
    item: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
        title: "Item", 
    });
    },
    addItem: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'),
    
    cart: (req, res) => {
        res.send('Esta es la vista del CARRITO');
    },
    addToCart: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM al CARRITO'),
}