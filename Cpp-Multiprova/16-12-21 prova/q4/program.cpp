#include<iostream>

using namespace std;

int main() {
    int n1; //inicializa a variavel do tamanho do primeiro vetor
    cin >> n1; //recebe o tamanho do primeiro vetor
    if (n1 > 10) return 0; //checa se o tamanho do vetor eh maior que 10, se sim, ele finaliza o programa com return 0;
    
    int v1[n1]; //cria o primeiro vetor com o tamanho n1

    for (int i = 0; i < n1; i++) {
        cin >> v1[i]; //recebe cada valor do vetor nas posicoes especificas
    }

    int n2; //inicializa a variavel do tamanho do segundo vetor
    cin >> n2; //recebe o tamanho do segundo vetor
    if (n2 > 10) return 0; //checa se o tamanho do vetor eh maior que 10, se sim, ele finaliza o programa com return 0;

    int v2[n2]; //cria o segundo vetor com o tamanho n2

    for (int i = 0; i < n2; i++) {
        cin >> v2[i]; //recebe cada valor do vetor nas posicoes especificas
    }

    int count = 0; //cria um contador para checar quantos elementos do primeiro vetor tem um correspondente no segundo vetor
    for (int i = 0; i < n1; i++) { //cria um laco for para percorrer cada elemento do primeiro vetor
        int aux = 0; //variavel auxiliar para contar quantos elementos tem um correspondente no segundo vetor
        //por padrao eh 0, que significa que nao tem correspondente, ja se tiver 1, significa que tem correspondente 

        for (int j = 0; j < n2; j++) { //segundo laco for para percorrer cada elemento do segundo vetor
            if (v1[i] == v2[j]) aux = 1; //compara um elemento do primeiro vetor com cada elemento do segundo vetor, se achar um correspondente a variavel aux = 1
        }

        if (aux == 1) count++; //caso a variavel aux esteja em 1, significa que achou algum correspondente dentro do laco, entao incrementa a variavel count
    }

    if (count == n1) cout << "Tem todos"; //caso a quantidade de correspondentes seja igual, imprime "Tem todos"
    else cout << "Não tem todos"; //caso nao, imprime "Não tem todos"

    return 0;
}