import { PeopleAccout } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PersonAccount } from "./class/PersonAccount";

const peopleAccout: PeopleAccout = new PeopleAccout(1, "Wagner", 28);
const companyAccount: CompanyAccount = new CompanyAccount("Wagner", 28);
const personAccount: PersonAccount = new PersonAccount("wagner", 28, 0);

// companyAccount.getLoan(500);
// peopleAccout.validate();
// console.log(peopleAccout.status);

personAccount.depositJuros(300);
console.log(personAccount.balance);
