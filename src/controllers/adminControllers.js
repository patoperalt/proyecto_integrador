const path = require('path');
const { getAll, getOne, create } = require('../models/productModel');
const { log } = require('console');

module.exports = {
    admin: async (req, res) => {

        const data = await getAll();

        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "Admin",
            data
        });
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "Crear item"
        } 
        );
    },
    createItem: async (req, res) => {
        console.log(req.body);
        console.log(req.files);

       const product_schema = {
            product_name: req.body.name,
            product_description: req.body.product_description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount), 
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
        } 
        const result = await create(product_schema)
        console.log(result);

        res.send('Esta es la vista para AGREGAR un nuevo ITEM: ');
    },
    
    editView: async (req, res) => {
        
        const { id } = req.params;

        const [product] = await getOne({ product_id: id});

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar item",
            product
        });
    },
    editItem: (req, res) => res.send('Esta es la vista para IMPACTAR la MODIFICACION un ITEM ESPECIFICO'),
    deleteItem: (req, res) => res.send('Esta es la vista para ELIMINAR un ITEM ESPECIFICO')
}