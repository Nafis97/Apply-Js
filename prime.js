function isPrime(num){
    for (var i = 2; i < num; i++){
        if (num%i == 0){
         return "This is not a prime number";
        }
     }
    return "This is a Prime number";
     
}
var result = isPrime(17);
console.log(result);

