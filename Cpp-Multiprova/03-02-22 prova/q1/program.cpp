#include<iostream>

using namespace std;

void recebeVetor(int v[], int tam);
void imprimeVetor(int v[], int tam);
void trocarElementos(int v[], int p1, int p2);
void ordenarElementos(int v[], int tam, bool desc);
int mostrarSoma(int v[], int tam, int s);

/* void ordenaVetor(int v[], int tam, bool desc);
void trocaElementosNoVetor(int v[], int p1, int p2); */

int main() {
    int n, m;
    cin >> n >> m;

    int numeros[n];

    recebeVetor(numeros, n);
    ordenarElementos(numeros, n, true);

    cout << "Soma " << mostrarSoma(numeros, n, m) << endl; 

    return 0;
}

void recebeVetor(int v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cin >> v[i];
    }
}

void imprimeVetor(int v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cout << v[i] << endl;
    }
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

int mostrarSoma(int v[], int tam, int s) {
    int soma = 0;

    for (int i = 0; i < tam; i++) {
        if (i + 1 == tam && soma + v[i] > s) break;
        if (soma + v[i + 1] > s && i + 1 != tam) break;
        soma += v[i];
    }

    return soma;
}