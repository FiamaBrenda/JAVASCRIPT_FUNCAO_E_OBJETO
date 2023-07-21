import promptSync from "prompt-sync"

const prompt = promptSync();

export function verificarMaiorIdade(){
console.log(" Faça um programa que receba nome e a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar aidade e mostre uma mensagem quando a idade do usuário for maior que 18. ");

let pessoa = {
    nome: "",
    idade: 0
}

    console.log("Sua idade deve ser maior que 18")
do {

    pessoa.nome = parseInt(prompt("Digite seu nome: "));
    pessoa.idade = prompt("Digite sua idade: ");

} while (pessoa.idade < 18);
    console.log("Idade Valida");
    console.log(pessoa);
}
 

export function ImprimirPar (){
/* 6. Imprimir números pares de 0 a 20 utilizando o loop while */

    let par = 0

    while (par < 20) {
        console.log( par);
        par += 2;

    }
}

export function CalSoma1a100() {  

   console.log("7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.")

    let contador= 1
    let soma=0
    while (contador <= 100) {
        contador ++;
        soma = contador + soma;
    
    }

    console.log(soma);

}

export function ContRegressiva() {  
    
    console.log("Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.")

    let n = parseFloat(prompt("Digite um numero: "))

    while( n >= 0){
        console.log(n--);
    }

}

export function diferenteZero() { 

    console.log("Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0. "); 
    
    let n ;
    do {
        n = prompt("Digite um numero: ")
    }while(n != 0);

}