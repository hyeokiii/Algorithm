function solution(num, total) {
    var answer = new Array(num).fill(0);
    console.log(answer)
        let center = Math.ceil(total/num)
        answer[parseInt(num/2)] = center
        for(let i=parseInt(num/2)-1;i>=0;i--){
            answer[i] = answer[i+1] - 1
        }
        for(let i=parseInt(num/2)+1;i<answer.length;i++){
            answer[i] = answer[i-1] + 1
        }
    
    return answer;
    
}