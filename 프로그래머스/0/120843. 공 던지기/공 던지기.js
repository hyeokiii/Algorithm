function solution(numbers, k) {
    return parseInt((k-1)*2 % numbers.length)+1
}