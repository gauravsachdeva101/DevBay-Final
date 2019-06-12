#include<iostream>
using namespace std;
int gcd(int a, int b)
{
    if (a == 0)
	return b;
	if (b == 0)
	return a;
    if (a == b)
		return a;
    if (a > b)
		return gcd(a-b, b);
	return gcd(a, b-a);
}
int main()
{
    int TestCases;
    cin>>TestCases;
    while(TestCases--)
    {
        int n;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        int temp,a,j=0;
        if(n==1)
        {
            a=arr[n-1];
        }
        else
        {
            j=0;
        a=gcd(arr[j],arr[j+1]);
        j=j+2;
        while(j!=n)
        {
            temp=gcd(a,arr[j]);
            a=temp;
            j++;
        }
        }
    cout<<a<<"\n";
    }
return 0;
}
