#include<stdio.h>
#include<math.h>

int main()
{
	printf("------------------------------------------\n");
	float a, b, c, p, s=0;
        printf("Nhap canh thu nhat: ");
        scanf("%f", &a);
        printf("Nhap canh thu hai: ");
        scanf("%f", &b);
        printf("Nhap canh thu ba: ");
        scanf("%f", &c);
    	if((a+b>c) && (a+c>b) && (b+c>a) && (a>b-c) && (b>a-c) && (c>a-b))
		{
        	printf("------------------------------------------");
            printf("\nDay la ba canh cua tam giac");
            p = (a+b+c)/2;
            s = sqrt(p*(p-a)*(p-b)*(p-c));
            printf("\nDien tich cua tam giac la: %f", s);
        } 
		else
		{
          	printf("------------------------------------------\n");
			printf("\nDay khong phai la ba canh cua tam giac\n");
		}
	return 0;
		
}
