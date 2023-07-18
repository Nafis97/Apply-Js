function fibonacci(num){
    var fib = [0 , 1];
    for (var i=2; i<=num; i++){
        fib[i]= fib[i-1] + fib[i-2];
    } 
    return fib;
}

console.log(fibonacci(9));
console.log(fibonacci(11));
console.log(fibonacci(5));