#include<iostream>

using namespace std;

int main() {
    int n; //inicializa a variavel de quantidade de itens do array
    cin >> n; //recebe o valor da variavel
    float array[n]; //inicializa 

    for (int i = 0; i < n; i++) { //cria um for com a quantidade de itens do array, e coloca um valor para cada um (valor que vem da entrada do usuario)
        cin >> array[i];
    }

    float maior = array[0], menor = array[0]; //define um valor base para o maior e o menor numero, no caso o primeiro numero do array

    for (int y = 0; y < n; y++) { //percorre o array para definir qual o maior e o menor numero, fazendo as comparacoes
        if (array[y] > maior) maior = array[y]; //se o numero atual for maior que a variavel "maior", troca para o atual
        if (array[y] < menor) menor = array[y]; //se o numero atual for menor que a variavel "menor", troca para o atual
    }

    cout << "Maior: " << maior << " Menor: " << menor << endl; //mostra os valores

    return 0;
}