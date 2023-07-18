function factorial(num){
    var result = 1;
    for (var i=num; i>0; i--){
        result= result*i; 
    }
    return result;
}
var fact = 7;
result = factorial(7);
console.log(result);
let fact1 = 3;
result1 = factorial(fact1);
console.log(result1);
console.log(factorial(4));
console.log(factorial(8));
console.log(factorial(11));
console.log(factorial(13));
console.log(factorial(5));