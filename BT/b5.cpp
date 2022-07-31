#include<stdio.h>

int main()
{
	int num,result=0;
	printf("Input num: \n");
	scanf("%d",&num);
		if(num>=0 && num<100)
		{
			for(result;result<num;result++)
			{
				printf("%d ",result);
			}
		}
		else
		{
			printf("%d",result);
		}
	
	return 0;
}
