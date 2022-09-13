### Exercicio 1
a) O uso de strings é melhor por questão de segurança, visto que dentro da string podem ser usados também números e caracteres.

b) 
import { v4 } from "uuid"

class GenerateId {

    createId(): string {
        return v4();
    }
}

export default GenerateId

### Exercicio 2
a) O connection cria uma ligação com o banco e a função createUser recebe os dados através dos parâmetros e insere em uma tabela com o auxilio do connection.

b)
CREATE TABLE IF NOT EXISTS data120922_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

c)
  public create = async (newUser: user) => {
        await this.getConnection()
            ('data120922_users')
            .insert(newUser)

    }

### Exercicio 3
a)
Garante que a chave de segurança é será uma string. Precisamos porque o jwt pode gerar outro tipo que não seja string.
