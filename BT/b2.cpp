#include<stdio.h>

int main()
{
	int n,a;
	int sum=0;
	printf("Input number \n");
	scanf("%d",&n);
	for(;n!=0;)
	{
		a = (n%10);
		sum += a;
		n /= 10;
	}
	printf("Result: \n");
	printf("%d",sum);
	return 0;
}
