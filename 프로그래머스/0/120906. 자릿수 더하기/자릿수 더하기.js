function solution(n) {
    var answer = 0;
    let arr = String(n).split('')
    arr.map((num)=>{
        answer += Number(num)
    })
    return answer;
}