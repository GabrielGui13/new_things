#include <iostream>

using namespace std;

const int MAX = 10;

void receberMatriz(char mx[][MAX], int nl, int nc);
void mostrarMatriz(char mx[][MAX], int nl, int nc);

int main() {
    return 0;
}

void receberMatriz(char mx[][MAX], int nl, int nc)
{
    for (int i = 0; i < nl; i++)
    {
        for (int j = 0; j < nc; j++)
        {
            cin >> mx[i][j];
        }
    }
}

void mostrarMatriz(char mx[][MAX], int nl, int nc)
{
    for (int i = 0; i < nl; i++)
    {
        for (int j = 0; j < nc; j++)
        {
            cout << mx[i][j] << " ";
        }
        cout << endl;
    }
}