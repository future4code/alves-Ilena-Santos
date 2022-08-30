### Exercicio 1
#### a)
Irá deletar a coluna salary da tabela.

#### b)
Altera a coluna gender para o nome sex e ela
aceitará strings de até 6 caracteres.

#### c)
Deixa a coluna gender com o mesmo nome mas ela aceitará string de até 255 caracteres.

#### d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2
#### a)
UPDATE Actor
SET name = "Fulano"
WHERE id = "003"

#### b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"

#### c)
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

#### d)
A mudança não é feita, mas não aparece uma mensagem de erro.

### Exercicio 3
#### a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

#### b)
DELETE FROM Actor WHERE gender = "male" and salary > 1000000

### Exercicio 4
#### a)
SELECT MAX(salary)
FROM Actor;

#### b)
SELECT MIN(salary)
FROM Actor WHERE gender = "female";

#### c)
SELECT COUNT(*) FROM Actor WHERE gender = "female"

#### d)
SELECT SUM(salary)
FROM Actor;

### Exercicio 5
#### a) 
Faz uma contagem e agrupa por genero.

#### b)
 SELECT name,id FROM Actor
WHERE gender = 'male'
ORDER BY name desc

#### c)
SELECT * FROM Actor
WHERE gender = 'male'
ORDER BY salary

#### d)
SELECT * FROM Actor
WHERE gender = 'male'
ORDER BY salary DESC
LIMIT 3

#### e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender

### Exercicio 6
#### a) 
ALTER TABLE Movie
ADD playing_limit_date DATE;

#### b)
 ALTER TABLE Movie CHANGE score rating float;

#### c)
UPDATE Movie
SET
playing_limit_date = "2022-10-20"
WHERE id = "002"

UPDATE Movie
SET
playing_limit_date = "2022-09-25"
WHERE id = "003"

#### d)
delete from  Movie where id= "001";
UPDATE Movie
SET
synopsis = "sdfsdfsd"
WHERE id = "001"

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não retornou mensagem de erro, mas nada foi alterado.
