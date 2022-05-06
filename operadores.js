var operador = 100; //variavel tem nome e um valor atribuido
var operando = 50;

var resultado = operador * operador;

console.log(resultado); //quem você quer imprimir no teste


var nome = "Raphael";
var sobrenome = "Goulart";

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var primeiroValor = 10;
var segundoValor = "3";
var soma = primeiroValor + segundoValor;

console.log(soma);


var name = "Hau";
if (name === "Raphael") { //condição se, === representa igual
    console.log("Legal! Seu nome é este mesmo")
} else if(name === "Goulart") { //senão, se ... imprima...
    console.log("esse é seu sobrenome")
}else { //senao imprima ...
    console.log("esse não é seu nome")
}

//mesmo exercicio de cima usando o switch

switch(name) {
    case "Raphael":
        console.log("legal! é você mesmo");
        break;
    case "Juliana":
        console.log("não é você");
        break;
    default: //se nenhum desses casos acima for satisfeito ele cairá em default
        console.log("Achei que era você, abestado");
        break; //sempre usar o break no switch e não em outros casos
}


//estrutura de Repetição 

var numeroSorteado = 10;

var tabuada = 7;

for(var i = 0; i <= 10; i++) { //para variavel i igual a 0, enquanto i menor que 100, incremento i++ contando um a cada vez que o laço for executado
  console.log("Valor de " + tabuada + "x" + i + " = " + tabuada * i);
} 

for (var i = 0; i < 100; i++){
    if (numeroSorteado === i) {
        console.log("seu numero foi encontrado");
    }
}

// estrutura de repetição While

var achou = false;

var tabuada

while (!achou) {  //essa exclamação irá inverter o valor booleano, ou seja irá ser falso agora ao invés de true, dessa forma ele entrará no laço
    console.log("achou");
    break; //coloquei o break para parar senão irá ficar em looping no laço
}


//funções

function somar(operadorA, operadorB) { //o parenteses são os termos dessa "soma"
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaRaphael(x) {
    console.log("olá, sabia que voltaria " + x);
}

var resultadoDaSoma = somar(1, 2);
var resultadoNovoDaSoma = somar(14, 6);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaRaphael('Raphael');

