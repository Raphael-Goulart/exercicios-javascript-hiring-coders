class Matematica { //definiu uma classe provém uma maneira mais simples de criar objetos e lidar com heranças
    soma(valorA, valorB) { // 
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);