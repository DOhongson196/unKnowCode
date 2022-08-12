#include<stdio.h>
#include<stdlib.h>

int nhapso()
{
	int n;
	printf("Nhap so tu 1 den 9: ");
	scanf("%d",&n);
	return n;
}

void bangcuuchuong(int n)
{
	if(n>0&&n<10)
	{
		printf("bang cuu chuong cua %d\n",n);
		for(int i=1;i<=10;i++)
		{
			printf("%d * %d = %d\n",n,i,n*i);
		}
	}
	else
	{
		printf("Wrong input\n");
	}
	
}

int main()
{
	int n;
	char ch;
	while(1)
	{
	n=nhapso();
	bangcuuchuong(n);
	printf("ban co muon tiep tuc: Y/N\n");
	fflush(stdin);
	scanf("%s",&ch);
	if(ch!='Y'&&ch!='y')
	{
		exit(0);
	}
	}
	return 0;
	
}
