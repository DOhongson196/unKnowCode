#include<stdio.h>
#include<stdlib.h>

int inputNum(int *a,int *b)
{
	printf("Input number a: \n");
	scanf("%d",a);
	printf("Input number b: \n");
	scanf("%d",b);
	return *a,*b;
}

int sum(int a,int b)
{
	inputNum(&a,&b);
	int sum=0;
	sum=a+b;
	printf("%d + %d = %d\n",a,b,sum);
	return sum;
	
}

int sub(int a,int b)
{
	inputNum(&a,&b);
	int sub=0;
	sub=a-b;
	printf("%d - %d = %d\n",a,b,sub);
	return sub;
}

int multi(int a,int b)
{
	inputNum(&a,&b);
	int multi=0;
	multi=a*b;
	printf("%d * %d = %d\n",a,b,multi);
	return multi;
	
}

double divi(int a,int b)
{
	double div;
	inputNum(&a,&b);
	if(b!=0)
	{
		div=(double) a / b;
		printf("%d / %d = %f\n",a,b,(double)div);
	}
	else
	{
		printf("Wrong input\n");
	}
	return div;
}

void menu()
{
	int a,b;
	int ch;
	while(1)
	{
		printf("-------------------------------\n");
		printf("------------TINH TOAN----------\n");
		printf("-------------------------------\n");
		printf("1. Nhap so\n");
		printf("2. Tinh tong\n");
		printf("3. Tinh hieu\n");
		printf("4. Tinh tich\n");
		printf("5. Tinh thuong\n");
		printf("6. Thoat\n");
		printf("Enter choice\n");
		scanf("%d",&ch);
		switch(ch)
		{
			case 1:
				inputNum(&a,&b);
				break;
			case 2:
				sum(a,b);		
				break;
			case 3:
				sub(a,b);	
				break;
			case 4:
				multi(a,b);
				break;
			case 5:
				divi(a,b);
				break;
			case 6:
				exit(0);
			
		}
	}
}

int main()
{
	menu();
	return 0;
}
