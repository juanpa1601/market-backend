//.ENV
require('dotenv').config()
//Paquetes
const mongoose = require('mongoose');
//String de conexión
const DB_URL = process.env.SECREAT_KEY;
//Instanciamos la conexión 
const connectDB = () => mongoose.connect(DB_URL);
mongoose.co
module.exports = { connectDB }
