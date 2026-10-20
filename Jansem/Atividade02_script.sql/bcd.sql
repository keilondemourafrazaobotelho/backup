CREATE DATABASE db_library;

USE db_library;

CREATE TABLE alunos (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL
);

CREATE TABLE livros (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano_publicacao INT NOT NULL
);

CREATE TABLE emprestimos (
    id_emprestimos INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    id_livro INT NOT NULL,
    dt_emprestimo DATE NOT NULL,
    dt_devolucao DATE NOT NULL
);

USE db_library;


ALTER TABLE emprestimos
ADD CONSTRAINT fk_emprestimos_aluno_id
FOREIGN KEY (id_aluno)
REFERENCES alunos(id_aluno);

USE db_library;

ALTER TABLE emprestimos
ADD CONSTRAINT fk_emprestimos_livro
FOREIGN KEY (id_livro)
REFERENCES livros(id_livro);

ALTER TABLE livros
ADD CONSTRAINT uk_titulo_unico UNIQUE (titulo);

ALTER TABLE alunos 
ADD CONSTRAINT uk_email_unico UNIQUE (email);

USE db_library;

INSERT INTO alunos(nome_aluno, email, curso)
VALUES("Bruno", "b.runo@gmail.com", "engenharia de software");


INSERT INTO alunos(nome_aluno, email, curso)
VALUES("Giovani", "g.giovani@gmail.com", "operações de software");


INSERT INTO alunos(nome_aluno, email, curso)
VALUES("Pedro Henrique", "p.henrique@gmail.com", "analise de software");

USE db_library;

INSERT INTO livros(titulo, autor, ano_publicacao)
VALUES("Dom Casmurro", "Machado de Assis", 1899);

INSERT INTO livros(titulo, autor, ano_publicacao)
VALUES("1984", "George Orwell", 1948);

INSERT INTO livros(titulo, autor, ano_publicacao)
VALUES("O Senhor dos Anéis", "J.R.R. Tolkein", 1954);

SELECT * FROM livros;

USE db_library;

INSERT INTO emprestimos(id_aluno, id_livro, dt_emprestimo, dt_devolucao)
VALUES(1, 1, "2023-09-25", "2023-10-25");

INSERT INTO emprestimos(id_aluno, id_livro, dt_emprestimo, dt_devolucao)
VALUES(2, 2, "2023-09-25", "2023-10-25");

INSERT INTO emprestimos(id_aluno, id_livro, dt_emprestimo, dt_devolucao)
VALUES(3, 3, "2023-09-25", "2023-10-25");

SELECT * FROM emprestimos;

USE db_library;

UPDATE livros 
SET ano_publicacao = 1950 
WHERE id_livro = 1;

UPDATE alunos 

SET curso = "engenharia civil" 
WHERE id_aluno = 1;

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM emprestimos WHERE id_livro = 2;

DELETE FROM livros WHERE id_livro = 2;

