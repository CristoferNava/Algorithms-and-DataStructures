from math import sqrt
def countPrimes(n: int) -> int:
    if n in (0, 1):
        return 0

    counter = 0
    for i in range(2, n): 
        prime = True
        for j in range(2, int(sqrt(i)) + 1): 
            if i % j == 0 and i != j:
                # not is prime
                prime = False
                break
                
        if prime:
            counter += 1
    
    return counter
'''
class Solution {
    public int countPrimes(int n) {
        int[] memoNoPrimos= new int[n+5];
        int amount=0;
        for(int i=2; i<n; i++){ 
            //Preguntar si estoy marcado, NoPrimo
            if(memoNoPrimos[i]==0){//Si soy primo
                amount++;
               for(int j=i; j<n; j+=i){ O(LogN)
                    memoNoPrimos[j]=1;
                } 
            }
        }
        return amount;
    }
}
'''
result = countPrimes(10)
print(result)

