#include<stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
	char x;
	printf("Input:\n");
	for(;;)
	{
		x = getchar();
		fflush(stdin);
		if(x>='0' && x<='9')
		{
			printf("%c is number\n",x);
		}
		else if(x==10)
		{
			continue;	
		}
		else if((x>='a'&&x<='z')||(x>='A'&&x<='Z'))
		{
			printf("%c is character\n",x);
		}
		else if(x==32)
		{
			exit(0);
		}
		else
		{
			printf("%c is special character",x);
		}
	}	
	return 0;
}

