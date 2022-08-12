#include<stdio.h>
#include<math.h>
#include<stdlib.h>
#include<time.h>

void init(int *ary)
{
	int i;
	srand((unsigned)time(NULL));
	for(i=0;i<20;i++)
	{
		ary[i]=rand()%100+1;
	}
	printf("Already random number\n");
}

void display(int *ary)
{
	int i;
	printf("\nDisplay all elements: \n");
	for(i=0;i<20;i++)
	{
		printf("%d ",ary[i]);
	}
	
}

int getMax(int *ary)
{
	int i;
	int max;
	max=ary[0];
	for(i=1;i<20;i++)
	{
		if(max<ary[i])
		{
			max=ary[i];
		}
	}
	return max;
	
}


float getAvg(int *ary)
{
	int i;
	int sum=0;
	float avg;
	for(i=0;i<20;i++)
	{
		sum += ary[i];
	}
	avg = (float) sum/20;
	printf("Avg value is: %f\n",avg);
	return avg;
	
}

void findValue(int *ary)
{
	int i,f;
	scanf("%d",&f);
	for(i=0;i<20;i++)
	{
		if(f==ary[i])
		{
			printf("%d loop number in position %d\n",f,i);
			break;
		}
	}
	
}

void menu()
{
	int *arr;
	arr=(int*)malloc(20*sizeof(int));
	int ch;
	while(1)
	{
		printf("\n-------------------------------\n");
		printf("--------------Menu-------------\n");
		printf("-------------------------------\n");
		printf("1. Init fuction\n");
		printf("2. Display all array\n");
		printf("3. Get max value\n");
		printf("4. Get avg value\n");
		printf("5. Find by valuen\n");
		printf("6. Exit\n");
		printf("Enter your choice: \n");
		scanf("%d",&ch);
		switch(ch)
		{
			case 1: init(arr);
			break;
			case 2: display(arr);
			break;
			case 3: printf("Max value is: %d\n",getMax(arr));
			break;
			case 4: getAvg(arr);
			break;
			case 5: findValue(arr);
			break;
			case 6: exit(0);
			
		}
	}
}

int main()
{
	menu();
	return 0;
}
