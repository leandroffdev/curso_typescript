export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // Setters
    setName(name: string): void {
        this.name = name;
        console.log("Nome alterado com sucesso!");
    }
    // Getters
    getName(): string {
        return this.name;
    }
    // Métodos
    deposit = (): void => {                 // Assinatura do metodo é o tipo de dado que ele retorna. nesse caso nada ou seja void
        if(this.validateStatus()) {
            console.log('Voce depositou!');
        }
    }

    withdraw = (): void => {
        console.log('Voce sacou');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        } 
        throw new Error('Conta inválida');
    }
}
