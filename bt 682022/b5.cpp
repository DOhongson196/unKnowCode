#include<stdio.h>
#include<conio.h>

int kiemtradodai(char *p)
{
	int count=0;
	while(*p!='\0')
	{
		*p++;
		count++;
	}
	return count;
}

int main()
{
	char ch[80];
	int len=0;
	printf("Nhap vao chuoi ky tu: \n");
	gets(ch);
	len=kiemtradodai(ch);
	printf("ky tu da nhap dai: %d",len);
	return 0;
}
