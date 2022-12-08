import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "peperoni_pizzeira",
});

const sql = connection.promise();


export const buscarEndereco = async () => {
    const rows = await sql.query("SELECT * FROM endereco");
    console.log(rows);
};

export const cadastrarPessoa = async (pessoa) => {
  await sql.execute("INSERT INTO pessoa VALUES (?, ?, ?, ?, ?)", [null, pessoa.nome, pessoa.sobrenome, pessoa.cpf, pessoa.nascimento]);
};

export const cadastrarEndereco = async (endereco) => {
  await sql.execute("INSERT INTO endereco VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [null, endereco.cep, endereco.numero, endereco.complemento, endereco.rua, endereco.bairro, endereco.cidade, endereco.estado]);
};

export const cadastrarPizza = async (pizza) => {
  await sql.execute("INSERT INTO pizza VALUES (?, ?, ?, ?, ?, ?)", [null, pizza.tamanho, pizza.borda, pizza.bebida, pizza.tipoEntrega, pizza.observacoes]);
};