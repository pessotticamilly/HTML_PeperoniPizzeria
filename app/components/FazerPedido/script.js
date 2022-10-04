const form = document.getElementById("form");
form.addEventListener('submit', confirmarPedido);

const confirmar = document.getElementById("confimar");
confirmar.addEventListener('click', window.location.href="http://127.0.0.1:5500/app/components/VerPedido/index.html")

function confirmarPedido(e) {
    e.preventDefault()

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const bairro = document.getElementById("bairro").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;

    const pessoa = {
        nome: nome,
        email: email,
        telefone: telefone,
        bairro: bairro,
        rua: rua,
        numero: numero
    };

    const tamanho = document.getElementById("tamanho").value;
    const borda = document.getElementById("borda").value;
    const bebida = document.getElementById("bebida").value;
    const tipoEntrega = document.getElementById("tipoEntrega").value;
    const observacoes = document.getElementById("observacoes").value;

    const pizza = {
        tamanho: tamanho,
        borda: borda,
        bebida: bebida,
        tipoEntrega: tipoEntrega,
        observacoes: observacoes
    }

    localStorage.setItem("Pessoa", JSON.stringify(pessoa));
    localStorage.setItem("Pizza", JSON.stringify(pizza));
}