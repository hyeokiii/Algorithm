function solution(my_string) {
    var answer = 0;
    [...my_string].map(item=>{
        if(Number(item)) answer += Number(item)
    })
    return answer;
}