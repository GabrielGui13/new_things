#include<iostream>

using namespace std;

int potencia(int x, int y);

int main() {
    int x, y;
    cin >> x >> y;

    if (x < -10 || x > 10 || y < 0 || y > 10) return 0;

    cout << potencia(x, y) << endl;

    return 0;
}

int potencia(int x, int y) {
    if (y == 0) return 1;
    return x * potencia(x, y - 1);
}