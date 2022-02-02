#include <iostream>
#include <cstring>

using namespace std;

#define max 40

struct Musica {
    char titulo[max];
    char artista[max];
    char genero[max];
    int vezesTocadas;
};

struct Genero {
    char nome[max];
    int frequencia;
};

void recebeVetor(Musica v[], int tam);
void imprimeVetor(Musica v[], int tam);
void trocarMusicas(Musica v[], int p1, int p2);
void trocarGeneros(Genero v[], int p1, int p2);
void ordenarMusicas(Musica v[], int tam, bool desc);
void generoMaisFrequente(Genero v[], int tam, bool desc);
void listarGenero(Musica m[], Genero g[], int tam);
void preencherGeneros(Genero g[], int tam);

int main() {
    int n;
    cin >> n;

    Musica playlist[n];
    Genero generos[n];

    preencherGeneros(generos, n);
    recebeVetor(playlist, n);
    ordenarMusicas(playlist, n, true);
    imprimeVetor(playlist, n);
    listarGenero(playlist, generos, n);
    generoMaisFrequente(generos, n, true);

    return 0;
}

void preencherGeneros(Genero g[], int tam) {
    for (int i = 0; i < tam; i++) {
        strcpy(g[i].nome, " ");
        g[i].frequencia = 0;
    }
}

void imprimeVetor(Musica v[], int tam) {
    for (int i = 0; i < tam; i++) {
        cout << i + 1 << endl;
        cout << v[i].artista << " - " << v[i].titulo << " (" << v[i].genero << ")" << endl;
        cout << "tocada " << v[i].vezesTocadas << " vezes" << endl;
    }
}

void recebeVetor(Musica v[], int tam) {
    cin.ignore();
    for (int i = 0; i < tam; i++) {
        cin.getline(v[i].artista, max);
        cin.getline(v[i].titulo, max);
        cin.getline(v[i].genero, max);
        cin >> v[i].vezesTocadas; 
        cin.ignore();
    }
}

void listarGenero(Musica m[], Genero g[], int tam) {

    for (int i = 0; i < tam; i++) {
        for (int j = 0; j < tam; j++) {
            cout << "\n" << m[i].genero << " == " << g[j].nome << " > " << strcmp(g[j].nome, m[i].genero) << endl;
            
            if (strcmp(g[j].nome, m[i].genero) == 0) {
                g[j].frequencia++;
                break;
            }
            else {
                strcpy(g[j].nome, m[i].genero);
                g[j].frequencia++;
                break;
            }
        }
    }

/*     for (int i = 0; i < tam; i++) {
        char nomeGenero[40];
        char vazio[40];
        strcpy(nomeGenero, genero);
        strcpy(vazio, " ");

        if (strcmp(g[i].nome, nomeGenero) == 0) {
            g[i].frequencia++;
            break;
        }
        else {
            strcpy(g[i].nome, nomeGenero);
            g[i].frequencia++;
            break;
        }
    } */
}

void trocarMusicas(Musica v[], int p1, int p2) {
    Musica aux;

    aux = v[p1];
    v[p1] = v[p2];
    v[p2] = aux;
}

void trocarGeneros(Genero v[], int p1, int p2) {
    Genero aux;

    aux = v[p1];
    v[p1] = v[p2];
    v[p2] = aux;
}

void ordenarMusicas(Musica v[], int tam, bool desc) {
    for (int i = tam - 1; i >= 1; i--) {
        for (int j = 0; j < tam - 1; j++) {
            if (desc) {
                if (v[j + 1].vezesTocadas < v[j].vezesTocadas) {}
                else trocarMusicas(v, j, j + 1);
            }
            else {
                if (v[j + 1].vezesTocadas >= v[j].vezesTocadas) {}
                else trocarMusicas(v, j, j + 1);
            }
        }
    }
}

void generoMaisFrequente(Genero v[], int tam, bool desc) {
    for (int i = tam - 1; i >= 1; i--) {
        for (int j = 0; j < tam - 1; j++) {
            if (desc) {
                if (v[j + 1].frequencia < v[j].frequencia) {}
                else trocarGeneros(v, j, j + 1);
            }
            else {
                if (v[j + 1].frequencia >= v[j].frequencia) {}
                else trocarGeneros(v, j, j + 1);
            }
        }
    }

    cout << endl;
    for (int i = 0; i < tam; i++) {
        cout << v[i].nome << " (" << v[i].frequencia << ")" << endl;
    }
    cout << "Genero mais frequente: " << v[0].nome << endl;
}
