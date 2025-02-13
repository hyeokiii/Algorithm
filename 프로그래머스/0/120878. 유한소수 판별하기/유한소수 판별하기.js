function solution(a, b) {
    const gcd = (num1,num2) => (num1 % num2 ? gcd(num2,num1%num2):num2)
    let gcdnum = gcd(a,b)
    let deno = b/gcdnum

    while (deno%2===0) deno/=2;
    while (deno%5===0) deno/=5;
    
    return deno === 1 ? 1 : 2;
}