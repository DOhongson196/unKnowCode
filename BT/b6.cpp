#include<stdio.h>
#include<stdlib.h>
#include<string.h>

void MultiplicationTable()
{
	multiplicationTable:
	int i,n;
	printf("Input number 1 to 9: \n");
	scanf("%d",&n);
	printf("MultiplicationTable\n");
	if(n>0&&n<=9)
	{
		for(i=1;i<=10;i++)
		{
			printf("%d * %d = %d\n",n,i,n*i);
		}
	}
	else
	{
		printf("Wrong input\n");
		goto multiplicationTable;
	}
	char ch;
	printf("Do you want continue Y/N: \n");
	scanf("%s",&ch);
	if(ch=='n' || ch=='N')
	{
		exit(0);
	}
	else if(ch=='y' || ch=='Y')
	{
		goto multiplicationTable;
	}
	else
	{
		printf("wrong input");
		goto multiplicationTable;
	}
	
}
int main()
{
	MultiplicationTable();
	return 0;
}
