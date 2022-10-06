function quadratic(n) {
      // loop and count from 0 to n input
    for (let i = 0; i < n; i++) {
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

quadratic(6) // the bigO is 0(n2)
linear(100) // the big0 is 0(n)