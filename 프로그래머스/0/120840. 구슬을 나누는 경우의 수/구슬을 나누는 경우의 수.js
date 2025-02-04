function factorial(num){
    if( num === 0 || num === 1){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

function solution(balls, share) {
    const n = factorial(balls)
    const m = factorial(share)
    const nm = factorial(balls - share)
    return Math.round(n / (m*nm))
}