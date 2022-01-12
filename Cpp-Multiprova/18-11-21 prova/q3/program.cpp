#include <iostream>
#include <iomanip>

using namespace std;

void calcularOpcoesVenda(float preco, float &vista, float &valorParcela, float &totalParcelado);

void simularVenda(float preco);

int main() {
    //nada aqui deve ser modificado

    float preco; //inicializa a variavel do preco

    cin >> preco; //recebe o preco

    simularVenda(preco); //chama a funcao que nos fizemos de inicializar venda

    return 0;
}

void calcularOpcoesVenda(float preco, float &vista, float &valorParcela, float &totalParcelado) { //recebe 4 parametros, e tres vao retornar por referencia
    //nada aqui deve ser modificado

    vista = preco * 0.95; //o valor a vista tem 5% de desconto, entao pega 95% do valor

    valorParcela = (preco * 1.1) / 4.0; //o valor parcelado tem 10% de juros adicionais, e eh dividido em 4 vezes para cada valor da parcela

    totalParcelado = preco * 1.1; //mostra o valor total se for parcelado, que eh o valor original com acrescimo de 1%
}

void simularVenda(float preco) {
    //forneça a implementação desta função
    //nenhuma outra parte do programa
    // deve/precisa ser mudada

    float vista, valorParcela, totalParcelado; //declara os valores de "retorno" por referencia

    calcularOpcoesVenda(preco, vista, valorParcela, totalParcelado); //chama a funcao para calcular as opcoes de venda

    cout << "Preco: " << (double) preco << endl; //imprime cada valor com um numero preciso de 0s, usando setprecision, funcao derivada do #include<iomanip>
    cout << "Preco a vista: " << (double) vista << endl;
    cout << "Valor parcela: " << (double) valorParcela << endl;
    cout << "Total parcelado: " << (double) totalParcelado << endl;
    cout << "Juros: " << (double) preco * 0.1 << endl; //o juros eh 10% do valor
}
