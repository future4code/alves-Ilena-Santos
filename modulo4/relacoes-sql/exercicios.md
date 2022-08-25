### Exercicio 1
#### a)
Uma coluna que está em outra tabela.

#### b)
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating
VALUES
('10', 'muito bom o filme', 8.0, '002');

#### c)
Error Code: 1452. Cannot add or update a 
child row: a foreign key constraint fails 
(`alves-ilena-santos`.`Rating`, CONSTRAINT
 `Rating_ibfk_1` FOREIGN KEY (`movie_id`) 
 REFERENCES `Movie` (`id`))

 A mensagem de erro é que existe uma falha na foreign key


#### d)
 ALTER TABLE Movie
DROP COLUMN rating;

#### e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-ilena-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

 A mensagem de erro é que não pode deletar uma linha que é parente, por causa da foreign key.

 DELETE FROM Movie
where id ="002";

 ### Exercicio 1
#### a)
Essa tabela terá duas colunas uma com o id do ator e outra com o id do filme. Ambos de vindos de outras tabelas.

#### b)
INSERT INTO MovieCast
VALUES
('002', '004');

INSERT INTO MovieCast
VALUES
('002', '001'),
('003', '002'),
('004', '004'),
('004', '005'),
('002', '007')
;

#### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-ilena-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

 A mensagem de erro é que existe uma falha na foreign key

#### d)
 Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-ilena-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

A mensagem de erro é que não pode deletar uma linha que é parente, por causa da foreign key.

 ### Exercicio 3
 #### a) 
 Ela traz uma nova tabela que relaciona duas tabelas através de um parâmetro passado (id)
é a condição para fazer a correlação.

 #### b) 
SELECT title, Movie.id, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;