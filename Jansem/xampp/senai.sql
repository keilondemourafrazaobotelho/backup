CREATE DATABASE db_senai;

USE db_senai;

CREATE TABLE clientes(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dt_nasc DATE NOT NULL

);

USE db_senai;

CREATE TABLE produtos(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL (10,2) NOT NULL
    qtd INT NOT NULL
);

CREATE TABLE vendas(
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    data_entrada DATE NOT NULL
);

USE db_senai;


/* Atribuição de chave estrangeira do cliente
--Criação de chave estrangeira (FK) */

ALTER TABLE venda
ADD CONSTRAINT fk_venda_cliente
FOREIGN KEY (id_cliente)
REFERENCES cliente(id_cliente);

USE db_senai;

ALTER TABLE venda
ADD CONSTRAINT fk_venda_produto
FOREIGN KEY (id_produto)
REFERENCES produto(id_produto);

ALTER TABLE produto
ADD CONSTRAINT uk_produto_unico UNIQUE (produto);

ALTER TABLE cliente 
ADD CONSTRAINT uk_email_unico UNIQUE (email);

USE db_senai;

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES("Michael Jackson", "m.jackson@gmail.com", "1920-03-22");

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES("Julião P.P", "mh.tinho@gmail.com", "1967-03-22");

INSERT INTO cliente(nome_cliente, email, dt_nasc)
VALUES("Joardson", "joardsonsousa@gmail.com", "2009-06-05");

USE db_senai;

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES("Notebook Dell", "2026-01-22", 500.45, 5);

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES("Sabão em pedra", "2026-10-23", 5.39, 100);

INSERT INTO produto(produto, dt_entrega, preco, qtd)
VALUES("Bicicleta Gamer", "2026-09-01", 6.80, 500);

SELECT * FROM produtos;

USE db_senai;

INSERT INTO venda(id_cliente, id_produto, data_entrada)
VALUES(1, 1, "2026-09-25");

INSERT INTO venda(id_cliente, id_produto, data_entrada)
values(3, 2, "2022-09-25");

INSERT INTO venda(id_cliente, id_produto, data_entrada)
values(2, 3, "2002-11-23");

SELECT * FROM venda;

/* Atribuição de chave estrangeira do cliente
--Criação de chave estrangeira (FK) */


