const valorTotal = document.getElementById("valorTotal");

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

let valorTotalJS = 0;
let valorTamanho = 0;
let valorBorda = 0;
let valorBebida = 0;
let valorTipoEntrega = 0;

function mudarValorTamanho() {

}

function mudarValorBorda() {

}

function mudarValorBebida() {
    if(bebida.value == "Sem bebida"){
        valorBebida = 0;
        mudarValorTotal();
    } 
    
    if(bebida.value == "Coca-Cola 2L" || bebida.value == "Guaraná 2L"){
        valorBebida = 8;
        mudarValorTotal();
    } 
    
    if(bebida.value == "Água sem gás 500mL" || bebida.value == "Água com gás 500mL") {
        valorBebida = 6;
        mudarValorTotal();
    }

    if(bebida.value == "Coca-Cola 350mL" || bebida.value == "Guaraná 350mL") {
        valorBebida = 4;
        mudarValorTotal();
    }

    if(bebida.value == "Del Valle Uva 290mL" || bebida.value == "Del Valle Laranja 290mL") {
        valorBebida = 3;
        mudarValorTotal();
    }
}

function mudarValorTipoEntrega() {

}

function mudarValorTotal() {
    valorTotalJS += valorTamanho + valorBorda +valorBebida + valorTipoEntrega;
    valorTotal.innerText = "Valor total: R$ " + valorTotalJS;
    valorTotalJS = 0
}

const form = document.getElementById("form");
form.addEventListener('submit', confirmarPedido);

function confirmarPedido(e) {
    e.preventDefault()

    if (nome.value == null || email.value == null || telefone.value == null || bairro.value == null || rua.value == null || numero.value == null) {
        alert("Há campos vazios! Preencha todos os campos para fazer um pedido!");
    } else {
        const pessoa = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            bairro: bairro.value,
            rua: rua.value,
            numero: numero.value
        };

        const pizza = {
            tamanho: tamanho.value,
            borda: borda.value,
            bebida: bebida.value,
            tipoEntrega: tipoEntrega.value,
            observacoes: observacoes.value
        }

        localStorage.setItem("Pedido", JSON.stringify(pedido));
        localStorage.setItem("Pizza", JSON.stringify(pizza));
    }
}