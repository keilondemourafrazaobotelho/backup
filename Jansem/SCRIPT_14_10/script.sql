
SELECT * FROM cliente;

SELECT * FROM produto;

SELECT * FROM venda;

SELECT nome_cliente,cidade,estado FROM cliente;

SELECT nome_produto,categoria,marca FROM produto;

SELECT data_venda,preco_unitario_venda,forma_pagamento,status_venda FROM venda;

SELECT * FROM cliente WHERE estado = "MG";

SELECT * FROM cliente WHERE estado = "MG" OR estado = "RJ";

/*2,1*/
SELECT * FROM produto
 WHERE marca = "lenovo";

/*2,2*/
SELECT * FROM produto
WHERE marca = 'lenovo' 
OR marca = 'acer' 
LIMIT 0, 25;

/*2,3*/
SELECT nome_produto, categoria, marca, estoque 
FROM produto 
WHERE marca = "lenovo"
OR marca = "acer";

/*2,4*/
SELECT nome_produto, categoria, marca, estoque
FROM produto 
WHERE marca 
IN("lenovo", "lg", "kingston");

/*2,5*/
SELECT * FROM produto
WHERE marca 
IN("dell", "acer", "lg") 
AND estoque < 100;

/* 2,6 */
SELECT nome_produto, categoria, marca, estoque 
FROM produto 
WHERE marca 
IN("lenovo", "dell", "lg") 
AND estoque >= 100;

/* 2,7 */
SELECT * FROM produto 
WHERE marca 
IN("lg", "lenovo", "dell") 
AND estoque < 100
ORDER BY marca ASC;

/*2,8 */
SELECT * FROM produto 
WHERE marca 
IN("Lenovo", "Dell") 
AND estoque > 100 
ORDER BY nome_produto DESC;

/* 3.1 */
SELECT * FROM venda 
WHERE forma_pagamento = "pix";

/* 3.2 */
SELECT data_venda, quantidade, preco_unitario_venda, forma_pagamento, status_venda
FROM venda 
WHERE forma_pagamento 
IN("pix", "boleto", "transferencia");

/* 4.1 */
SELECT cliente.nome_cliente, venda.forma_pagamento 
FROM cliente 
INNER JOIN venda 
ON venda.id_cliente = cliente.id_cliente;

/* 4.2 */
SELECT produto.nome_produto, venda.preco_unitario_venda 
FROM produto 
INNER JOIN venda 
ON venda.id_produto = produto.id_produto;


/* 4.3 */
SELECT produto.nome_produto, cliente.nome_cliente, venda.preco_unitario_venda 
FROM produto 
INNER JOIN venda 
ON venda.id_produto = produto.id_produto
INNER JOIN cliente 
ON cliente.id_cliente = venda.id_cliente;

