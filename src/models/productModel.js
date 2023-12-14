const { conn } = require('../config/conn');

const getAll = async () => {
 
    try {
        const [rows] = await conn.query('SELECT * FROM product;');
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

//    const [rows] = await conn.query('SELECT * FROM product;');
   
//    return rows;
//   }

module.exports = {
    getAll
}