#include <stdio.h>
#include <string.h>
void upperCase(char s[]){
    int i,len;
    len=strlen(s);
    fflush(stdin);
    for(i=0;i<len;i++){
        if(s[i]>='a' && s[i]<='z')
            s[i]=s[i]-32;
    }
    printf("Chuoi ky tu da chuyen doi: %s",s);
}
int main()
{
    char s[50];
    printf("-------------------------------\n");
    printf("Nhap chuoi ky tu can chuyen doi: ");
    gets(s);
    printf("-------------------------------\n");
    upperCase(s);
    return 0;
}
