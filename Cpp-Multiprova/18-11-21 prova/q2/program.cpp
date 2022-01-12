#include <iostream>

using namespace std;

bool primo(int n) { //inicializa a funcao chamada "primo" com retorno bool, o que significa que ela sempre vai retornar true ou false, recebe um parametro inteiro n para checar
    bool primo = true; //como padrao, todo numero que eh enviado pra funcao eh primo, entao primo = true

    if (n <= 1) { //se o numero inserido for menor ou igual a um, ele ja nao eh primo 
        return false; //retorna falso, pois nao eh primo
    }

    for (int i = 2; i < n; i++) { //cria um for pra percorrer do numero 2 ate o numero inserido, sem contar com ele
        if (n % i == 0) primo = false; //testa se o numero eh divisivel por algum numero que nao seja 1 ou ele mesmo
    }

    return primo; //retorna se eh primo ou nao
}

int main() {
    int min, max; //inicializa a variavel dos dois numeros do intervalo do usuario

    cin >> min >> max; //recebe os dois numeros

    for (int i = min; i <= max; i++) { //cria um for que percorre todos os numeros do intervalo dado entre min e max
        if (primo(i)) cout << i << endl; //checa cada nuumero se eh um numero primo, a funcao primo retorna se o numero eh primo ou nao
    } 

    return 0;
}
