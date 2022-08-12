#include<stdio.h>
#include<math.h>
#include<stdlib.h>

int inputNumber()
{
	int num;
	printf("Nhap vao 1 so: \n");
	scanf("%d",&num);
	return num;
}

void checkNumber(int num)
{
	int i;
	int check=1;
	if(num<2)
	{
		check=0;
	}
	else
		for(i=2;i<=sqrt(num);i++)
		{
			if(num%2==0)
			{
			check=0;
			}
		}
	if(check==1)
	{
		printf("%d la so nguyen to",num);
	}
	else
	{
		printf("%d khong phai la so nguyen to",num);
	}
	
}

int main()
{
	int num;
	char ch;
	while(1)
	{
		num=inputNumber();
		checkNumber(num);
		printf("\nCo muon tiep tuc chuong trinh: Y/N\n");
		scanf("%s",&ch);
		fflush(stdin);
		if(ch!='y'&&ch!='Y')
		{
			exit(0);
		}
		
	}
	
	return 0;
}
