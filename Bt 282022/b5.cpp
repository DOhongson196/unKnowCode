#include<stdio.h>
#include<math.h>

int checkNumber(int n)
{
	int i,h,check=1;
	if(n<=1)
	{
		check=0;
	}
	else
	{
		for(i=2;i<=sqrt(n);i++)
		{
			if(n%2==0)
			{
				check=0;
			}
		}
		return check;
	}
}

int main()
{
	int i=0,j,min,max,a[5];
	while(i<5)
	{
		printf("Enter a prime number: \n");
		scanf("%d",&a[i]);
		if(checkNumber(a[i])==1)
		{
			i++;
		}
		else
		{
			printf("Not a prime number\n");
		}
		
	}
	max=a[0];
	min=a[0];
	printf("\nPrimes array: \n");
	for(int j=0;j<5;j++)
	{
		printf("%d, \n",a[j]);
		if(a[j<min])
		{
			min=a[j];
		}
		if(a[j>max])
		{
			max=a[j];
		}
	}
	printf("max= %d\n",max);
	printf("min= %d\n",min);
	return 0;
}

