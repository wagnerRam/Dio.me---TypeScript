import { PeopleAccout } from "./PeopleAccount";

export abstract class DioAccount {
  private name: string;
  accountNumber: number;
  balance: number = 1000;
  status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Alterei o nome");
  };

  getName = () => {
    return PeopleAccout.name;
  };

  deposit = (valorDeposito: number) => {
    console.log(`Seu saldo atual é R$ ${this.balance}`);

    this.balance += valorDeposito;
    console.log(
      `Valor debitado com sucesso, seu saldo atual é R$ ${this.balance}`
    );
    return this.balance;
  };

  withDraw = (valorDeSaque: number): void => {
    console.log(`Seu saldo é de ${this.balance}`);

    if (this.balance > valorDeSaque && this.status === true) {
      if (valorDeSaque > this.balance) {
        this.balance - valorDeSaque;
      }
    } else {
      console.log("Seu saldo é inferior ao valor desejado para saque");
    }
  };

  // getBalance = (): void => console.log(this.balance);

  validate = (): boolean => {
    if (this.status) {
      console.log("Sua conta esta validada...");
      return this.status;
    }

    throw new Error("Conta não validada...");
  };
}
