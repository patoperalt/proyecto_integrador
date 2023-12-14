const path = require('path');
const { getAll, getOne } = require('../models/productModel');

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
    createItem: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'), 
    
    editView: async (req, res) => {
        
        const { id } = req.params;

        const [product] = await getOne(id)

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "Editar item",
            product
        });
    },
    editItem: (req, res) => res.send('Esta es la vista para IMPACTAR la MODIFICACION un ITEM ESPECIFICO'),
    deleteItem: (req, res) => res.send('Esta es la vista para ELIMINAR un ITEM ESPECIFICO')
}