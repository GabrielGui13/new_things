#include<iostream>

using namespace std;

int main() {
    int n, x, impar;
    impar = 0;
    cin >> n;

    while (n != 0) {
        x = n % 10;
        n = n / 10;

        if (x % 2 == 1) {
            impar = 1;
            n == 0;
        }
    }

    if (impar == 0) cout << "Digitos pares" << endl;
    else cout << "Digitos nao pares" << endl;

    return 0;
}