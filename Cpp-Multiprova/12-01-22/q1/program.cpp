#include<iostream>

using namespace std;

const int MAX = 10;

void receberMatriz(int mx[][MAX], int nl, int nc);
void maiorNumeroDaColuna(int mx[][MAX], int nl, int nc);

int main() {
    int l, c;
    cin >> l >> c;
    int m[MAX][MAX];

    if (l > 10 || c > 10) return 0;

    receberMatriz(m, l, c);
    maiorNumeroDaColuna(m, l, c);

    return 0;
}

void maiorNumeroDaColuna(int mx[][MAX], int nl, int nc) {
    for (int i = 0; i < nc; i++) {
        int maior = 0;

        for (int j = 0; j < nl; j++) {
            if (mx[j][i] > maior)
                maior = mx[j][i];
        }
        cout << maior << " ";
    }
}

void receberMatriz(int mx[][MAX], int nl, int nc) {
    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            cin >> mx[i][j];
        }
    }
}