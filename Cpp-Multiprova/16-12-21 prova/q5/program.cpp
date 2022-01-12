#include<iostream>
#include<cstring>

using namespace std;

int main() {
    char s1[20], s2[20], x;

    cin.getline(s1, 20);
    cin.getline(s2, 20);
    cin >> x;

    int tam1 = strlen(s1);
    int tam2 = strlen(s2);

    int menor;

    if (tam1 < tam2) menor = tam1;
    else menor = tam2;

    for (int i = 0; i < menor; i++) {
        if (s1[i] == s2[i]) {
            s1[i] = x;
            s2[i] = x;
        }
    }

    cout << s1 << "\n" << s2 << endl;

    return 0;
}