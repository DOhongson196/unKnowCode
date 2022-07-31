#include <stdio.h>

int main()
{
	int i,n,k[100];
	int max,min;
	printf("Input: ");
	scanf("%d",&n);
	printf("-------------------------\n");
	for(i=0;i<n;i++)
	{
		printf("number: ");
		scanf("%d",&k[i]);
	}
	printf("-------------------------\n");
	max=k[0];
	for(i=0;i<n;i++)
	{
		if(k[i]>max)
		{
		max=k[i];
		}
	}
	printf("%d is biggest numer\n",max);
	min=k[0];
	for(i=0;i<n;i++)
	{
		if(k[i]<min)
		{
		min=k[i];
		}
	}
	printf("%d is smallest numer",min);
}
