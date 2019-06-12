#include<bits/stdc++.h>
using namespace std;
bool isprime(int a)
{
    if(a==1)
        return false;
    if((a==2)||(a==3))
        return true;
    if((a%2==0)||(a%3==0))
        return false;
    for(int i=5;i<=sqrt(a);i+=1)
    {
        if((a%i==0)||(a%(i+2)==0))
            return false;
    }
    return true;
}
int main()
{
    int t;
    cin>>t;
    int n;
    while(t--)
    {
        cin>>n;
        int count,i,j;
        for(i=1;i<n;i++)
        {
            if(isprime(i))
            {
                cout<<i<<" ";
            }
        }
        cout<<endl;
    }
    return 0;
}
