export const Cprograms = [
    {
      id: 1,
      name: " GCD P1",
      code: `
   #include <stdio.h>
   #include<conio.h>

int gcd(int m ,int n){
    if(n == 0) 
     return m;
     if(m<n)
       return gcd(n,m);
       return gcd(n,m%n);
}

void main(){
    int m,n,res;
    clrscr();
    printf("Enter the value for M and N : ");
    scanf("%d %d",&m,&n);
    res = gcd(m,n);
    printf("GCD(%d,%d) = %d ",m,n,res);
    getch();
}
      `
    },
    {
      id: 2,
      name: "Pascal Triangle P2",
      code: `
 #include <stdio.h>

long factorial(int n);

void main() {
    int n, i, c;
    clrscr();
    printf("Enter the number of rows in Pascal's triangle: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
	// Print leading spaces for formatting
	for (c = 0; c < n - i - 1; c++) {
	    printf(" ");
	}

	// Print the coefficients for the current row
	for (c = 0; c <= i; c++) {
	    printf("%ld ", factorial(i) / (factorial(c) * factorial(i - c)));
	}

	printf("\n"); // Move to the next line after each row
    }

    getch();
}

long factorial(int n) {
     int c ;
    long result = 1;
    for ( c = 1; c <= n; c++) {
	result *= c;
    }
    return result;
}

      `
    },
    {
      id: 3,
      name: " Fibonacchi P3",
      code: `  
 #include <stdio.h>
 #include<conio.h>

int fib(int n){
  if(n==0)
    return 0;
    if(n==1)
    return 1;
    return fib(n-1)+fib(n-2) ;

}
void main(){
  int n,i ;
  clrscr();
  printf("Enter the Number Squence in fibonnachi : \n ");
  scanf("%d",&n);
  printf(" %d Fibonnachi Numbers are : ",n);
  for(i=0;i<n;i++)
    printf("%d \n ",fib(i));
  getch();

}
      `
    },
    {
      id: 4,
      name: " TowerOfHanoi P4",
      code: `
         
#include<stdio.h>
#include<conio.h>

 void  tower( int n , char source, char temp , char dest  ){
  if(n ==1){
   printf("Move disc  %d from %c to %c  ",n,source,dest);
   return ;
  }
  tower(n-1,source,dest,temp);
  printf("Move disc  %d from %c to %c \n ",n,source,dest);
  tower(n-1,temp,source,dest);
}

void main(){
 int n ;
 clrscr();
 printf("Enter the numbers of Disc : ");
 scanf("%d",&n);
 tower(n,'A','B','c');
 getch();
}
      `
    },
    {
      id: 5,
      name: "DynamicArrayToFind,S&L,Num P5",
      code: `
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
int main() {
    int *ptr = NULL;
    int i, len = 0, small, large;
    clrscr();
    printf("Enter the size of the array: ");
    scanf("%d", &len);

    // Allocate memory for the array
    ptr = (int*)malloc(len * sizeof(int));


    printf("Enter the elements: ");
    for (i = 0; i < len; ++i) {
	scanf("%d", &ptr[i]);
    }

    // Initialize large and small
    large = small = ptr[0];

    for (i = 0; i < len; ++i) {
	if (ptr[i] > large) {
	    large = ptr[i];
	}
	if (ptr[i] < small) {
	    small = ptr[i];
	}
    }

    printf("Array elements are: ");
    for (i = 0; i < len; ++i) {
	printf("%d \n ", ptr[i]);
    }
    printf("\nLargest number is = %d\n", large);
    printf("Smallest number is = %d\n", small);

    // Free the allocated memory
    free(ptr);
    getch();
    return 0;
}

      `
    },
    {
      id: 6,
      name: " ArrangingCity P6",
      code: `
#include <stdio.h>
#include<conio.h>
#include<string.h>

void main(){
 char name[10][20],tname[10][20],temp[20];
 int n,i,j;
 clrscr();
 printf("Enter the Number of cities : ");
 scanf("%d",&n);
 printf("Enter the City Name: \n");
 for(i=0;i<n;i++){
     scanf("%s",name[i]);
     strcpy(tname[i],name[i]);
 }
 for(i=0;i<n-1;i++){
   for(j=i+1;j<n;j++){
      if(strcmp(name[i],name[j])>0){
	strcpy(temp ,name[i]);
	strcpy(name[i],name[j]);
	strcpy(name[j],temp);
      }
   }
 }
 printf(" Inputed Name \t sorted Name\n ");
 for(i=0;i<n;i++){
   printf(" %s \t\t %s \n ", tname[i],name[i]);
 }
 getch();
 }
      `
    },
    {
      id: 7,
      name: "SelectionSort P7",
      code: `
#include<stdio.h>
#include<conio.h>

void main(){
 int n,i,j,pos,a[20],temp;
 clrscr();
 printf("Enter the Numbers of items : \n");
 scanf("%d",&n);
 printf("Enter the items : \n");
 for(i=0;i<n;i++){
  scanf("%d",&a[i]);
  }
  for(i=0;i<n-1;i++){
  pos=i;
   for(j=i+1;j<n;j++){
	if(a[j]<a[pos] )
	  pos =j ;
   }
   temp = a[pos];
   a[pos] = a[i];
   a[i] = temp ;
  }
  printf("Sorted Elements : \n");
  for(i=0;i<n;i++){
   printf("%d \n ",a[i]);
  }
  getch();
 }
      `
    },
    {
      id: 8,
      name: "Program 8",
      code: ``
    },
    {
      id: 9,
      name: "Program 9",
      code: ``
    },
    {
      id: 10,
      name: "Program 10",
      code: ``
    },
    {
      id: 11,
      name: "Program 11",
      code: ``
    },
    {
      id: 12,
      name: "Program 12",
      code: ``
    },
    {
      id: 13,
      name: "Program 13",
      code: ``
    },
    {
      id: 14,
      name: "Program 14",
      code: ``
    }
  ];