import { DioAccount } from "./DioAccount";

export class PeopleAccout extends DioAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
