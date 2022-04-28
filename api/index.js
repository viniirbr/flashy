const express = require('express');

const app = express();

app.use(express.json())

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Servidor rodando em ' + PORT)
})

app.get('/teste', (req, res) => {
    res.send('hello')
})

module.exports = app;