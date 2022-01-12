#include<iostream>

using namespace std;

const int MAX = 10; //declaracao base do tamanho da matriz

void receberMatriz(char mx[][MAX], int nl, int nc); //declaracao da assinatura da funcao para receber os valores da matriz

int main() {
    int l, c, maiusculas = 0; //inicializa o l e c, que representa a quantidade de linhas e colunas, e o contador de letras maiusculas

    cin >> l >> c; //recebe as variaveis l e c

    char m[MAX][MAX]; //inicializa a matriz m 

    receberMatriz(m, l, c); //chama a funcao para inserir os valores na matriz

    for (int i = 0; i < l; i++) {
        for (int j = 0; j < c; j++) {
            if (m[i][j] >= 'A' && m[i][j] <= 'Z') maiusculas++; //percorre a matriz e checa se esta entre o intervalo de caracteres A e Z, que sao de letras maiusculas pela tabela ASCII
        }
    }

    cout << maiusculas << " letras maiusculas" << endl; //mostra a quantidade de letras maiusculas no final

    return 0;
}

void receberMatriz(char mx[][MAX], int nl, int nc) {
    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            cin >> mx[i][j]; //recebe um valor para cada combinacao de indices
        }
    }
}