export const Cprograms = [
    {
      id: 1,
      name: " BOX-1",
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
      name: "BOX-2",
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
      name: " BOX-3",
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
      name: "BOX-4",
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
      name: "BOX-5",
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
      name: "BOX-6",
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
      name: "BOX-7",
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
      name: "BOX-8",
      code: `
#include <stdio.h>
#include<conio.h>

void insertion(int n, int a[]) {
    int i, j, item;
    for (i = 1; i < n; i++) {
	item = a[i];
	j = i - 1;
	while (j >= 0 && item < a[j]) {
	    a[j + 1] = a[j];
	    j = j - 1;
	}
	a[j + 1] = item;
    }
}

void  main() {
    int i, n, a[20];
    clrscr();
    printf("Enter the size of array: \n");
    scanf("%d", &n);
    printf("Enter %d elements: \n", n);
    for (i = 0; i < n; i++) {
	scanf("%d", &a[i]);
    }
    insertion(n, a);
    printf("Sorted elements are: \n");
    for (i = 0; i < n; i++) {
	printf("%d\n", a[i]);
    }
    getch();

}

      `
    },
    {
      id: 9,
      name: "1BOX-9",
      code: `
#include <stdio.h>

int partition(int a[], int low, int high) {
    int i, j, key, temp;
    key = a[low];
    i = low + 1;
    j = high;

    while (1) {
	while (i <= high && a[i] <= key)
	    i++;
	while (j >= low && a[j] > key)
	    j--;

	if (i < j) {

	    temp = a[i];
	    a[i] = a[j];
	    a[j] = temp;
	} else {

	    temp = a[low];
	    a[low] = a[j];
	    a[j] = temp;
	    return j;
	}
    }
}

void quick_sort(int a[], int low, int high) {
    int j;
    if (low < high) {
	j = partition(a, low, high);
	quick_sort(a, low, j - 1);
	quick_sort(a, j + 1, high);
    }
}

int main() {
    int n, i, a[20];
    clrscr();
    printf("Enter the number of elements (max 20): ");
    scanf("%d", &n);




    printf("Enter the values:\n");
    for (i = 0; i < n; i++) {
	scanf("%d", &a[i]);
    }

    quick_sort(a, 0, n - 1);

    printf("Sorted Elements are:\n");
    for (i = 0; i < n; i++) {
	printf("%d ", a[i]);
    }
    printf("\n");
    getch();
    return 0;
}

      
      `
    },
    {
      id: 10,
      name: "BOX-10",
      code: `
#include <stdio.h>

void simple_sort(int a[], int low, int mid, int high) {
    int i = low, j = mid + 1, k = low;
    int c[100];

    // Merge the two halves
    while (i <= mid && j <= high) {
        if (a[i] < a[j]) {
            c[k++] = a[i++];
        } else {
            c[k++] = a[j++];
        }
    }

    // Copy remaining elements from left half
    while (i <= mid) {
        c[k++] = a[i++];
    }

    // Copy remaining elements from right half
    while (j <= high) {
        c[k++] = a[j++];
    }

    // Copy sorted subarray into original array
    for (i = low; i <= high; i++) {
        a[i] = c[i];
    }
}

void merge_sort(int a[], int low, int high) {
    int mid;
    if (low < high) {
        mid = (low + high) / 2;
        merge_sort(a, low, mid);
        merge_sort(a, mid + 1, high);
        simple_sort(a, low, mid, high);
    }
}

int main() {
    int i, n, a[30];
    clrscr();
    printf("Enter the size of array: ");
    scanf("%d", &n);
    printf("Enter the values:\n");
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }
    merge_sort(a, 0, n - 1);
    printf("Sorted Elements:\n");
    for (i = 0; i < n; i++) {
        printf("%d\n", a[i]);
    }
    getch();
    return 0;
}

      `
    },
    {
      id: 11,
      name: "BOX-11🔍",
      code: `
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

void bubble_sort(int a[], int n);
int search(int key, int a[], int n, int *pos);

int main() {
    int i, n, ch, pos, a[27], key;
    clrscr();
    printf("1. Search an element using Linear Search \n");
    printf("2. Search an element using Binary Search \n");
    scanf("%d", &ch);

    switch(ch) {
	case 1:
	    printf("Enter the number of elements to be inserted: ");
	    scanf("%d", &n);
	    printf("Enter the elements: \n");
	    for(i = 0; i < n; i++)
		scanf("%d", &a[i]);

	    printf("Enter the element to be searched: ");
	    scanf("%d", &key);
	    for(i = 0; i < n; i++) {
		if(a[i] == key) {
		    printf("Element found at position %d\n", i + 1);
		    getch();
		    return 0;
		}
	    }
	    printf("Element not found\n");
	    break;

	case 2:
	    printf("Enter the number of elements: ");
	    scanf("%d", &n);
	    printf("Enter the elements: \n");
	    for(i = 0; i < n; i++)
		scanf("%d", &a[i]);

	    bubble_sort(a, n);
	    printf("Sorted elements: ");
	    for(i = 0; i < n; i++)
		printf("%d ", a[i]);
	    printf("\n");

	    printf("Enter the element to be searched: ");
	    scanf("%d", &key);
	    search(key, a, n, &pos);
	    if (pos == -1) {
		printf("Item is not found\n");
	    } else {
		printf("Item is found at position: %d\n", pos + 1);
	    }
	    break;

	default:
	    printf("Invalid choice!\n");
    }

    getch();
    return 0;
}

void bubble_sort(int a[], int n) {
    int temp, i, j;
    for (i = 0; i < n - 1; i++) {
	for (j = 0; j < n - i - 1; j++) {
	    if (a[j] > a[j + 1]) {
		temp = a[j];
		a[j] = a[j + 1];
		a[j + 1] = temp;
	    }
	}
    }
}

int search(int key, int a[], int n, int *pos) {
    int mid, high, low;
    low = 0;
    high = n - 1;
    *pos = -1;  // Initialize position to -1

    while (low <= high) {
	mid = (low + high) / 2;
	if (key == a[mid]) {
	    *pos = mid;
	    return 0;
	}
	if (key < a[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 0;
}

      `
    },
  
    {
      id: 12,
      name: "SBOX-12",
      code: `
#include<stdio.h>
#include<conio.h>
#include<process.h>
#define size_stack 5

void  push(int item ,int *top,int s[]){
  if(*top == size_stack -1){
    printf("stack Overflow");
    return ;
    }
    *top = *top+1;
    s[*top] = item ;
}

int pop(int *top,int s[]){
  int item_delete ;
  if(*top == -1){
    return 0 ;
  }
  item_delete = s[(*top)--];
  return item_delete ;
}

void display(int top,int s[] ){
  int i ;
  if(top == -1){
    printf("Stack is empty \n");
    return ;
  }
  printf("Values of Stack are : \n");
  for(i=0;i<=top;i++){
   printf("%d \n ",s[i]);
  }
}

void main(){
 int top,s[51],item,item_delete,ch ;
 top= -1;
 clrscr();
 for(;;){
 printf("1.PUSH \n 2.POP \n 3.DISPLAY \n 4.EXIT \n ");
 scanf("%d",&ch);

 switch(ch){
  case 1 :
	  printf("Enter the item to be inserted : ");
	  scanf("%d",&item);
	  push(item,&top,s);
	  break ;
   case 2 :
	   item_delete = pop(&top,s);
	   if(item_delete == 0){
	     printf("stack is underFlow \n");
	   }else{
	     printf("item Delete = %d\n ",item_delete);
	   }
	   break ;
  case 3 :
	  display(top,s);
	  break ;
  case 4 :
	 exit(0) ;
	 default :
		   printf("Invalid Choice");
		   break;
 }
}
}


      `
    },
    {
      id: 13,
      name: "BOX-13",
      code: `
        #include <stdio.h>
#include <string.h>

int f(char sym) {
    switch (sym) {
        case '+':
        case '-':
            return 2;
        case '*':
        case '/':
            return 4;
        case '^':
        case '$':
            return 5;
        case '(':
            return 0;
        case '#':
            return -1;
        default:
            return 8;
    }
}

int g(char sym) {
    switch (sym) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 3;
        case '^':
        case '$':
            return 6;
        case '(':
            return 9;
        case ')':
            return 0;
        default:
            return 7;
    }
}

void infix_postfix(char infix[], char postfix[]) {
    int i, j = 0, top = -1;
    char sym, s[20];
    s[++top] = '#';

    for (i = 0; i < strlen(infix); i++) {
        sym = infix[i];

        while (f(s[top]) > g(sym)) {
            postfix[j++] = s[top--];
        }
        if (f(s[top]) != g(sym)) {
            s[++top] = sym;
        } else {
            top--;
        }
    }

    while (s[top] != '#') {
        postfix[j++] = s[top--];
    }
    postfix[j] = '\0';
}

int main() {
    char infix[100], postfix[100];
    clrscr();
    printf("Enter the valid infix expression: ");
    scanf("%s", infix);
    infix_postfix(infix, postfix);
    printf("Postfix expression is: ");
    printf("%s\n", postfix);
    getch();
    return 0;
}

    }

      `
    },
    {
      id: 14,
      name: "BOX-14",
      code: `
 #include<stdio.h>
#include<conio.h>
#include<process.h>
#define que_size 5

void insert_rear(int item,int *r,int q[]){
 if(*r == que_size -1){
   printf("Queue is overFlow");
   return ;
 }
 q[++(*r)] = item ;
}

void delete_front(int q[], int *f,int * r ){
  if(*f>*r){
    printf("queue is overFlow ");
    return ;
  }
  printf("Deleted Queue : %d ",q[(*f)++]);
  if(*f>*r){
    *f = 0 ;
    *r =-1;
  }
}

void display(int q[],int f , int r){
int i;
 if(f>r){
    printf("Queue is Empty \n");
    return ;
 }
 printf("items in Queue : \n");
 for(i=f;i<r;i++){
   printf("\n %d \n ",q[i]);
 }
}

void main(){
 int f,r,q[56],item,ch;
 f=0;
 r=-1;

 clrscr();
 for(;;){
  printf("\n 1.INSET \n 2.DELETE \n 3.DISPLAY \n 4.EXIT \n");
  scanf("%d",&ch);
  switch(ch){
  case 1 :
	 printf("Enter the item to be inserted : ");
	 scanf("%d",&item);
	 insert_rear(item,&r,q);
	 break ;
  case 2 :
	 delete_front(q,&f,&r);
	 break ;
  case 3 :
	 display(q,f,r);
	 break ;
  case 4 :
	  exit(0);
	  default :
		   printf("Entered the Invalid Choice!!");
  }
 }
}
         
      `
    }
  ];