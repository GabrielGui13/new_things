#include<iostream>
#include<cstring>

using namespace std;

int main() {
    char A[100], B[100], frase[198]; //declaracao das variaveis dos textos, e posteriormente das frases, 198 pois eh a juncao de 99 + 99

    cin.getline(A, 100); //recebe as frases A e B
    cin.getline(B, 100); //necessario usar getline pois com apenas "cin >> A" nao funcionaria, pois cada espaco contaria como uma entrada diferente

    int tamA = strlen(A); //variavel para encontrar a quantidade de caracteres de cada textp
    int tamB = strlen(B); //mesma coisa com o segundo texto

    strcpy(frase, A); //faz uma copia do texto de A na variavel chamada texto
    frase[tamA] = ' '; //coloca um espaco apos o primeiro texto, usa tamA por ser o tamanho do texto e adiciona 1 para ser a posicao do espaco

    for (int i = tamA + 1, j = 0; i < tamA + tamB + 1; i++, j++) { //comeca do tamanho de A + 1, o "+ 1" significa o espaco entre as frases
        frase[i] = B[j]; //laco for para adicionar o restante dos caracteres da segunda frase (um por um) no restante da frase
    }

    int count = 0; //contador de espacos
    for (int i = 0; i < tamA + tamB + 1; i++) {
        if (frase[i] == ' ') count++; //checa cada caractere da frase completa um por um e procura por caracteres de espaco: " ", pois representa o fim de uma palavra
    }

    cout << frase << endl; //imprime a frase na tela
    cout << count + 1 << " palavras" << endl; //imprime a quantidade de espacos + 1, ja que nao da para usar o mesmo metodo para contar a ultima palavra

    return 0;
}