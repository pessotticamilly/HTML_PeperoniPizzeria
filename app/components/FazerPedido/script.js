const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const bairro = document.getElementById("bairro");;
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");

const tamanho = document.getElementById("tamanho");
const borda = document.getElementById("borda");
const bebida = document.getElementById("bebida");
const tipoEntrega = document.getElementById("tipoEntrega");
const observacoes = document.getElementById("observacoes");

tamanho.addEventListener('change', mudarValorTamanho, criarInputsSabores);
borda.addEventListener('change', mudarValorBorda);
bebida.addEventListener('change', mudarValorBebida);
tipoEntrega.addEventListener('change', mudarValorTipoEntrega);

const valorTotal = document.getElementById("valorTotal");

let valorTotalJS = 0.00;
let valorTamanho = 0.00;
let valorBorda = 0.00;
let valorBebida = 0.00;
let valorTipoEntrega = 0.00;

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

const quantidadeSabores = 0;

function criarInputsSabores() {
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
    valorTotalJS += valorTamanho + valorBorda + valorBebida + valorTipoEntrega;
    valorTotal.innerText = "Valor total: R$ " + valorTotalJS;
    valorTotalJS = 0.00;
};

const cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', limparInnerText);

function limparInnerText() {
    valorTotal.innerText = "Valor total: R$ 0";
}

const form = document.getElementById("form");
form.addEventListener('submit', confirmarPedido);

function confirmarPedido(e) {
    e.preventDefault();

    if (tamanho.value != "Selecionar tamanho") {
        if (tipoEntrega.value != "Selecionar tipo de entrega") {
            const pedido = {
                nome: nome.value,
                email: email.value,
                telefone: telefone.value,
                bairro: bairro.value,
                rua: rua.value,
                numero: numero.value,
                tamanho: tamanho.value,
                borda: borda.value,
                bebida: bebida.value,
                tipoEntrega: tipoEntrega.value,
                observacoes: observacoes.value,
                valorTotal: valorTotalJS
            };

            console.log(pedido);

            localStorage.setItem("Pedido", JSON.stringify(pedido));
        } else {
            alert("Escolha o tipo de entrega!");
        };
    } else {
        alert("Escolha o tamanho da pizza!");
    };
};