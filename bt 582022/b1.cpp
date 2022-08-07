#include<stdio.h>

int main()
{
	int a[10]={1,3,5,2,9,4,7,3,5,6};
	printf("Show array: \n");
	int i,j,k,n;
	for(i=0;i<10;i++)
	{
		printf("%d ",a[i]);
	}
	printf("\n----------------------------------\n");
	printf("Sorted array: \n");
	for(i=0;i<10;i++)
	{
		for(n=0;n<10-i-1;n++)
		{
			if(a[n]>a[n+1])
			{
				int temp=a[n];
				a[n]=a[n+1];
				a[n+1]=temp;
			}
		}
	}
	for(i=0;i<10;i++)
	{
		printf("%d ",a[i]);
	}
	printf("\n----------------------------------\n");
	printf("Enter number J&K: \n");
	scanf("%d%d",&j,&k);
	printf("Sorted array j&k: \n");
		for(i=j;i<=k;i++)
		{
			printf("%d ",a[i]);

		}

	
	return 0;
}
