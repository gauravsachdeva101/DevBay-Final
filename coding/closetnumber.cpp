#include<bits/stdc++.h>
using namespace std;
int main()
{

    int testcases;
    int n,m;
    cin>>testcases;
    while(testcases--)
    {
        cin>>n>>m;
        int r;
        if(m>n)
            cout<<m<<"\n";
        else{
        if(n>0)
        {
            r=n%m;
            if(r==0)
                cout<<n<<"\n";
            else if(r==(n-m))
                cout<<m<<"\n";
            else
                cout<<n-r<<"\n";
        }
        else
        {

            r=(-n)%m;
            if(r==0)
                cout<<n<<"\n";
            else if(r==((-n)-m))
                cout<<-m<<"\n";
            else
                cout<<n+(-r)<<"\n";

        }
    }
    }
}
