#include<stdio.h>

int main()
{
	int a[5],b[5];
	int *p1,*p2,i;
	p1=&a[0];
	p2=&b[0];
	printf("Nhap gia tri cho a: \n");
	for(i=0;i<5;i++)
	{
		printf("*");
		scanf("%d",p1+i);
	}
	printf("\n-----------------------------------");
	printf("\nNhap gia tri cho b: \n");
	for(i=0;i<5;i++)
	{
		printf("*");
		scanf("%d",p2+i);
	}
	int suma=0,sumb=0;
	int c[5];
	int *p;
	p=&c[0];
	for(i=0;i<5;i++)
	{
		suma += *(p1+i);
		sumb += p2[i];
		*p=suma+sumb;
	}
	printf("Tong a: %d\n",suma);
	printf("Tong b: %d\n",sumb);
	printf("Tong c: %d",*p);
	return 0;
	
}
