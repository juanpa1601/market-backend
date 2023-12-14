//Paquetes
const express = require('express');
const app = express();

//controladores
const itemController = require('./controllers/itemController');
//Puerto
const PORT = process.env.PORT;

//Instanciamos 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.use('/api', itemController);


