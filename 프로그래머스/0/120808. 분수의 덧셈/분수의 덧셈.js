function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let denom = numer1 * denom2 + numer2 * denom1
    let numer = denom1 * denom2
    
    let GCD = (a,b) => (a%b ===0 ? b : GCD(b,a%b))
    let gcd = GCD(denom,numer)
    answer = [denom/gcd,numer/gcd]
    return answer;
}