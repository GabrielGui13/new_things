#include <iostream>
#include <cstring>

using namespace std;

struct Bairro {
    char nome[50];
    char cidade[50];
};

struct Cidade {
    char nome[50];
};

void receberBairros(Bairro bairros[], int N);
bool procurarCidade(Cidade cidades[], Bairro bairro, int N);
void mostrarBairros(Cidade cidades[], Bairro bairros[], int N);

int main() {
    int N = 0;
    cin >> N;

    if (N > 15) return 0;

    Bairro bairros[N];
    receberBairros(bairros, N);

    Cidade cidades[N];

    for (int i = 0; i < N; i++) {
        if (procurarCidade(cidades, bairros[i], N)) {
            strcpy(cidades[i].nome, "");
        }
        else {
            strcpy(cidades[i].nome, bairros[i].cidade);
        }
    }

    mostrarBairros(cidades, bairros, N);

    return 0;
}

void mostrarBairros(Cidade cidades[], Bairro bairros[], int N) {
    for (int i = 0; i < N; i++) {
        int count = 0;
        Bairro parBairros[2];

        if (strcmp(cidades[i].nome, "") == 0) continue; 

        for (int y = 0; y < N; y++) {
            if (strcmp(cidades[i].nome, bairros[y].cidade) == 0) {
                parBairros[count] = bairros[y];
                count++;
            }
        }

        cout << parBairros[0].nome << " e " << parBairros[1].nome << " sao de " << parBairros[0].cidade << endl;
    }
}

bool procurarCidade(Cidade cidades[], Bairro bairro, int N) {
    bool achou = false;
    for (int i = 0; i < N; i++) {
        if (strcmp(cidades[i].nome, bairro.cidade) == 0) achou = true;
    }

    return achou;
}

void receberBairros(Bairro bairros[], int N) {
    cin.ignore();
    for (int i = 0; i < N; i++) {
        char n[50], c[50];
        cin.getline(n, 50);
        cin.getline(c, 50);

        strcpy(bairros[i].nome, n);
        strcpy(bairros[i].cidade, c);
    }
}