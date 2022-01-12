#include <iostream>
#include <cstring>

using namespace std;

struct Livro {
    char autor[50];
    char titulo[50];
    int ano;
};

void receberLivros(Livro livros[], int N);
void checarLivros(Livro livros[], int N, char autor[], int countLivros);

int main() {
    int N = 0;
    cin >> N;

    Livro livros[N];
    receberLivros(livros, N);

    char autor[50];
    cin >> autor;

    int countLivros = 0;

    for (int i = 0; i < N; i++) {
        if (strcmp(livros[i].autor, autor) == 0) countLivros++;
    }

    checarLivros(livros, N, autor, countLivros);

    return 0;
}

void checarLivros(Livro livros[], int N, char autor[], int countLivros) {
    if (countLivros == 0) {
        cout << "Autor desconhecido" << endl;
        return;
    }

    Livro livrosAutor[countLivros];
    int count = 0;

    for (int i = 0; i < N; i++) {
        if (strcmp(livros[i].autor, autor) == 0) {
            livrosAutor[count] = livros[i];
            count++;
        }
    }

    int indiceMaior = 0;
    int maior = livrosAutor[0].ano;

    for (int j = 0; j < count; j++) {
        if (livrosAutor[j].ano > maior) {
            indiceMaior = j;
            maior = livrosAutor[j].ano;
        }             
    }

    cout << livrosAutor[indiceMaior].titulo << " " << livrosAutor[indiceMaior].ano << endl;
}

void receberLivros(Livro livros[], int N) {
    for (int i = 0; i < N; i++) {
        cin >> livros[i].autor >> livros[i].titulo >> livros[i].ano;
        cin.ignore();
    }
}