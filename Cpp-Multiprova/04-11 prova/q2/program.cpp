#include<iostream>

using namespace std;

int main() {
    int num, aux;

    aux = 0;
    cin >> num;

    while (aux == 0) {
        if (num == 1) {
            cout << "Digitos nao pares" << endl;
            aux = 1;
        }
        else if (num == 0) {
            cout << "Digitos pares" << endl;
            aux = 1;
        }

        num -= 2;
    }
    
    return 0;
}