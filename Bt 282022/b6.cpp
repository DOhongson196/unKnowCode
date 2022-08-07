#include<stdio.h>

struct details
{
	char name[30];
} student[5];

int main()
{
	int i;
	printf("\nEnter the name of student: \n");
	for(i=0;i<5;i++)
	{
		gets(student[i].name);
	}
	printf("\n Name of student: \n");
	for(i=0;i<5;i++)
	{
		puts(student[i].name);
	}
	return 0;
}
