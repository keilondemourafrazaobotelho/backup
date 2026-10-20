#include <stdio.h>



#include <stdio.h>
#include <string.h>

int main() {
    char usuario[50];
    char senha[50];

    do {
        printf("Digite o nome de usuario: ");
        scanf("%s", usuario);

        printf("Digite a senha: ");
        scanf("%s", senha);

        if (strcmp(usuario, senha) == 0) {
            printf("Erro: a senha nao pode ser igual ao nome de usuario.\n");
        }

    } while (strcmp(usuario, senha) == 0);

    printf("Cadastro realizado com sucesso!\n");

    return 0;
}