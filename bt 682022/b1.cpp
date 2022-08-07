#include<stdio.h>

int main()
{
	int a,b;
	int *p1,*p2;
	p1=&a;
	p2=&b;
	*p1=3;
	*p2=5;
	printf("Number a: %d\tNumber b: %d\n",a,b);
	printf("Number a: %d\tNumber b: %d\n",&a,&b);
	printf("----------------------------------------------------------------\n");

	p1=&b;
	p2=&a;
	*p1=3;
	*p2=5;
	printf("Number a: %d\tNumber b: %d\n",a,b);
	printf("Number a: %d\tNumber b: %d\n",&a,&b);
	
	return 0;
}
