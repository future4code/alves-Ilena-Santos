

// Exercicio 1
// a) O construtor recebe os parametros para contruir o objeto de sua classe. 
// Ele é chamado através da palavra new seguida do nome de sua classe.

// b) Uma vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] ;
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }
    public getCPF(): string {
        return this.cpf
    }
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    
  }

// const user: UserAccount = new UserAccount("32434434578", "fulano", 20) 



  // c) Através dos métodos set e get.

  // Exercicio 2

  class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string

    ) {
        this.description = description,
        this.value = value,
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
  }

  const transaction: Transaction = new Transaction("sdsf", 3, "sdfdsf")
  const user: UserAccount = new UserAccount("32434434578", "fulano", 20, [transaction]) 
  console.log(user)

// Exercicio 3

  class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccounts(): UserAccount[] {
        return this.accounts
    }
  }
