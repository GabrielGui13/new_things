#include <iostream>
#include <cstring>

using namespace std;

int recebeVetor(int v[]);
void imprimeVetor(int v[], int tam);
void trocarElementos(int v[], int p1, int p2);
void ordenarElementos(int v[], int tam, bool desc);

#define max 15

int main() {
    char ord[1];
    cin >> ord;
    bool desc = strcmp(ord, "d") == 0;

    int numeros[max];
    int tam = recebeVetor(numeros);

    ordenarElementos(numeros, tam, desc);

    imprimeVetor(numeros, tam);

    return 0;
}

void imprimeVetor(int v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cout << v[i] << ' ';
    }
}

int recebeVetor(int v[]) {
    bool aux = true;
    int count = 0;

    while (aux) {
        int n;
        cin >> n;

        if (n == 0) break;

        v[count] = n;
        count++;
    }

    return count;
}

void trocarElementos(int v[], int p1, int p2) {
    int aux;

    aux = v[p1];
    v[p1] = v[p2];
    v[p2] = aux;
}

void ordenarElementos(int v[], int tam, bool desc) {
    for (int i = tam - 1; i >= 1; i--) {
        for (int j = 0; j < tam - 1; j++) {
            if (desc) {
                if (v[j + 1] < v[j]) {}
                else trocarElementos(v, j, j + 1);
            }
            else {
                if (v[j + 1] >= v[j]) {}
                else trocarElementos(v, j, j + 1);
            }
        }
    }
}
