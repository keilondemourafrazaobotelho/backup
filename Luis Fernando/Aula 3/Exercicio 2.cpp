
#include <stdio.h>

int main(){
  int codigo;
	
	printf("Digite um numero de 1 a 4: ");
	scanf("%d", &codigo);
	
	printf("\nO item escolhido foi:\n");
	
	switch (codigo){
		case 1:
			printf("\n\Hamburguer\n");
	    		break;
	    
		case 2:
			printf("\nPizza\n");
			break;
	    
		case 3:
			printf("\nSalada\n");
		    break;
        
        
		case 4:
		    printf("\nSuco\n");
            break;
		 default:
         	
		printf("Numero inexistente");
    
}
    return 0;
}

