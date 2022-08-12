#include<stdio.h>
#include<stdlib.h>

int nhapso()
{
	int n;
	printf("Nhap mot so de tinh giai thua: \n");
	scanf("%d",&n);
	return n;
}

void tinhgiaithua(int n)
{
	giaithua:
	int f=1;
	printf("Giai thua cua so %d: \n",n);
	if(n!=0)
	for(int i=n;i>0;i--)
	{
		f *= i;
	}
	else
	{
		printf("wrong input");
	}
	printf("%d",f);
	
}

int main()
{
	int n;
	char ch;
	while(1)
	{
		n=nhapso();
		tinhgiaithua(n);
		printf("\nban co muon tiep tuc: Y/N\n");
		scanf("%s",&ch);
		fflush(stdin);
		if(ch!='Y'&&ch!='y')
		{
			exit(0);
		}
	}

	return 0;
	
}
