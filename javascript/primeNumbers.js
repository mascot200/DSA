function allPrimesLessThanN(n) {
    for (let i = 0; i < n;  i++) {
          if(isPrime(i)){
            console.log(i)
          }
    }
}


function isPrime(n){
        if(n <= 1) return false;
        if(n <= 3) return true;

        if(n % 2 == 0 || n % 3 == 0) return false;
        for(let i = 5; i*i <= n; i = i + 6) {    
                return false;
        }

        return true;
}

allPrimesLessThanN(20)