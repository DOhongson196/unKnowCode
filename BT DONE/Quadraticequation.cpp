#include <stdio.h>
#include <math.h>

int main(){
	printf("Solving Quadratic equation\n");
	printf("--------------------\n");
	printf("\nInput a,b,c: ");
	double a,b,c;
	scanf("%lf%lf%lf", &a,&b,&c);
	double d=b*b-4*a*c;
	if(a==0){
		if(b==0 && c==0){
			printf("No result");
		}
		if(b!=0){
			printf("x= %f\n", -c/b);
		}
		else{
			printf("Wrong input\n");
		}
	}
	else if(a!=0){
		printf("Delta= %f\n", d);
		if(d>0){
			printf("x1= %lf\n",(-b+sqrt(d))/(2*a));
			printf("x2= %lf\n",(-b-sqrt(d))/(2*a));
		}
		if(d==0){
			printf("x= %lf\n", (-b)/ (2*a) );
		}
		if(d<0){
			printf("No result");
		}
	}
	else{
		printf("Wrong input");
	}
	

	return 0;
}
