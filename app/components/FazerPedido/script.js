const form = document.getElementById("form");
form.addEventListener('submit', confirmarPedido);

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

    console.log(pessoa);

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

    console.log(pizza);
}