class Matematica { //definiu uma classe provém uma maneira mais simples de criar objetos e lidar com heranças
    soma(valorA, valorB) { // 
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(10, 10);

console.log(resultado);
