#include <stdio.h>

int main()
{
	int height,i,j;
	printf("input number\n");
	scanf("%d",&height);
	while(height>=2)
	{
		for(i=0;i<=height;i++)
		{
			printf("\n");			
			for(j=0;j<=i;j++)
			{
				printf("%c",'*');
			}	
		}

		break;
	}
    return 0;
   
}
