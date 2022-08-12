#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void xucsac()
{
	int i;
	srand((unsigned)time(NULL));
	printf("Do xuc xac\n");
	printf("%d diem\n",rand()%6+1);
	
}

int main()
{
	char ch;
	while(1)
	{
		xucsac();
		printf("Ban co muon choi tiep: Y/N\n");
		scanf("%s",&ch);
		if(ch!='y'&&ch!='Y')
		{
			exit(0);
		}
	}
	return 0;
}
