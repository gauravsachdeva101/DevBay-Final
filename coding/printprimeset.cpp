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
        int i,j,count,k=0;
        int a[n];
        for(i=1;i<n;i++)
        {
            count=0,k=0;
            for(j=1;j<=i;j++)
            {
                if(i%j==0)
                {
                    count++;
                }
            }
            if(count==2)
                {
                    cout<<i<<" ";
                    a[k]=i;
                    k++;
                }
        }
        for(int i=0;i<k;i++)
        {
            cout<<a[k]<<" ";
        }

    }
    return 0;
}
