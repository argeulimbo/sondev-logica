/* alert('Boas vinas ao jogo do número secreto!');
let secretNumber = 29;
let number = prompt('Informe um número entre 1 e 30: ');

if (number == secretNumber) {
    console.log('Você acertou!');
}
else {
    console.log('Você errou, tente novamente!'); 
} */

// Exercício 1 - Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// alert('Boas vindas ao nosso site!');

// E2 - Declare uma variável chamada nome e atribua a ela o valor "Lua".
// const nome = "Lua";

// E3 - Crie uma variável chamada idade e atribua a ela o valor 25.
// const idade = 25;

// E4 - Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// const numeroDeVendas = 50;

// E5 - Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// const saldoDisponivel = 1000;

// E6 - Exiba um alerta com o texto "Erro! Preencha todos os campos"
// const msgError = alert('Erro! Preencha todos os campos!');

// E7 - Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// msgError;

// E8 - Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
// const user = prompt('Digite o nome de usuário: ');

// E9 - Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// const idadeTopico9 = prompt('Digite sua idade: ');

// E10 - Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
/* if (idadeTopico9 >= 18) {
    alert('Pode tirar a habilitação!');
}
else {
    alert('Não pode tirar habilitação!');
} */

alert('Boas vindas ao jogo do número secreto');

// Definindo número máximo
let numeroMaximo = 500;

// Usando Math.random para gerar um número aleatório
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;

console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }
        else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';

alert(`Você acertou o número secreto ${numeroSecreto} com apenas ${palavraTentativa} tentativa!`);
/*   
        Desafio 04. Boas Práticas de programação
 

        1* Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
        console.log('Boas vindas');

        2* Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
        let nome = "Argeu";
        console.log(`Olá ${nome}`);

        3* Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . 
        let nome = "Argeu";
        alert(`Olá, ${nome}`)

        4* Utilize o prompt e faça a seguinte pergunta: 
        Qual a linguagem de programação que você mais gosta?
        Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

        let linguagem = prompt('Qual a linguagem de programação que você mais gosta? ');
        console.log(`Sua linguagem é ${linguagem}`);
*/

/*   Desafio 05. Desafio
    Implementação realizada no fonte acima
*/