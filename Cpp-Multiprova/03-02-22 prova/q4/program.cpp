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
void ord(Musica v[], int tam, bool desc);
void generoMaisFrequente(Genero v[], int tam, bool desc, Musica m[]);
void listarGenero(Musica m[], Genero g[], int tam);
void preencherGeneros(Genero g[], int tam);
void copiarPlaylist(Musica p1[], Musica p2[], int tam);

int main() {
    int n;
    cin >> n;

    Musica playlistOriginal[n];
    Musica playlist[n];
    Genero generos[n];

    preencherGeneros(generos, n);
    recebeVetor(playlistOriginal, n);
    copiarPlaylist(playlist, playlistOriginal, n);
    ord(playlist, n, true);
    imprimeVetor(playlist, n);
    listarGenero(playlist, generos, n);
    generoMaisFrequente(generos, n, true, playlistOriginal);

    return 0;
}

void copiarPlaylist(Musica dest[], Musica src[], int tam) {
    for (int i = 0; i < tam; i++) {
        dest[i] = src[i];
    }
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
            char vazio[40];
            strcpy(vazio, " ");
            
            if (strcmp(g[j].nome, m[i].genero) == 0) {
                g[j].frequencia++;
                break;
            }
            else if (strcmp(g[j].nome, vazio) == 0) {
                strcpy(g[j].nome, m[i].genero);
                g[j].frequencia++;
                break;
            }
            else continue;
        }
    }
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

void ord(Musica v[], int tam, bool desc) {
    for (int i = tam - 1; i >= 1; i--) {
        for (int j = 0; j < tam - 1; j++) {
            if (desc) {
                if (v[j + 1].vezesTocadas < v[j].vezesTocadas) {}
                else if (v[j + 1].vezesTocadas == v[j].vezesTocadas) {
                    if (strcmp(v[j + 1].artista, v[j].artista) < 0) {}
                    else trocarMusicas(v, j, j + 1);
                }
                else trocarMusicas(v, j, j + 1);
            }
            else {
                if (v[j + 1].vezesTocadas >= v[j].vezesTocadas) {}
                else if (v[j + 1].vezesTocadas == v[j].vezesTocadas) {
                    if (strcmp(v[j + 1].artista, v[j].artista) >= 0) {}
                    else trocarMusicas(v, j, j + 1);
                }
                else trocarMusicas(v, j, j + 1);
            }
        }
    }
}

void generoMaisFrequente(Genero v[], int tam, bool desc, Musica m[]) {
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

    if (v[0].frequencia > v[1].frequencia) cout << "Genero mais frequente: " << v[0].nome << endl;
    else cout << "Genero mais frequente: " << m[0].genero << endl;
}
