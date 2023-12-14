const { conn } = require('../config/conn');

const getAll = async () => {
 
    try {
        const [rows] = await conn.query('SELECT * FROM licence;');
        return rows;
    }   catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }   finally {
        conn.releaseConnection();
    }
}


module.exports = {
    getAll,
}