#include<stdio.h>

int main()
{
	int i,n;
	printf("Input number: \n");
	scanf("%d",&n);
	printf("Divisor %d: ",n);
	for(i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			printf("%d ",i);
		}
	}
	return 0;
}
