const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const cpf = document.getElementById("cpf");
const nascimento = document.getElementById("nascimento");

const cep = document.getElementById("cep");
const numero = document.getElementById("numero");
const complemento = document.getElementById("complemento");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

const tamanho = document.getElementById("tamanho");
const borda = document.getElementById("borda");
const bebida = document.getElementById("bebida");
const tipoEntrega = document.getElementById("tipoEntrega");
const observacoes = document.getElementById("observacoes");

const pValorTotal = document.getElementById("valorTotal");
const divSabores = document.getElementById("sabores");

const cancelar = document.getElementById("cancelar");
const form = document.getElementById("form");

let listaSabores = [];

let valorTamanho = 0.00;
let quantidadeSabores = 0;
let valorBorda = 0.00;
let valorBebida = 0.00;
let valorTipoEntrega = 0.00;
let valorTotal = 0.00;
let pValorTotalLocalStorage = 0.00;

function criarSelectSabores() {
    switch (tamanho.value) {
        case "Broto":
            quantidadeSabores = 1;
            break;

        case "Pequena":
            quantidadeSabores = 2;
            break;

        case "Média":
            quantidadeSabores = 3;
            break;

        case "Grande":
            quantidadeSabores = 3;
            break;

        case "GG":
            quantidadeSabores = 4;
            break;

        case "Gigante":
            quantidadeSabores = 4;
            break;

        default:
            quantidadeSabores = 0;
            break;
    };

    mudarValorTamanho();
    atualizarSelectSabores();
};

function atualizarSelectSabores() {
    let htmlText = "";

    for (let i = 1; i <= quantidadeSabores; i++) {
        htmlText += `<select id="sabor${i}">
        <option selected>Selecionar sabor</option>
        <option>Alho e óleo</option>
        <option>Bacon</option>
        <option>Brócolis</option>
        <option>Calabresa</option>
        <option>Cinco queijos</option>
        <option>Doritos</option>
        <option>Frango com catupiry</option>
        <option>Kartoffel</option>
        <option>Lombo com cheddar</option>
        <option>Marguerita</option>
        <option>Mussarela</option>
        <option>Palmito</option>
        <option>Peito de peru</option>
        <option>Portuguesa</option>
        <option>Quatro queijos</option>
        <option>Rúcula com tomate seco</option>
        <option>Strogonoff de carne</option>
        <option>Strogonoff de frango</option>
        <option>Banana nevada</option>
        <option>Chocolate branco</option>
        <option>Chocolate preto</option>
            <option>Confete</option>
            <option>Sensação</option>
            </select>`;
    };

    divSabores.innerHTML = htmlText;
};

function buscarSabores() {
    for (let i = 1; i <= quantidadeSabores; i++) {
        if (document.getElementById(`sabor${i}`) !== null) {
            listaSabores.push(document.getElementById(`sabor${i}`).value);
        };
    };

    console.log(listaSabores);
    return listaSabores;
};

function mudarValorTamanho() {
    if (tamanho.value == "Selecionar tamanho") {
        valorTamanho = 0.00;
        mudarValorTotal();
    };

    if (tamanho.value == "Broto") {
        valorTamanho = 15.00;
        mudarValorTotal();
    };

    if (tamanho.value == "Pequena") {
        valorTamanho = 30.00;
        mudarValorTotal();
    };

    if (tamanho.value == "Média") {
        valorTamanho = 35.00;
        mudarValorTotal();
    };

    if (tamanho.value == "Grande") {
        valorTamanho = 40.00;
        mudarValorTotal();
    };

    if (tamanho.value == "GG") {
        valorTamanho = 45.00;
        mudarValorTotal();
    };


    if (tamanho.value == "Gigante") {
        valorTamanho = 50.00;
        mudarValorTotal();
    };
};

function mudarValorBorda() {
    if (borda.value == "Sem borda") {
        valorBorda = 0.00;
        mudarValorTotal();
    };

    if (borda.value == "Cheddar" || borda.value == "Catupiry") {
        valorBorda = 4.00;
        mudarValorTotal();
    };

    if (borda.value == "Chocolate preto" || borda.value == "Chocolate branco") {
        valorBorda = 3.00;
        mudarValorTotal();
    };
};

function mudarValorBebida() {
    if (bebida.value == "Sem bebida") {
        valorBebida = 0.00;
        mudarValorTotal();
    };

    if (bebida.value == "Coca-Cola 2L" || bebida.value == "Guaraná 2L") {
        valorBebida = 8.00;
        mudarValorTotal();
    };

    if (bebida.value == "Água sem gás 500mL" || bebida.value == "Água com gás 500mL") {
        valorBebida = 6.00;
        mudarValorTotal();
    };

    if (bebida.value == "Coca-Cola 350mL" || bebida.value == "Guaraná 350mL") {
        valorBebida = 4.00;
        mudarValorTotal();
    };

    if (bebida.value == "Del Valle Uva 290mL" || bebida.value == "Del Valle Laranja 290mL") {
        valorBebida = 3.50;
        mudarValorTotal();
    };
};

function mudarValorTipoEntrega() {
    if (tipoEntrega.value == "Selecionar tipo de entrega" || tipoEntrega.value == "Retirada no balcão") {
        valorTipoEntrega = 0.00;
        mudarValorTotal();
    };

    if (tipoEntrega.value == "Entrega em casa") {
        valorTipoEntrega = 8.00;
        mudarValorTotal();
    };
};

function mudarValorTotal() {
    valorTotal += valorTamanho + valorBorda + valorBebida + valorTipoEntrega;
    pValorTotal.innerText = "Valor total: R$ " + valorTotal;
    pValorTotalLocalStorage = valorTotal;
    valorTotal = 0.00;
};

function limparValorTotal() {
    pValorTotal.innerText = "Valor total: R$ 0";
};

function verPedido() {
    window.location.href = "http://127.0.0.1:5500/app/components/VerPedido/index.html";
};

const pegarUltimoId = async () => {
    fetch('http://localhost:3000/buscarEndereco')
};

function confirmarPedido(e) {
    e.preventDefault();

    const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        cpf: cpf.value,
        nascimento: nascimento.value,
        cep: cep.value,
        numero: numero.value,
        complemento: complemento.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value
    };

    const pizza = {
        tamanho: tamanho.value,
        sabor01: buscarSabores()[0],
        sabor02: buscarSabores()[1],
        sabor03: buscarSabores()[2],
        sabor04: buscarSabores()[3],
        borda: borda.value,
        bebida: bebida.value,
        tipoEntrega: tipoEntrega.value,
        observacoes: observacoes.value,
        pValorTotal: pValorTotalLocalStorage
    };

    if (tamanho.value != "Selecionar tamanho") {
        if (tipoEntrega.value != "Selecionar tipo de entrega") {
            fetch('http://localhost:3000/cadastrarPedido', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ pessoa, pizza })
            });

            // verPedido();
        } else {
            alert("Escolha o tipo de entrega!");
        };
    } else {
        alert("Escolha o tamanho da pizza!");
    };
};

tamanho.addEventListener('change', criarSelectSabores);
borda.addEventListener('change', mudarValorBorda);
bebida.addEventListener('change', mudarValorBebida);
tipoEntrega.addEventListener('change', mudarValorTipoEntrega);

cep.addEventListener("blur", async (e) => {
    e.preventDefault();

    const data = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`, {
        method: "GET",
        mode: "cors",
        cache: "default"
    }).then(res => res.json());

    rua.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
});

cancelar.addEventListener('click', limparValorTotal);
form.addEventListener('submit', confirmarPedido);

listaSabores.length = 0;