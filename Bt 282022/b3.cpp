#include<stdio.h>

int main()
{
	int max,min,i,a[10];
	printf("Input number: \n");
	int countmax,countmin;
	float sum;
	for(i=0;i<10;i++)
	{
		printf("*");
		scanf("%d",&a[i]);
	}
	max=a[0];
	min=a[0];
	for(i=0;i<10;i++)
	{
		if(a[i]>max)
		{
			max=a[i];
		}
		if(a[i]<min)
		{
			min=a[i];
		}
		
	}
	countmax=0;
	countmin=0;
	for(i=0;i<10;i++)
	{
		if(a[i]==max)
		{
			countmax++;
		}
		if(a[i]==min)
		{
			countmin++;
		}
	}
	sum=0;
	for(i=0;i<10;i++)
	{
		sum+=a[i];
	}
	
	printf("min: %d\n",min);
	printf("so lan min: %d\n",countmin);
	printf("max: %d\n",max);
	printf("so lan max: %d\n",countmax);
	printf("sum: %d\n",(int)sum);
	printf("trung binh cong : %f\n",(sum/10));
	

	return 0;
}
