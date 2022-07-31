#include<stdio.h>

int main()
{
	Fibonacci:
	int i,n;
	int f[1000];
	f[0]=0;
	f[1]=1;
	printf("--------------------------------------\n");
	printf("Input number: \n");
	printf("--------------------------------------\n");
	scanf("%d",&n);
	printf("Fibonacci: \n");
	printf("--------------------------------------\n");
	if(n<=31)
	{
		for(i=2;i<n;i++)
		{
			f[i] = f[i - 1] + f[i - 2];
			{
				if(f[i]<n)
				{
					printf("%d ",f[i]);
				}
			}

		}
	}
	else
	{
		printf("Wrong input\n");
		goto Fibonacci;
	}
	return 0;

}
