#include <stdio.h>
#include <math.h>

int main(){
	printf("Input three sides of triangle: \n");
	printf("--------------------------\n");
	printf("\nInput a,b,c: ");
	double a,b,c;
	scanf("%lf%lf%lf", &a,&b,&c);
	printf("p= %f\n", (a+b+c)/2);
	double p=(a+b+c)/2;
	printf("S= %f\n", sqrt(p*(p-a)*(p-b)*(p-c)));
	
	return 0;
}
