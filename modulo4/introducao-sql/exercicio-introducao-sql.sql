CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
show databases;
show tables;
describe Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
Values("002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

select * from Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT * from Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND  salary > 300000;
SELECT * FROM Actor WHERE (name not LIKE "A%") AND  salary > 350000;
SELECT * FROM Actor WHERE name LIKE "%g%" ;
SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND  salary between 350000 and 900000;

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

SELECT id,title,score from Movie WHERE id = "001";
SELECT * from Movie WHERE title = "Deus é Brasileiro";
SELECT id,title,synopsis from Movie WHERE score >= 7;
SELECT * FROM Movie WHERE title LIKE "%vida%";
SELECT * FROM Movie WHERE title LIKE "%bra%" or synopsis LIKE "%bra%";
SELECT * FROM Movie WHERE release_date < curdate();
SELECT * FROM Movie WHERE  release_date < curdate() and ( title LIKE "%bra%" or synopsis LIKE "%bra%") and score > 7 ;