const pedido = JSON.parse(localStorage.getItem("Pedido"));

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const bairro = document.getElementById("bairro");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");

const tamanho = document.getElementById("tamanho");
const sabores = document.getElementById("sabores");
const borda = document.getElementById("borda");
const bebida = document.getElementById("bebida");
const tipoEntrega = document.getElementById("tipoEntrega");
const observacoes = document.getElementById("observacoes");

nome.innerText = `${pedido.nome}`;
email.innerText = `${pedido.email}`;
telefone.innerText = `${pedido.telefone}`;
bairro.innerText = `${pedido.bairro}`;
rua.innerText = `${pedido.rua}`;
numero.innerText = `${pedido.numero}`;

tamanho.innerText = `${pedido.tamanho}`;
sabores.innerText = `${pedido.sabores}`;
borda.innerText = `${pedido.borda}`;
bebida.innerText = `${pedido.bebida}`;
tipoEntrega.innerText = `${pedido.tipoEntrega}`;
observacoes.innerText = `${pedido.observacoes}`;