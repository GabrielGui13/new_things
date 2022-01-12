#include<iostream>

using namespace std;

int main() {
    int a, b, count; //declara a variavel da populacao da cidade a, cidade b, e o contador dos anos

    cin >> a >> b; //recebe os valores da populacao das cidades do usuario
    count = 0; //inicializa a variavel do contador

    while (b > a) { //cada repeticao representa 1 ano
        a = a + a * 0.035; //aumenta a populacao da cidade A em 3.5%
        b = b + b * 0.01;  //aumenta a populacao da cidade B em 1%
        count = count + 1; //registra 1 ano que passou na variavel do contador
    }

    cout << count; //mostra a quantidade de anos no final
    
    return 0;
}