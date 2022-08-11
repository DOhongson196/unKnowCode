#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

void swap(int *x,int *y)
{
	int temp;
	temp=*x;
	*x=*y;
	*y=temp;
}

void bubbleSort(int n,int *p)
{
	int i,j;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n-i-1;j++)
		{
			if(p[j]>p[j+1])
			{
				swap(&p[j],&p[j+1]);
			}

		}
	}
}

void insertionSort(int n,int *p)
{
	int temp,i,j;
	for(i=1;i<n;i++)
	{
		j=i-1;
		temp=p[i];
		while((j>=0)&&(temp<p[j]))
		{
			p[j+1]=p[j];
			j--;
		}
		p[j+1]=temp;
	}
}

void displayResult(int n, int *p)
{
	int i;
	for(i=0;i<n;i++)
	{
		printf("%d ",p[i]);
	}
}

int main()
{
	int n=5;
	int arr[]={15,8,6,9,3};
	insertionSort(n,arr);
	displayResult(n,arr);
	
	return 0;
	
}
