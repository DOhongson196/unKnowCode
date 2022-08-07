#include<stdio.h>

int main()
{
	char c[30];
	int i,space=10,size=0;
	printf("Input character: \n");
	for(i=0;i<10;i++)
	{
		c[i]=getchar();
		size++;
		if(c[i]==10)
		{
			break;
		}
	}
	printf("Show: \n");
	for(i=0;i<size;i++)
	{
		printf("%c = %d\n",c[i],c[i]);
	}
	return 0;
}
