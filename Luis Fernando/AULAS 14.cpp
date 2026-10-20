#include <stdio.h>

int main (){
	int temperatura;
	
    printf("Me fale a temperatura: ");
    scanf("%d", &temperatura);
	
	if (temperatura < 15){
    printf("\nFrio\n");
	
	}else if (temperatura >= 29){
	printf("\nQuente\n");	
	
	}else {
	  printf ("\nAgradavel !\n");	
	}	
 return 0;	
}