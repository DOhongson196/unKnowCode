#include<stdio.h>

int power(int a,int n)
{
	int result=1;
	for(int i=1;i<=n;i++)
	{
		result *= a;
	}
	return result;
}

int main()
{
	int a,n;
	printf("Nhap vao so: ");
	scanf("%d",&a);
	printf("Nhap vao so mu: ");
	scanf("%d",&n);
	power(a,n);
	printf("Ket qua: %d",power(a,n));
	return 0;
}
