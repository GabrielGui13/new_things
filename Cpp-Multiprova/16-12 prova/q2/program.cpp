#include<iostream>

using namespace std;

int main() {
    int n; //variavel da quantidade de elementos do vetor
    cin >> n; //atribui um valor ao tamanho do vetor
    int vetorInicial[n]; //inicializa o vetor com o tamanho passado

    for (int i = 0; i < n; i++) {
        cin >> vetorInicial[i]; //insere os elementos em cada posicao do vetor
    }

    int vetorFinal[n]; //inicializa um vetor secundario onde vai ser feita a rotacao (com o mesmo tamanho do outro)

    vetorFinal[0] = vetorInicial[n - 1]; //atribui o primeiro valor do vetor final como o ultimo do vetor final, pois "passou para a direita"

    for (int i = 0; i < n - 1; i++) { //n - 1 para nao alcancar todos os valores, ja que o ultimo elemento do vetor inicial ja foi atribuido
        vetorFinal[i + 1] = vetorInicial[i]; //insere o restante dos valores do vetor inicial no vetor final
    } //o i + 1 significa que ta colocando cada elemento uma posicao a frente

    for (int i = 0; i < n; i++) {
        cout << vetorFinal[i] << " "; //mostra o vetor final com a rotacao feita na tela
    }

    return 0;
}

/* 
    O programa pede que receba um vetor normal, definido por uma variavel que determina seu tamanho, e a partir disso, deve "rotacionar" o vetor,
    simular como se os numeros passassem para a direita, com isso no primeiro vetor, o numero da posicao 1 ficaria na posicao 2, o numero da posicao 
    dois ficaria na 3, e assim em diante.

    A primeira coisa a fazer eh receber qual o tamanho do primeiro vetor, que eh armazenado na variavel "n", ao receber o
    valor dessa variavel, o primeiro vetor chamado "vetorInicial" eh inicializado, e apos isso eh criado um laco for para receber o valor
    de cada elemento do vetor, depois disse, o segundo vetor chamado "vetorFinal" eh criado com o mesmo tamanho do primeiro vetor, ja que
    apenas a ordem vai mudar.

    Apos os vetores estarem criados, o primeiro elemento do vetorFinal eh definido como o ultimo elemento do vetorInicial, ja que seria como se ele
    tivesse "passado pra direita", e assim volta pro inicio, o "n - 1" representa que eh o tamanho do vetor menos uma unidade, ja que os vetores sempre 
    comecam com 0.

    Apos o primeiro elemento estar definido, um laco for eh criado para colocar o restante dos elementos do vetorInicial no vetorFinal, mas uma posicao a frente, 
    por isso que o indice do vetorFinal eh n + 1, pois eh a posicao do outro vetor mais uma unidade a frente, alem disso, o for vai ate o numero n - 1, para que nao de 
    conflito na atribuicao dos valores, e tambem por causa disso que o primeiro elemento foi definido antes, apos tudo isso o vetor novo com a "rotacao para a direita"
    eh mostrado na tela
 */