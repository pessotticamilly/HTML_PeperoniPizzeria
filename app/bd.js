const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "peperoni_pizzeria",
});

const sql = connection.promise();

const cadastrarPessoa = async (pessoa) => {
  await sql.execute("INSERT INTO pessoa VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [null, pessoa.nome, pessoa.sobrenome, pessoa.cpf, pessoa.nascimento, pessoa.cep, pessoa.numero, pessoa.complemento, pessoa.rua, pessoa.bairro, pessoa.cidade, pessoa.estado]);
};

const cadastrarPizza = async (pizza) => {
  await sql.execute("INSERT INTO pizza VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [null, pizza.tamanho, pizza.sabor01, pizza.sabor02, pizza.sabor03, pizza.sabor04, pizza.borda, pizza.bebida, pizza.tipoEntrega, pizza.observacoes]);
};

module.exports = {
  cadastrarPessoa,
  cadastrarPizza
};