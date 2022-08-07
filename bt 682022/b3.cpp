#include<stdio.h>
#include<string.h>

int main()
{
	char *p,c[80];
	int i,len;
	p=&c[0];
	printf("Nhap vao ky tu: \n");
	gets(p);
	len=strlen(p);
	for(i=0;i<(len/2);i++)
	{
		if(p[i]==p[len-1-i])
		{
			printf("chuoi doi xung");
			break;
		}
		else
		{
			printf("khong phai chuoi doi xung");
			break;
		}
	}
	return 0;
}
