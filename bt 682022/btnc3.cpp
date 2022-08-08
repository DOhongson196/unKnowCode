#include<stdio.h>
#include<stdlib.h>

int main()
{
	int y,x=4,i,j;
	printf("Nhap vao so sinh vien: ");
	scanf("%d",&y);
	int **p;
	p=(int**)malloc(sizeof(int*)*y);
	for(i=0;i<y;i++)
	{
		p[i]=(int*)malloc(sizeof(int)*x);
	}
	for(i=0;i<y;i++)
	{
		for(j=0;j<x;j++)
		{
			printf("\nNhap sinh vien %d co diem mon %d: ",i+1,j+1);
			scanf("%d",&p[i][j]);
		}
	}
	for(i=0;i<y;i++)
	{
		printf("\nSinh vien %d co diem: ",i+1);
		for(j=0;j<x;j++)
		{
			printf("%d ",p[i][j]);
		}
		printf("\n");
	}
	for(i=0;i<y;i++)
	{
		free(p[i]);
	}
	free(p);
	return 0;
}
