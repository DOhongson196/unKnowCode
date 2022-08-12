#include<stdio.h>
#include<time.h>
#include<stdlib.h>

void so()
{
	srand((unsigned)time(NULL));
	switch(rand()%13+1)
	{
		case 1: printf("At");
		break;
		case 2: printf("Hai");
		break;
		case 3: printf("Ba");
		break;
		case 4: printf("Bon");
		break;
		case 5: printf("Nam");
		break;
		case 6: printf("Sau");
		break;
		case 7: printf("Bay");
		break;
		case 8: printf("Tam");
		break;
		case 9: printf("Chin");
		break;
		case 10: printf("Muoi");
		break;
		case 11: printf("Joker");
		break;
		case 12: printf("Queen");
		break;
		case 13: printf("King");
		break;
	}
	printf(" ",rand()%13+1);
}

void chu()
{
	srand((unsigned)time(NULL));
	
	switch(rand()%4+1)
	{
		case 1: printf("Ro");
		break;
		case 2: printf("Co");
		break;
		case 3: printf("Tep");
		break;
		case 4: printf("Bich");
	}
	printf("",rand()%4+1);
	
}

int main()
{
	char ch;
	while(1)
	{
	printf("Rut mot la bai: \n");
	so();
	chu();
	printf("\nBan co muon rut tiep: Y/N\n");
	scanf("%s",&ch);
	if(ch!='y'&&ch!='Y')
	{
		exit(0);
	}
	}

}
