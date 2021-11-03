#include<iostream>

using namespace std;

int main() 
{
    int a, b, aux;
    cin >> a >> b;

    cout << "Inicial: " << a << " " << b << endl;

    aux = a;
    a = b;
    b = aux;

    cout << "Final: " << a << " " << b << endl;
    return 0;
}
