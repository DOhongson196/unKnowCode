#include<stdio.h>

int main()
{
	int n,i;
	printf("Input number\n");
	scanf("%d",&n);
	int f=1;
	printf("factorial %d: \n",n);
	for(i=n;i>0;i--)
	{
		f *=i;
	}
	printf("%d",f);
    return 0;
}
