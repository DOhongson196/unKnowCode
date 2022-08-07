#include<stdio.h>

int main()
{
	int a[5]={1,2,3,4,5};
	int b[5]={4,5,6,7,8};
	int i,j,k;
	printf("Array a: \n");
	for(i=0;i<5;i++)
	{
		printf("%d ",a[i]);
	}
	printf("\n----------------------------------\n");
	printf("Array b: \n");
		for(i=0;i<5;i++)
	{
		printf("%d ",b[i]);
	}
	printf("\n----------------------------------\n");
	printf("Searching loop number: \n");
	for(j=0;j<5;j++)
	{
		for(k=0;k<j;k++)
		{
			if(a[j]==b[k])
			printf("Loop number: %d\n",b[k]);
		}
	}
	return 0;
}
