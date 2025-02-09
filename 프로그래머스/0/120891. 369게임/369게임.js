function solution(order) {
    let numbers = Array.from(String(order))
    return numbers.filter((num)=>["3","6","9"].includes(num)).length
}