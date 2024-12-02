/*
const soma = (a:number, b: number) => {
    console.log(a + b);
}
soma(2, 4);
*/

// ================= Variáveis e tipos =====================

// Tipos primitivos

var a:string = 'a';    // escopo global
let b:string = 'b';    // escopo local e pode ser alterado
const c:string = 'c';  // não pode alterar (imutável)

let n:number = 2;
let x:boolean = true;

let m:string | number = 2; // valor pode ser string ou numero
let g:any = 'valor';        // pode receber qualquer tipo

// Tipos compostos

// ================= Interfaces =====================
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string  // opcional
}
// ================= Objeto =====================
const pessoa:Pessoa = {
    nome: 'João',
    idade: 30
}

const outraPessoa: Pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: 'Desenvolvedora'
}

// ================= Arrays =====================
const arrayPessoa: Pessoa[] = [pessoa, outraPessoa];
const arrayPessoa2: Array<Pessoa> = [pessoa, outraPessoa];
const arrayNumber: number[] = [1, 2, 3, 4, 5];
const arrayNomes: string[] = ['Leandro', 'Isabelle'];

// ================= Decisões e repeticoes =====================
/*
const num:number = 15;
if(num > 15){
    console.log('num maior que 15');
} else if(num == 15) {
    console.log('num igual a 15');
} else {
    console.log('num menor que 15');
}*/

/*
const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Você é um estudante",
    viewer: "Você pode visualizar"
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}
const usuario = 'admin';
validateUser(usuario);
*/
// ================= Estrutura de repetição =====================
/*
for(let i = 0;i < 5;i++){
    console.log(i);
}
let y = 2;
while(y < 6) {
    console.log(y);
    y++;
}*/
// ================= arrays =====================
const array: Array<number> = [1, 2, 3, 4];
const stringArray: string[] = ['a', 'b', 'c', 'd'];

array.push(22)  //adiciona um elemento ao fim
array.pop()     // remove o ultimo elemento

array.shift()   // remove o primeiro elemento
array.unshift(1) // adiciona um elemento no inicio

array.splice(1, 1) // remove o elemento na posição 1
array.splice(1, 0, 100) // adiciona um elemento na posição 1

console.log(array[0]);
console.log(array);
console.log(array.length + " elementos");

const buscaArray = array.find(num => num === 4);
console.log(buscaArray)

array.forEach((item, index, lista) => {
    console.log(item, index, lista)
});

array.map((item, index, lista) => {
    console.log(item * 2);
})