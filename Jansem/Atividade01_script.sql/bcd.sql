CREATE DATABASE controle_vendas;

USE controle_vendas;

CREATE TABLE clientes (

    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    dt_nasc DATE NOT NULL

);

USE controle_vendas;

CREATE TABLE produtos (

    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL (10,2) NOT NULL,
    qtd INT NOT NULL

);

CREATE TABLE compras (

    id_compra INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    dt_compra  DATE NOT NULL

);

USE controle_vendas;

ALTER TABLE compras
ADD CONSTRAINT fk_compra_cliente
FOREIGN KEY (id_cliente)
REFERENCES clientes(id_cliente);

USE controle_vendas;

ALTER TABLE compras
ADD CONSTRAINT fk_compra_produto
FOREIGN KEY (id_produto)
REFERENCES produtos(id_produto);

ALTER TABLE produtos
ADD CONSTRAINT uk_produto_unico UNIQUE (produto);

ALTER TABLE clientes 
ADD CONSTRAINT uk_email_unico UNIQUE (email);

USE controle_vendas;

INSERT INTO clientes(nome_cliente, email, telefone)
VALUES("Jorge Jesus", "j.jesus@gmail.com", "19998000000")


INSERT INTO clientes(nome_cliente, email, telefone)
VALUES("Gabriel Marques", "g.marques@gmail.com", "19998000002")


INSERT INTO clientes(nome_cliente, email, telefone)
VALUES("Pedro Henrique", "p.henrique@gmail.com", "19998000001");

USE controle_vendas;

INSERT INTO produtos(produto, preco, qtd)
VALUES("Monitor", 500.750, 5);

INSERT INTO produtos(produto, preco, qtd)
VALUES("Controle", 40, 100);

INSERT INTO produtos(produto,  preco, qtd)
VALUES("Bicicleta ", 1.200, 500);

SELECT * FROM produtos;

USE controle_vendas;

INSERT INTO compras(id_cliente, id_produto, dt_compra)
VALUES(1, 1, "2026-09-25");

INSERT INTO compras(id_cliente, id_produto, dt_compra)
values(3, 2, "2022-09-25");

INSERT INTO compras(id_cliente, id_produto, dt_compra)
values(2, 3, "2002-11-23");

SELECT * FROM compras;

USE controle_vendas;

UPDATE produtos 
SET preco = 550.00 
WHERE id_produto = 1;

UPDATE clientes 
SET telefone = "19999999999" 
WHERE nome_cliente = "Jorge Jesus";

DELETE FROM produtos 
WHERE id_produto = 2;