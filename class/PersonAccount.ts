import { DioAccount } from "./DioAccount";

export class PersonAccount extends DioAccount {
  saldo: number = 0;

  constructor(name: string, accountNumber: number, saldo: number) {
    super(name, accountNumber);
    this.saldo = saldo;
  }

  depositJuros = (valorADepositar: number): number => {
    valorADepositar = valorADepositar + 10;
    this.balance += valorADepositar;

    console.log(`Seu valor atual é após deposito ${this.balance}`);

    return this.balance;
  };
}
