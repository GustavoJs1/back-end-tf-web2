import dotenv from "dotenv";
import express from "express";  
import roteadorUsuario from "./src/usuario.js";
import roteadorLogin from "./src/login.js";
;

dotenv.config();
import {
  selectUsuario,
  selectUsuarios,
  insertUsuario,
} from "./db/index.js";

const app = express();              
const port = 3000;                  

app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {       
  res.json({
    nome: "Serviços",     
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {          
  console.log(`Serviço escutando na porta:  ${port}`);
});

