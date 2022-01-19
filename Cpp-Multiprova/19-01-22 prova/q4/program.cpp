#include<iostream>
#include<cstring>

using namespace std;

bool palindromo(char palavra[20], int l1, int l2, bool check);

int main() {
    char palavra[20];
    cin >> palavra;

    int tamanho = strlen(palavra);
    bool resultado = palindromo(palavra, 0, tamanho - 1, true);

    if (resultado) cout << palavra << " é palíndromo " << endl;
    else cout << palavra << " não é palíndromo" << endl;

    return 0;
}

bool palindromo(char palavra[20], int l1, int l2, bool check) {
    if (l2 < 0) return check;

    if (palavra[l1] != palavra[l2]) check = false;
    l1++;
    l2--;

    return palindromo(palavra, l1, l2, check);
}