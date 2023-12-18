const path = require('path');
const { getAll, getOne, create, deleteOne } = require('../models/productModel');

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
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount), 
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: '/products/'+req.files[0].filename,
            image_back: '/products/'+req.files[1].filename,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
        } 
        await create([Object.values(product_schema)]);

        res.redirect('/admin');
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
    
    
    deleteItem: async (req, res) => {
        const { id } = req.params;

        await deleteOne ({ product_id: id});

        res.redirect('/admin');
    }
};