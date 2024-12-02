class User {
    name: string;
    age: number;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
    showName = () => {
        console.log(this.name);
    }
}

const user: User = new User("Leandro", 36);
const otherUser: User = new User("Isabelle", 30);

user.showName();
console.log(user);
otherUser.showName();
console.log(otherUser);