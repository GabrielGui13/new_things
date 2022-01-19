#include<iostream>
#include<iomanip>

using namespace std;

double potencia(double x, double y);

int main() {
    cout << fixed << setprecision(3);

    double x, y;
    cin >> x >> y;

    if (x < -10 || x > 10 || y < -10 || y > 10) return 0;

    if (y < 0) cout << potencia(1 / x, y * -1) << endl;
    else cout << potencia(x, y) << endl;

    return 0;
}

double potencia(double x, double y) {
    if (y == 0) return 1;
    return x * potencia(x, y - 1);
}