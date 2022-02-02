#include <iostream>
#include <cstring>

using namespace std;

struct Aluno {
    char nome[40];
    double nota;
};

void recebeVetor(Aluno v[], int tam);
void imprimeVetor(Aluno v[], int tam);
void trocarElementos(Aluno v[], int p1, int p2);
void ordenarElementos(Aluno v[], int tam, bool desc);

int main() {
    int n;
    cin >> n;

    Aluno alunos[n];

    recebeVetor(alunos, n);
    ordenarElementos(alunos, n, false);
    imprimeVetor(alunos, n);

    return 0;
}

void imprimeVetor(Aluno v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cout << v[i].nome << " - " << v[i].nota << endl;
    }
}

void recebeVetor(Aluno v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cin >> v[i].nome >> v[i].nota;
    }
}

void trocarElementos(Aluno v[], int p1, int p2) {
    Aluno aux;

    aux = v[p1];
    v[p1] = v[p2];
    v[p2] = aux;
}

void ordenarElementos(Aluno v[], int tam, bool desc) {
    for (int i = tam - 1; i >= 1; i--) {
        for (int j = 0; j < tam - 1; j++) {
            if (desc) {
                if (v[j + 1].nota < v[j].nota) {}
                else trocarElementos(v, j, j + 1);
            }
            else {
                if (v[j + 1].nota >= v[j].nota) {}
                else trocarElementos(v, j, j + 1);
            }
        }
    }
}
