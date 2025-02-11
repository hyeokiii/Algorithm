function solution(quiz) {
    let answer = [];
    const arr = [...quiz]
    let cal = []
    arr.map((str)=>{
       cal = str.split(' ')
       if(cal[1] === '+'){
           (Number(cal[0]) + Number(cal[2]) === Number(cal[4])) ? answer.push('O') : answer.push('X')
       }else if(cal[1] === '-'){
            (Number(cal[0]) - Number(cal[2]) === Number(cal[4])) ? answer.push('O') : answer.push('X')
       }
    })
    return answer;
}