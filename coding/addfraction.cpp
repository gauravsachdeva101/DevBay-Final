#include<iostream>
using namespace std;
int lcm(int a, int b)
{
    int lar = max(a, b);
    int small = min(a, b);
    for (int i = lar; ; i += lar) {
        if (i % small == 0)
            return i;
    }
}
void addfrac(int n1,int n2,int d1,int d2)
{
    int d=lcm(d1,d2);
    int a,b;
    a=(d/d1)*n1;
    b=(d/d2)*n2;
    cout<<a+b<<"/"<<d;
}

int main()
{
    int t;
    cin>>t;
    int n1,n2,d1,d2;
    while(t--)
    {
        cin>>n1>>d1>>n2>>d2;
        addfrac(n1,n2,d1,d2);
    }
    return 0;
}
