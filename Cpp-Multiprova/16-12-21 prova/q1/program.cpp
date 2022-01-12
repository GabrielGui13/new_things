#include<iostream>

using namespace std;

int main() {
    int ne1, ne2; //variaveis de elementos do tamanho da matriz
    
    cin >> ne1; //atribui a variavel quantos elementos o vetor 1 vai ter
    int v1[ne1]; //inicializa o vetor com o tamanho da variavel

    for (int i = 0; i < ne1; i++) {
        cin >> v1[i]; //atribui os valores do usuario para cada posicao do vetor
    }

    cin >> ne2; //atribui a variavel quantos elementos o vetor 2 vai ter
    int v2[ne2]; //inicializa o vetor com o tamanho da variavel

    for (int i = 0; i < ne2; i++) {
        cin >> v2[i]; //atribui os valores do usuario para cada posicao do vetor
    }

    int count = 0; //variavel que vai armazenar a quantidade de elementos que um vetor tem em comum com o outro

    for (int i = 0; i < ne1; i++) { //seleciona um dos valores do primeiro vetor
        for (int j = 0; j < ne2; j++) { //percorre todos os valores do segundo vetor
            if (v1[i] == v2[j]) count++; //checa se o elemento do primeiro vetor esta contido no segundo vetor, caso verdade, incrementa o count
        }
    }
    
    if (count == 0) cout << "Sem elementos" << endl; //se a variavel count continuar em 0, signifca que nao teve elementos iguais, entao imprime sem elementos
    else cout << count << " elementos" << endl; //caso tenha um valor, imprime na tela a quantidade de elementos iguais

    return 0;
}

/* 
    O programa pede um calculo que receba dois vetores cada um com seu proprio tamanho, depois disso tem que comparar ambos
    e checar se os numeros/elementos do primeiro vetor estao dentro do segundo vetor, com isso tem que contar quantos
    elementos do primeiro vetor sao iguais ao mesmo elemento do segundo vetor.

    A primeira coisa a fazer eh receber qual o tamanho do primeiro vetor, que eh armazenado na variavel "ne1", ao receber o
    valor dessa variavel, o primeiro vetor chamado "v1" eh inicializado, e apos isso eh criado um laco for para receber o valor
    de cada elemento do vetor, a mesma coisa tambem eh feita para o segundo vetor.

    Apos termos cada vetor inicializado e com seus proprios valores, vai ter um laco for responsavel por pegar cada elemento
    do primeiro vetor, e checar se ele existe no segundo vetor, um laco for eh criado para percorrer o primeiro vetor, e um
    outro laco for dentro dele eh criado para percorrer o segundo vetor.

    Caso o if encontre algum elemento do primeiro vetor que esteja no segundo vetor, ele incrementa a variavel count, que no
    final de tudo vai dizer quantos elementos iguais ele encontrou. Na hora de mostrar o resultado, um if checa se o count eh igual a zero, se sim
    significa que nenhum elemento deu match com o segundo vetor, ou seja, nenhum elemento do primeiro vetor existe no segundo, e
    a partir disso eh impresso "Sem elementos", caso contrario, eh impresso a quantidade de elementos iguais em comum, como por ex: "2 elementos". 
 */