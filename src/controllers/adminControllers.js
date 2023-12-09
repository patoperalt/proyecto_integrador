const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'));
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'));
    },
    createItem: (req, res) => res.send('Esta es la vista para AGREGAR un nuevo ITEM'), 
    editView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'));
    },
    editItem: (req, res) => res.send('Esta es la vista para IMPACTAR la MODIFICACION un ITEM ESPECIFICO'),
    deleteItem: (req, res) => res.send('Esta es la vista para ELIMINAR un ITEM ESPECIFICO')
}