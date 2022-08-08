#include<stdio.h>
#include<string.h>

void daonguoc(char ch[])
{
	int i;
	char *p;
	int len;
	p=&ch[0];
	len = strlen(ch);
	for(i=0;i<len/2;i++)
	{
		char temp=ch[i];
		ch[i]=ch[len-i-1];
		ch[len-i-1]=temp;
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


