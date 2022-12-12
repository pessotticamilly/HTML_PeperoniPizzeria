const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { cadastrarPessoa, cadastrarPizza } = require('./bd.js');

app.use(express.static('./components'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + './index.html');
});

app.get('/fazerPedido', (req, res) => {
    res.sendFile(__dirname + './components/FazerPedido/index.html');
});

app.get('/verPedido', (req, res) => {
    res.sendFile(__dirname + './components/VerPedido/index.html');
});

app.get('/sobreNos', (req, res) => {
    res.sendFile(__dirname + './components/SobreNos/index.html');
});

app.get('/buscarPedido', )

app.post("/cadastrarPedido", (req, res) => {
    const { pessoa, pizza } = req.body;

    cadastrarPessoa(pessoa);
    cadastrarPizza(pizza);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});