#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin>>t;
    int n;
    while(t--)
    {
        cin>>n;
        long long int count,i,j,sum=0;
        for(i=1;i<=n;i++)
        {
            count=0;
            for(j=1;j<=i;j++)
            {
                if(i%j==0)
                {
                    count++;
                }
            }
            if(count==2)
                {sum+=i;
                 cout<<i<<" ";

                }
        }
        cout<<sum<<endl;
    }
    return 0;
}
