#include<iostream>

using namespace std;

int main() {
    int x, y, numero, rep;

    cin >> x >> y;
    rep = 0;
    numero = 0;

    for (int i = x; i <= y; i++) {
        int count = 0;
        for (int j = x; j <= i; j++) {
            if (i % j == 0) count++;
        }

        if (count > rep) {
            rep = count;
            numero = i;
        }
    }

    cout << numero << endl;

    return 0;
}