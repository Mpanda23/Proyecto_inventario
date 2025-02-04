const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

const puerto = 3000;

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PUERTO
});

app.listen(puerto, () => {
    console.log(`ejecutandose correctamente en el servidor ${puerto}`);
});

conexion.connect(error => {
    if (error) throw error;
    console.log('Conexion a la bd exitosa');
});

app.get('/', (req, res) => {
    res.send('API');
});

app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuario';
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json('No se encontraron Usuarios')
        }
    });
});

app.get('/negocios', (req, res) => {
    const query = 'SELECT * FROM negocio';
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json('No se encontraron Negocios')
        }
    });
});

app.get('/locales', (req, res) => {
    const query = "SELECT * FROM locales";
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json("No se encontraron Locales");
        }
    });
});

app.get('/categorias', (req, res) => {
    const query = "SELECT * FROM categorias";
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json("No se encontraron Categorias");
        }
    });
});

app.get('/compras', (req, res) => {
    const query = "SELECT * FROM compra";
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json("No se encontraron Compras")
        }
    });
});

app.get('/ventas', (req, res) => {
    const query = "SELECT * FROM ventas";
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json("No se encontraron Ventas");
        }
    });
});

app.get('/productos', (req, res) => {
    const query = "SELECT * FROM producto";
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error, message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json("No se encontraron Productos")
        }
    });
});




// -------------------------------REGISTRO DE DATOS------------------------------------------


app.post('/usuarios/agregar', (req, res) => {
    const usuarios = {
        id_neg: req.body.id_neg,
        nombre_usu: req.body.nombre_usu,
        apellido_usu: req.body.apellido_usu,
        correo_usu: req.body.correo_usu,
        contrasena_usu: req.body.contrasena_usu,
        numero_usu: req.body.numero_usu
    }

    const query = 'INSERT INTO usuario SET ?';
    conexion.query(query, usuarios, (error) => {
        if (error) return console.error(error, message);

        res.json("Se ingreso correctamente el Usuario")
    });
});

app.post('/negocios/agregar', (req, res) => {
    const negocios = {
        nombre_neg: req.body.nombre_neg,
        direccion_neg: req.body.direccion_neg,
        numero_neg: req.body.numero_neg
    }

    const query = 'INSERT INTO negocio SET ?';
    conexion.query(query, negocios, (error) => {
        if (error) return console.error(error, message);

        res.json("Se inserto correctamente el Negocio")
    });
});

app.post('/locales/agregar', (req, res) => {
    const locales = {
        id_neg: req.body.id_neg,
        id_prod: req.body.id_prod,
        nombre_local: req.body.nombre_local,
        direccion_local: req.body.direccion_local,
        numero_local: req.body.numero_local,
        cantidad_prod: req.body.cantidad_prod
    }

    const query = 'INSERT INTO locales SET ?';
    conexion.query(query, locales, (error) => {
        if (error) return console.error(error, message);

        res.json("Se inserto correctamente el Local");
    });
});

app.post('/categorias/agregar', (req, res) => {
    const categorias = {
        id_neg: req.body.id_neg,
        nombre_cat: req.body.nombre_cat
    }

    const query = 'INSERT INTO categorias SET ?';
    conexion.query(query, categorias, (error) => {
        if (error) return console.error(error, message);

        res.json("Se agrego correctamente la Categoria");
    });
});

app.post('/compras/agregar', (req, res) => {
    const compras = {
        id_neg: req.body.id_neg,
        id_prod: req.body.id_prod,
        id_local: req.body.id_local,
        valor_compra: req.body.valor_compra,
        cantidad_prod: req.body.cantidad_prod
    }

    const query = 'INSERT INTO compra SET ?';
    conexion.query(query, compras, (error) => {
        if (error) return console.error(error, message);

        res.json("Se agrego correctamente la Compra");
    });
});

app.post('/ventas/agregar', (req, res) => {
    const ventas = {
        id_neg: req.body.id_neg,
        id_usu: req.body.id_usu,
        id_prod: req.body.id_prod,
        valor_venta: req.body.valor_venta,
        cantidad_prod: req.body.cantidad_prod
    }

    const query = 'INSERT INTO ventas SET ?';
    conexion.query(query, ventas, (error) => {
        if (error) console.error(error, message);

        res.json("Se inserto correctamente la Venta");
    });
});

app.post('/productos/agregar', (req, res) => {
    const productos = {
        id_neg: req.body.id_neg,
        id_cat: req.body.id_cat,
        nombre_prod: req.body.nombre_prod,
        descripcion_prod: req.body.descripcion_prod,
        valor_compra: req.body.valor_compra,
        valor_venta: req.body.valor_venta,
        cantidad: req.body.cantidad
    }

    const query = 'INSERT INTO producto SET ?';
    conexion.query(query, productos, (error) => {
        if (error) return console.error(error, message);

        res.json("Se registro correctamente el producto");
    });
});



