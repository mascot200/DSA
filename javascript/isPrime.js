function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = 2; i <n; i++){
        if(n%i == 0){
            console.log(i)
            return false;
        }
    }
    return true;
}

isPrime(9)