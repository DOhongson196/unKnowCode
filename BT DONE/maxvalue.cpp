#include <stdio.h>

int main(){
	printf("MaxValue\n");
	printf("---------\n");
	printf("\nInput random three number: ");
	int a,b,c;
	scanf("%d%d%d", &a,&b,&c);
	if(a==b && a==c){
		printf("Draw");
		}
	else if(a>=b){
		if(a>c){
			printf("%d is biggest number", a);
		}
		else{
			printf("%d is biggest number", c);
		}
	}
	else if(a<b){
		if(b>=c){
			printf("%d is biggest number", b);
		}
		else{
			printf("%d is biggest number", c);
		}
	}
	else {
		printf("Wrong input");
	}
	return 0;
}


