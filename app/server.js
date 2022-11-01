const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./components'));
// app.use(express.static(__dirname + '/components/FazerPedido/style.css'));
// app.use(express.static(__dirname + '/components/VerPedido/style.css'));
// app.use(express.static(__dirname + '/components/SobreNos/style.css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fazerPedido', (req, res) => {
    res.sendFile(__dirname + '/components/FazerPedido/index.html');
});

app.get('/verPedido', (req, res) => {
    res.sendFile(__dirname + '/components/VerPedido/index.html');
});

app.get('/sobreNos', (req, res) => {
    res.sendFile(__dirname + '/components/SobreNos/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});