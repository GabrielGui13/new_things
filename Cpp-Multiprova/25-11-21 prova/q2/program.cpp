#include <iostream>

using namespace std;

int main() {
    int n;          //inicializa a variavel de quantidade de itens do array
    cin >> n;       //recebe o valor da variavel
    int array[n];   //inicializa

    for (int i = 0; i < n; i++) { //cria um for com a quantidade de itens do array, e coloca um valor para cada um (valor que vem da entrada do usuario)
        cin >> array[i];
    }

    int venda, cont = 0; //inicializa a variavel do valor para comparacao de vendas, e o contador de quantas vendas
    cin >> venda; //recebe o valor da venda

    for (int y = 0; y < n; y++) { //percorre o array e checa quantas vendas houveram (valores iguais a variavel "venda")
        if (array[y] == venda) cont++; //se o valor do array for igual ao valor da venda, o contador eh incrementado em 1 unidade
    }

    if (cont == 0) cout << "Nao houve vendas com o valor " << venda << endl; //se nao houve vendas (contador igual a zero), digita essa frase
    else cout << "Houve " << cont << " vendas" << endl; //mostra a quantidade de vendas

    return 0;
}