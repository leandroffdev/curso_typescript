import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name:string, accountNumber: number) {
        super(name, accountNumber);
    }
    getLoan = (): void => {
        console.log('Voce obteve um emprestimo');
    }

    deposit = (): void => {                             // método sobrescrito
        console.log('A empresa depositou dinheiro');
    }
}