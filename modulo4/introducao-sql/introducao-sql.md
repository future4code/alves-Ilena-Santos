### Exercicio 1
#### a)
VARCHER (n) - strings de no máximo n caracteres
DATE - data
PRIMARY KEY- identifica unicamente uma linha da tabela.
NOT NULL - não aceita nulos

#### b)
Show databese indica o schema em que a tabela se encontra.
e show tables todas as tabelas de um schema 

#### c)
Mostra as configurações de type, key... de cada campo da tabela Actor.

### Exercicio 2
#### a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
Values("002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

#### b)
Porque o id foi configurado como primary key, logo não pode ter dois elementos com o mesmo id.

#### c) 
Falta adicionar birth_date e gender.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#### d) 
Falta adicionar a propriedade name.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

#### e)
A data tá sem aspas ""
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercicio 3

#### a)
SELECT * from Actor WHERE gender = "female"

#### b)
SELECT salary from Actor WHERE name = "Tony Ramos"

#### c)
Retorna a tabela vazia pois não existe alguém com esse genero.

#### d)
SELECT * from Actor WHERE salary < 500000

#### e)
Não existe uma coluna com o nome "nome"

### Exercicio 4
SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "J%") AND  salary > 300000;

#### a)
Seleciona os atores cujo nome começa com as letrar A ou J e tenham salário maior que 300000 reais.

#### b)
SELECT * FROM Actor WHERE (name not LIKE "A%") AND  salary > 350000;

#### c)
SELECT * FROM Actor WHERE name LIKE "%g%";

#### d)
SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND  salary between 350000 and 900000;


### Exercicio 5
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
	synopsis text NOT NULL,
    release_date DATE NOT NULL,
    score int NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, score)
VALUES(
  "001", 
  "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são 
 atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);

INSERT INTO Movie (id, title, synopsis, release_date, score)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
 que só quer saber de farras e jogatina nas boates. 
 A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);

INSERT INTO Movie (id, title, synopsis, release_date, score)
VALUES(
  "004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar 
    e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador 
    Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

select * from Movie;

### Exercicio 6
#### a)
SELECT id,title,score from Movie WHERE id = "001"

#### b)
SELECT * from Movie WHERE title = "Deus é Brasileiro"

#### c)
SELECT id,title,synopsis from Movie WHERE score >= 7

### Exercicio 7
#### a)
SELECT * FROM Movie WHERE title LIKE "%vida%";

#### b)
SELECT * FROM Movie WHERE title LIKE "%bra%" or synopsis LIKE "%bra%";

#### c)
SELECT * FROM Movie WHERE release_date < curdate();

#### d)
SELECT * FROM Movie WHERE  release_date < curdate() and ( title LIKE "%bra%" or synopsis LIKE "%bra%") and score > 7 ;
