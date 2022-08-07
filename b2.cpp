#include<stdio.h>
#include<stdlib.h>

int main()
{
	int *p;
	int n=5;
	p=(int*)calloc(n,sizeof(int));
	
	printf("Input %d number: \n",n);
	for(int i=0;i<n;i++)
	{
		printf("*");
		scanf("%d",p+i);
	}
	printf("\nShow number: ");
	{
		for(int i=0;i<n;i++)
		{
			printf("%d ",p[i]);
		}
	}
	return 0;
	
	
}
