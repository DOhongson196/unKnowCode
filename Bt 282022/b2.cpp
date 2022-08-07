#include<stdio.h>

int main()
{
	int i,a[5];
	float b[10];
	printf("Input number: \n");
	for(i=0;i<5;i++)
	{
		printf("*");
		scanf("%d",&a[i]);
	}
	for(i=0;i<10;i++)
	{
		if(i<5)
		{
			b[i]=a[i];
		}
		else
		{
			b[i]=0;
		}
	}
	printf("Show a: \n");
		for(i=0;i<5;i++)
	{
		printf("%d \n",a[i]);
	}
	printf("Show b: \n");
		for(i=0;i<10;i++)
	{
		printf("%f ",b[i]);
	}
		
	return 0;
}
