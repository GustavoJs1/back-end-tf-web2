CREATE TABLE usuario ( 
  idUsuario SERIAL , 
  nome VARCHAR (50)  NOT NULL, 
  senha VARCHAR (20) NOT NULL, 
  email VARCHAR (100) UNIQUE NOT NULL, 
  PRIMARY KEY (idUsuario)
); 
CREATE TABLE servicos ( 
  idServico serial, 
  nomeServiço VARCHAR (100)  NOT NULL, 
  numServiço float (5)  NOT NULL, 
  preco float (5), 
  tempoServiço VARCHAR (100) NOT NULL,
  fk_usuarios_id int,
  PRIMARY KEY (idServico),
  FOREIGN KEY (fk_usuario_id) REFERENCES usuario (idUsuario) ON DELETE CASCADE ON UPDATE CASCADE
); 