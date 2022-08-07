#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
#include <time.h>

int main(){
    int i,n,r[20];
    int check=0;
    srand((int)time(0));
    printf("Random number: \n");
    for(i = 0; i < 20; ++i)
	{
        r[i] = rand();
        printf("Rand is: %d\n", r[i]);
    }
	printf("Input number: \n");
	scanf("%d",&n);
	for(i = 0; i < 20; ++i)
	{
		if(n==r[i])
		{
			check = 1;
		}

	}
	if(check==1)
	{
		printf("%d loop in array\n",n);
	}
	else
	{
		printf("%d no loop in array\n",n);
	}
	return 0;
}
