#include <stdio.h>

int main()
{
    FILE *arquivo;
    char nome[50];

    arquivo = fopen("nome.txt", "r");

    fgets(nome, 50, arquivo);

    printf("Nome lido: %s", nome);

    fclose(arquivo);

    return 0;
}