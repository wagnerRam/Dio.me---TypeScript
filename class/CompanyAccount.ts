import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valorEmprestimo: number) => {
    console.log(`O saldo atual é R$ ${this.balance}`);
    if (this.status === true) {
      this.balance += valorEmprestimo;
      console.log("O emprestimo foi realizado com sucesso");
      console.log(`O valor atual é R$ ${this.balance}`);
    } else {
      console.log("Não foi possivel realizar o emprestimo, conta invalida");
    }
  };
}
