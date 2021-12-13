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