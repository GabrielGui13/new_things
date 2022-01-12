#include <iostream>

using namespace std;

const int MAX = 10; //constante para valor padrao da matriz 
void receberMatriz(int mx[][MAX], int nl, int nc); //assinatura da funcao para receber os elementos de uma matriz
bool procuraVetor(int mx[][MAX], int nl, int nc, int vetor[], int n); //assinatura da funcao para procurar o vetor na matriz

int main() {
    int l, c; //valores das linhas e colunas da matriz
    cin >> l >> c; //recebe os valores das linhas e colunas da matriz
    int m[MAX][MAX]; //inicializa a matriz com o valor padrao

    receberMatriz(m, l, c); //manda a matriz, a quantidade de linhas e de colunas para uma funcao responsavel por receber os elementos da matriz

    int n; //variavel do tamanho do vetor
    cin >> n; //recebe o tamanho do vetor
    int v[n]; //inicializa o vetor

    for (int i = 0; i < n; i++) {
        cin >> v[i]; //recebe os valores do vetor e os coloca nas posicoes
    }

    //cria uma variavel bool para receber o return da funcao procuraVetor que vai retornar "true" caso o vetor esteja na matriz e "false" caso nao 
    bool vetorOuNao = procuraVetor(m, l, c, v, n); //envia a matriz (m), a quantidade de linhas (l) e colunas (c), o vetor (v) e o tamanho do vetor (n) como parametro

    if (vetorOuNao) cout << "Achou vetor" << endl; //caso o resultado da funcao seja true, entao achou um vetor, e o programa imprime "Achou vetor"
    else cout << "Não achou vetor" << endl; //caso o resultado da funcao seja false, entao nao achou um vetor, e o programa imprime "Não achou vetor"

    return 0;
}

bool procuraVetor(int mx[][MAX], int nl, int nc, int vetor[], int n) { // recebe a matriz, as linhas e colunas, o vetor e o tamanho do vetor como parametro
    
    //caso o tamanho do vetor seja diferente da quantidade de elementos da linhas, o programa ja retorna false, pois nao teria como um vetor de 3 elementos ser igual a uma linha de 2 elementos e vice versa
    if (n != nc) return false; 

    for (int i = 0; i < nl; i++) { //cria um primeiro laco for para percorrer cada linha
        int aux = 0; //variavel auxiliar que vai servir para definir se o vetor deu match ou nao
        //a variavel comeca com 0, na verificacao, caso algum elemento do vetor esteja diferente das linhas da matriz, o aux vira 1, o que significa que nao achou vetor naquela linha em especifico

        for (int j = 0; j < nc; j++) { //laco for que vai servir para percorrer tanto o vetor quanto os elementos da linha da matriz
            if (vetor[j] != mx[i][j]) aux = 1; //caso algum elemento seja diferente o aux = 1, o que significa que nao achou vetor, quando o for maior vai checar a outra linha, o aux eh atribuido a 0 de novo
        }

        if (aux == 0) return true; 
        //caso no final da iteracao o aux continue com o valor 0, significa que nenhum valor estava diferente entre o vetor e a linha, o que significa que achou vetor, e dessa forma ja retorna true
    }

    return false; //caso nao ache nenhum vetor semelhante, retorna false 
}

void receberMatriz(int mx[][MAX], int nl, int nc) { //recebe a matriz, as linhas e colunas
    for (int i = 0; i < nl; i++) {
        for (int j = 0; j < nc; j++) {
            cin >> mx[i][j]; //coloca um valor em cada posicao da matriz
        }
    }
}

/* 
    O programa pede para receber uma matriz e um vetor, e em seguida verificar se alguma das linhas da matriz eh estritamente identica ao vetor,
    em relacao aos elementos e a ordem deles, tudo deve ser igual. A primeira coisa a fazer eh inicializar a constante MAX = 10 que representa o
    tamanho padrao das matrizes, apos isso vamos declarar a assinatura de duas funcoes, uma padrao para receber os valores da matriz chamada "receberMatriz",
    que foi previamente passada pelo professor, e outra funcao que a questao pede para criar chamada "procuraVetor", que deve receber a matriz e o vetor e 
    verificar se o vetor esta em alguma das linhas da matriz.

    A primeira coisa a se fazer eh declarar as variaveis "l" e "c" para ser os valores das linhas e colunas da matriz, apos isso recebe o valor dessas variaveis
    e entao declara a matriz com os valores MAX da constante padrao, ao final desses processos, passa a matriz, as linhas e as colunas por parametro da Funcao
    receberMatriz, que vai colocar os elementos nas posicoes certas da matriz. Apos acabar de definir a matriz, eh criada uma variavel "n" que representa o 
    tamanho do vetor, ao receber o valor dessa variavel, o vetor eh inicializado com a variavel n.

    Ao ter ja criado e configurado tanto a matriz como o vetor, todos os valores (matriz, linhas, colunas, vetor, tamanho do vetor) vao ser passados por
    parametro na funcao que nos criamos, que eh chamada procuraVetor, no main, esse funcao eh atribuida a uma variavel do tipo bool chamada vetorOuNao, como essa
    funcao vai retornar true or false, entao podemos atribuir a uma variavel, ja que ela vai nos dizer se achou o vetor nas linhas da matriz ou nao.

    A variavel procuraVetor primeiramente vai checar se o tamanho do vetor eh igual o tamanho dos elementos da linha (quantidade de colunas), pois seria
    impossivel um vetor de 4 elementos ser igual uma linha de 3 elementos, ou vice versa, e dessa forma ja retorna false, caso passe nessa primeira verificao, 
    serao criados dois lacos for, o primeiro vai percorrer os elementos de cada linha da matriz, e vai inicializar uma variavel chamada aux, que vai ser responsavel 
    por verificar se achou o vetor ou nao, o segundo laco for vai percorrer tanto os elementos do vetor quanto os elementos da linha da matriz, por isso que a primeira 
    verificacao existe, para certificar que vao ter o mesmo tamanho e nao dar conflito no for, inicialmente o aux eh sempre 0, que representa que achou o vetor, 
    no entanto no segundo for cada elemento do vetor eh comparado ao elemento da mesma posicao da linha, caso a comparacao de errado, o aux vira 1, que significa que nao 
    achou o vetor pois havia elementos diferentes, caso nenhum valor seja diferente, o valor permanece 0, o que vai significar que nenhum o vetor foi estritamente igual
    aquela linha da matriz, o que significa que achou o vetor, e um if apos o segundo for faz essa verificacao, e caso o aux continue 0, ele retorna true, se passar na
    primeira verificacao dos tamanhos, depois na verificacao de comparacao e mesmo assim nao der true, entao a funcao por padrao retorna false.

    Apos a funcao procuraVetor fazer seu trabalho e retornar true ou false para indicar se achou o vetor ou nao, a funcao main vai ter um if para mostrar na tela se 
    achou vetor ou nao, se a funcao retornar "true", significa que achou um vetor nas linhas da matriz, e vai retornar "Achou vetor", caso retorne false, significa que
    nenhuma das linhas da matriz era igual ao vetor, e dessa forma vai imprimir "Não achou vetor" na tela.
 */