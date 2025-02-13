function solution(sides) {
    let answer = 0;
    let max = Math.max(...sides)
    let otherside = sides.filter((x)=> x !== max)[0] ?? max

    for(let i=1 ; i<=max; i++){
        if(i+otherside > max) answer++
    }
    
    for(let i=max+1;i < max+otherside;i++){
        answer++
    }
    return answer;
} 