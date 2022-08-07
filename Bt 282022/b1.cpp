#include<stdio.h>

int main()
{
	int i,arr[10];
	printf("Input number: \n");
	for(i=0;i<10;i++)
	{
		printf("*");
		scanf("%d",&arr[i]);
	}
	printf("Even number: \n");
	for(i=0;i<10;i++)
	{
		if(arr[i]%2==0)
		{
			printf("%d, ",arr[i]);
		}
	}
	return 0;
}

