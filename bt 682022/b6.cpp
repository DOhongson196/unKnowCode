#include<stdio.h>
#include<conio.h>
#include<math.h>
#include<stdlib.h>

int checksonguyento(int *p1)
{
	int check=1;
	if(*p1<2)
	{
		check=0;
	}
	else
	{
		for(int i=2;i<=sqrt(*p1);i++)
		{
			if(*p1%2==0)
			{
				check=0;
			}
		}
		return check;
	}
}

int main()
{
	int i,n,*p;
	printf("So muon nhap vao: ");
	scanf("%d",&n);
	p=(int*)calloc(n,sizeof(int));
	if(p==NULL)
	{
		printf("\nKhong du bo nho tam!!!");
	}
	printf("\nNhap vao %d so: \n",n);
	for(i=0;i<n;i++)
	{
		printf("*");
		scanf("%d",p+i);
	}
	printf("\n--------------------------------");
	printf("\nDay so da nhap: \n");
		for(i=0;i<n;i++)
	{
		printf("%d ",p[i]);
	}
	printf("\n--------------------------------");
	printf("\nDay so nguyen to: \n");
		for(i=0;i<n;i++)
	{
		if(checksonguyento(p+i)==1)
		{
			printf("%d ",p[i]);
		}
	}
	return 0;
	
}
