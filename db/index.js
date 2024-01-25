import pkg from "pg";
const { Pool } = pkg;

async function connect() {
    const pool = new Pool({
      connectionString: process.env.URL_BD,
    });
    return pool.connect();
  }

  async function selectUsuarios() {    
    
    const client = await connect();
    const res = await client.query("SELECT nome, email FROM usuario");
    return res.rows;
  }

  async function selectUsuario(nome) {
    const client = await connect();
    const query = "SELECT nome, email FROM usuario WHERE nome ILIKE $1";
    const usuario = [`${nome}%`];
    const res = await client.query(query, usuario);
    return res.rows;
}

  async function insertUsuario(data) {
    const client = await connect();
    const query = "INSERT INTO usuario (nome,senha,email,contato) VALUES ($1,$2,$3,$4) ";
    const usuario = [data.nome, data.senha, data.email];
    await client.query(query, usuario);
  }
  
  async function deleteUsuario(id) {
    const client = await connect();
    const query = "DELETE FROM usuario WHERE idusuario = $1";
    await client.query(query, [id]);
  }

  async function updateUsuario(data) {
    const client = await connect();
    const query =
      "UPDATE usuario SET nome = $1, email = $2, senha = $3, contato = $4 WHERE idusuario = $5";
    const usuario = [data.nome, data.email, data.senha, data.idusuario];
    await client.query(query, usuario);
  }

  async function selectUsuarioId(id) {
    const client = await connect();
    const query = "SELECT * FROM usuario, usuario WHERE idusario ==  $1";
    const usuario = id;
    const res = await client.query(query, usuario);
    return res.rows;
  }


  async function autenticarUsuario(email, senha) {
    const client = await connect();
    const query = "SELECT * FROM usuario WHERE email = $1 AND senha = $2";
    const usuario = [email, senha];
    const res = await client.query(query, usuario);
    return res.rows[0];
  }

    
  export { selectUsuarios,  selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario, selectUsuarioId};