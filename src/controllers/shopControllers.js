const path = require('path');
const { getAll, getOne } = require('../models/productModel');
const { getAllLicence } = require('../models/licenceModel');
const { getAllProducts } = require('../models/productModel');


module.exports = {

    shop: async (req, res) => {

        const data = await getAll();

           res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "Tienda", 
            data
            });

    },
    item: async (req, res) => {
        const { id } = req.params;
        
        const [item] = await getOne({ product_id: id});
        console.log(item);
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
        title: "Item", 
        item
    });
    },
    addItem: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'),
    
    cart: (req, res) => {
        res.send('Esta es la vista del CARRITO');
    },
    addToCart: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM al CARRITO'),
}