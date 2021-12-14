#include <iostream>

using namespace std;

const int MAX = 10; //constante para valor padrao da matriz 
void receberMatriz(int mx[][MAX], int nl, int nc); //assinatura da funcao para receber os elementos de uma matriz
bool procuraVetor(int mx[][MAX], int nl, int nc, int vetor, int n)

int main() {
    int l, c; //valores das linhas e colunas da matriz
    cin >> l >> c;
    int m[MAX][MAX];

    receberMatriz(m, l, c)

    int n;
    cin >> n;
    int v[n];

    for (int i = 0; i < n; i++) {
        cin >> v[i]; 
    }

    procuraVetor(m, l, c, v, n);

    return 0;
}

bool procuraVetor(int mx[][MAX], int nl, int nc, int vetor, int n) {
    if (n != nc) return false;

    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            
        }
    }
}

void receberMatriz(char mx[][MAX], int nl, int nc) {
    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            cin >> mx[i][j];
        }
    }
}