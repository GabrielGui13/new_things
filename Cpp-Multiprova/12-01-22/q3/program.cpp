#include <iostream>
#include <cstring>

using namespace std;

struct Bairro {
    char nome[50];
    char cidade[50];
};

void receberBairros(Bairro bairros[], int N);

int main() {
    int N = 0;
    cin >> N;

    if (N > 15) return 0;

    Bairro bairros[N];
    receberBairros(bairros, N);

    //criar um struct para a cidade
    //criar um array de cidades para ter controle de cada uma
    //caso a cidade ja exista na array, inserir valor ""

    return 0;
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