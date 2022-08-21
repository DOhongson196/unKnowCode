#include<stdio.h>
#include<stdlib.h>
#include<string.h>

void nhapkytu(char *arr)
{
	printf("Nhap vao chuoi ky tu: \n");
	gets(arr);
}

void hoa(char *arr)
{
	for(int i=0;i<strlen(arr);i++)
	{
		if(arr[i]>='a'&&arr[i]<='z')
		{
			arr[i] -= 32;
		}
	}
	printf("%s",arr);

}

void thuong(char *arr)
{
		for(int i=0;i<strlen(arr);i++)
	{
		if(arr[i]>='A'&&arr[i]<='Z')
		{
			arr[i] += 32;
		}
	}
	printf("%s",arr);
	
}

void menu()
{
	char *arr;
	int ch;
	arr=(char*)malloc(100*sizeof(char));
	nhapkytu(arr);
		while(1)
	{
		printf("\n-------------------------------\n");
		printf("--------------Menu-------------\n");
		printf("-------------------------------\n");
		printf("1. Doi thanh in hoa\n");
		printf("2. Doi thanh in thuong\n");
		printf("3. Exit\n");
		printf("Enter your choice: \n");
		scanf("%d",&ch);
		switch(ch)
		{
			case 1: hoa(arr);
			break;
			case 2: thuong(arr);
			break;
			case 3: exit(0);		
		}
	
	}	
}

int main()
{
	menu();
	return 0;
}

