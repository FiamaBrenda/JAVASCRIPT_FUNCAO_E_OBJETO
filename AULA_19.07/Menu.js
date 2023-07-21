import promptSync from "prompt-sync"

const prompt = promptSync();

import { verificarMaiorIdade,ImprimirPar,CalSoma1a100,ContRegressiva,diferenteZero } from "./ex.js";

// menu para escolher qual o exercicio o ususario escolher

let ex;
let continuar;

do {

    ex = parseInt(prompt("Digite um numero que represente um exercicio: "));

    switch (ex) {
        case 1:
            helloword("Hello Word - Ola Mundo")
            break;
        case 2:

            //objeto
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkils: ["figma","HTML","CSS","Web Responsive"]
            }

            console.log(aluno.nome, aluno.idade, /* aluno.hardSkils, */ aluno.hardSkils[2])
            console.log("Objeto Aluno", aluno);

            break;
        case 3:
            verificarMaiorIdade()

            break;
        case 4:
            ImprimirPar()
            break;
        case 5:
            CalSoma1a100()
            break;
        case 6:
            ContRegressiva()
            break;
        case 7:
            diferenteZero() 
            break;
        default:

            console.log("Digite um numero de 1 a 4")

            break;
    }

    continuar = prompt("Deseja continuar? Se sim, digite s para sim e n para nao: ")

} while (continuar.toLocaleLowerCase === "s");// transforma em minusculo

function helloword(frase) {
    console.log(frase);
}