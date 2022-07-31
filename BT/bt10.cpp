#include <stdio.h>
#include <math.h>
 
int main()
{
	BinarytoDeciaml:
	int a[100];
	int n,i;
	printf("Input number: \n");
	printf("---------------------------\n");
	scanf("%d",&n);
	if(n>0 && n<=31)
	{
		printf("Binary to Decimal:\n");
		for(i=0;n>0;i++)
		{
		a[i]=n%2;
		n=n/2;
		}
		printf("---------------------------\n");	
		for(i=i-1;i>=0;i--)
		{
		printf("%d",a[i]);  
		}
		
	}
	else
	{
		printf("Wrong input\n");
		goto BinarytoDeciaml;
	}

	return 0;
}
