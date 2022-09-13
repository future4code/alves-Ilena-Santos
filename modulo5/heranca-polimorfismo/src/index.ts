// Exercicio 1
// a) Não porque a propriedade de senha está 
// privada e não tem um método getPassword

// b) Uma vez

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia`
    }
}

const user1: User = new User("dfdfgdgdfgfg", "fulano@", "fulano", "123456")

console.log(user1.getId(), user1.getName(), user1.getEmail())

// Exercicio 2

// a) Uma vez
// b) Uma vez, porque dentro da classe User que é pai da classe Customer existe o console.log dessa frase.


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer1: Customer = new Customer("dgdfgdfggsdasd", "maria@", "maria", "654321", "123123123")
// Exercicio 3
console.log(customer1.getCreditCard(), customer1.getEmail(), customer1.getId(), customer1.getName(), customer1.purchaseTotal)

// a) Não porque a propriedade de senha está
// privada e não tem um método getPassword

// Exercicio 4 e Exercicio 5
console.log(customer1.introduceYourself())

// Polimorfismo
// Exercicio 1
// a) todas
export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "joão",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

  // Exercicio 2
  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const place: Place = new Place("")
  // a) Não é possível criar uma instância de uma classe abstrata.
  // b) Criar classes que são filhas dela.

  // Exercicio 3
  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    getResidentsQuantity(): number {
        return this.residentsQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
  }

  // Exercicio 4
  export class ResidentialClient extends Residence {
    private cpf: string;
    name:string;
    registrationNumber: number;
    consumedEnergy: number;
    
    constructor(
    cpf: string,
    name:string,
    registrationNumber: number,
    consumedEnergy: number,
    residentsQuantity: number,
    cep: string
    ) {
        super(residentsQuantity,cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        this.cpf = cpf
    }
    public getCpf(): string {
        return this.cpf
      }
    
      public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }

  }