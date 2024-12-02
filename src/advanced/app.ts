// Abstração, Herança e poolimorfismo

// DIO banking
//name, accountNumber
// deposit, withdraw

import { DioAccount } from './class/DioAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peopleAccount: DioAccount = new PeopleAccount(1, "Leandro", 28);
peopleAccount.setName("Alice");
peopleAccount.deposit()
console.log(peopleAccount.getName())

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// console.log(companyAccount);
companyAccount.deposit();

