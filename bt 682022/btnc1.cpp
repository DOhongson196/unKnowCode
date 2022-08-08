#include<stdio.h>
#include<string.h>

void daonguoc(char *p)
{
	int i;
	int len;
	len = strlen(p);
	for(i=0;i<len/2;i++)
	{
		char temp=p[i];
		p[i]=p[len-i-1];
		p[len-i-1]=temp;
	}
}

int main()
{
	char c[100];
	printf("Nhap vao chuoi ky tu: ");
	gets(c);
	printf("----------------------------------\n");
	printf("chuoi ky tu vua nhap: ");
	puts(c);
	printf("----------------------------------\n");
	printf("chuoi ky tu da dao nguoc: ");
	daonguoc(c);
	puts(c);
	return 0;
	
}


