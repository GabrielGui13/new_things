#include <iostream>

using namespace std;

const int MAX = 10; //declaracao base do tamanho da matriz

void receberMatriz(char mx[][MAX], int nl, int nc); //declaracao da assinatura da funcao para receber os valores da matriz

int main() {
    int l = 3, c = 7; //inicializa o l e c e atribui os valores padrao dados pela questao, 3 e 7
    char m[MAX][MAX]; //inicializa a matriz com o tamanho base
    int dias[7]; //cria um array para monitorar os dias da semana em que Joao estudou, 1 significa que nao, e 2 significa que sim

    for (int i = 0; i < 7; i++) {
        dias[i] = 1; //coloca todos os dias (posicoes) do array como 1, o que coloca todos os dias sem estudar como base
    }

    receberMatriz(m, l, c); //recebe os valores da matriz

    for (int i = 0; i < c; i++) { //le a matriz ao contrario, ou seja, le primeiro as colunas (todos os periodos do dia)
        for (int j = 0; j < l; j++) {
            if(m[j][i] == 'E') dias[i] = 2; //checa se nos 3 periodos do dia houve algum periodo de estudo, caso haja, ele registra na array dias
        }
    }

    int count = 0; //cria um contador para contar quantos dias de estudo tiveram
    for (int i = 0; i < 7; i++) {
        if (dias[i] == 2) count++; //caso tenha 2 em cada posicao, significa que houve estudo todos os dias, e incrementa a variavel
    }

    if (count == 7) cout << "João estuda todo dia" << endl; //se for 7 (estudou por 7 dias), entao imprime que joao estuda todo dia
    else {
        for (int i = 0; i < 7; i++) {
            if (dias[i] == 1) cout << i << endl; //caso joao nao estude todo dia, imprime o indice dos dias que sao iguais a 1, ou seja, que nao teve estudo
        }
    }

    return 0;
}

void receberMatriz(char mx[][MAX], int nl, int nc) {
    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            cin >> mx[i][j]; //recebe um valor para cada combinacao de indices
        }
    }
}