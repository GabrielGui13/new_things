const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Oi');
})

app.get('/vinicius', (req, res) => {
    res.send('Viado');
})

app.listen(2000, () => {
    console.log('Servidor aberto na porta 2000')
})