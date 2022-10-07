function quadratic(n) {
      // loop and count from 0 to n input
    for (let i = 0; i < n; i++) {
        console.log(i)
        // loop and count from 0 to n input and repeat n - 1 times
        for(j = i; j < n; j++) {
            console.log(j)
        }
    }
}

function linear(n){
    for(let i = 0; i < n; i++) {   
        console.log(i)
     }
}

function cubic(n){
   for(let i = 0; i < n; i++) {
     for(let j = i; j < n; j++) {
        for(let k = j; k < n; k++) {   
            console.log(k)
         }
     }
   }
}

function logarithmic(n){
    for(let i = 2; i <= n; i = i*2){
        console.log(i)
    }
}

      quadratic(6) // the bigO is 0(n2)
linear(100) // the big0 is 0(n)
cubic(30) // the big0 is 0(n3)
logarithmic(1000000) // the big0 is log2(n)