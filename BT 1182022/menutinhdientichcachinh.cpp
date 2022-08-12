#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>


void Dientichhinhtron()
{
	double r;
	printf("Nhap vao r: \n");
	scanf("%lf", &r);
	printf("Circumference = %f\n", 2 * r * 3.14);
}
void Dientichhinhtamgiac()
{
	    float a, b, c, p, s=0;
          printf("Nhap canh thu nhat: ");
          scanf("%f", &a);
          printf("Nhap canh thu hai: ");
          scanf("%f", &b);
          printf("Nhap canh thu ba: ");
          scanf("%f", &c);
          if((a*a<b*b+c*c) && (b*b<a*a+c*c) && (c*c<b*b+a*a)) {
        		printf("------------------------------------------\n");
                printf("\nDay la ba canh cua tam giac");
                p = (a+b+c)/2;
                s = sqrt(p*(p-a)*(p-b)*(p-c));
                printf("\ndien tich cua tam giac la %f", s);
          } else
          		printf("------------------------------------------\n");
				printf("\nDay khong phai la ba canh cua tam giac\n");
                   
}
void Dientichhinhbinhhanh()
{
	double a,h;
	printf("Nhap canh canh day: \n");
	scanf("%lf", &a);
	printf("Nhap chieu cao: \n");
	scanf("%lf", &h);
	printf("Dien tich hinh binh hanh: %f\n",a*h);
}
void chunhat()
{
    float a, b, S;
    printf("\nNhap  2 canh hinh chu nhat: ");
    scanf("%f%f", &a, &b);
    S = a*b;
    printf("\nDien tich hinh thang la: %f\n", S);
}
void hinhthang()
{
    float a, h, S;
    printf("\nNhap canh day hinh thang: ");
    scanf("%f", &a);
    printf("\nNhap chieu cao hinh thang: ");
    scanf("%f", &h);
    S = a*h;
    printf("\nDien tich hinh thang la: %f\n", S);
}
void menu()
{
	int ch;
	while(1)
	{
		printf("------------------------------------------\n");
		printf("\t\tMenu\n");
		printf("------------------------------------------\n");
		printf("\n 1. Dien tich hinh tron");
		printf("\n 2. Dien tich hinh tam giac");
		printf("\n 3. Dien tich hinh binh hanh");
		printf("\n 4. Dien tich hinh chu nhat");
		printf("\n 5. Dien tich hinh thang");
		printf("\n 6. Exit");
		printf("\nEnter your choice: ");
		scanf("\n %d",&ch);	
		switch(ch)
		{
			case 1:
				Dientichhinhtron();
				break;
			case 2:
				Dientichhinhtamgiac();
				break;
			case 3:
				Dientichhinhbinhhanh();
				break;
			case 4:
				chunhat();
				break;
			case 5:
				hinhthang();
				break;
			case 6:
				exit(0);
		}		
	}
		
}
int main()
{
	menu();
	return 0;
}
