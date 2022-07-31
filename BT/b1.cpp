#include<stdio.h>

int main()
{
	int i=0;
	printf("Cac so chan tu 0 den 100: \n");
	for(;i<100;i++)
	{
		if(i%2==0)
		{
			printf("%d ",i);
		}
	}
	return 0;
}
