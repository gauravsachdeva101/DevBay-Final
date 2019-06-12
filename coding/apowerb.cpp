#include<math.h>
#include<iostream>
using namespace std;

int main() {
	int t;
	cin>>t;
	long long int a,b,k,temp,p;
	while(t--)
	{
	   cin>>a>>b;
	   cin>>k;
	   temp=pow(a,b);
	   while(k--)
	   {
	       p=temp%10;
	       temp=temp/10;
	       cout<<p<<" "<<temp<<" ";
	   }
	   cout<<p<<"\n";
	}
	return 0;
}
