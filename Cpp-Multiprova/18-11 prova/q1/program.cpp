#include<iostream>

using namespace std;

int maximo(int n1, int n2, int n3) { //criacao da funcao que recebe 3 parametros, 3 inteiros, que representam a entrada do usuario
    int maior = n1; //criacao de uma variavel maior, nela eha tribuida inicialmente um dos numeros para usar como base pras comparacoes

    if (n2 > maior) maior = n2; //se o n2 for maior que a variavel "maior", que no caso eh o n1, entao o valor eh trocado para o n2 ser o maior
    if (n3 > maior) maior = n3; //se o n3 for maior que a variavel "maior", que no caso eh o n1 ou o n2, entao o valor eh trocado para o n3 ser o maior

    return maior; //eh retornado a variavel maior, que anteriormente foi testada entre os 3 numeros para checar o maior
}

int main() {
    int n1, n2, n3; //declaracao dos 3 numeros que vao ser dados pelo usuario ouu programa

    cin >> n1 >> n2 >> n3; //recebe os 3 numeros

    cout << maximo(n1, n2, n3) << endl; //aqui ele imprime o retorno da funcao, que sempre vai retornar o maior numero dos 3 que forem inseridos
    //os 3 numeros anteriormente dados pelo usuario, sao passados por parametro para a funcao chamada maximo, que retorna o maior numero

    return 0;
}
