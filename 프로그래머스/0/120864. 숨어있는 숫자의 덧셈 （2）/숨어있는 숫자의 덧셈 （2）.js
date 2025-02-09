function solution(my_string) {
    const arr =  my_string.split(/\D+/g)
    const answer = arr.reduce((acc,cur)=> acc+Number(cur),0)
    return answer
}