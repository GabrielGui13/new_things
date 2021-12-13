#include<iostream>

using namespace std;

int main() {
    int ne1, ne2; //variaveis de elementos do tamanho da matriz
    
    cin >> ne1; //atribui a variavel quantos elementos o vetor 1 vai ter
    int v1[ne1]; //inicializa o vetor com o tamanho da variavel

    for (int i = 0; i < ne1; i++) {
        cin >> v1[i]; //atribui os valores do usuario para cada posicao do vetor
    }

    cin >> ne2; //atribui a variavel quantos elementos o vetor 2 vai ter
    int v2[ne2]; //inicializa o vetor com o tamanho da variavel

    for (int i = 0; i < ne2; i++) {
        cin >> v2[i]; //atribui os valores do usuario para cada posicao do vetor
    }

    int count = 0; //variavel que vai armazenar a quantidade de elementos que um vetor tem em comum com o outro

    for (int i = 0; i < ne1; i++) { //seleciona um dos valores do primeiro vetor
        for (int j = 0; j < ne2; j++) { //percorre todos os valores do segundo vetor
            if (v1[i] == v2[j]) count++; //checa se o elemento do primeiro vetor esta contido no segundo vetor, caso verdade, incrementa o count
        }
    }
    
    if (count == 0) cout << "Sem elementos" << endl; //se a variavel count continuar em 0, signifca que nao teve elementos iguais, entao imprime sem elementos
    else cout << count << " elementos" << endl; //caso tenha um valor, imprime na tela a quantidade de elementos iguais

    return 0;
}