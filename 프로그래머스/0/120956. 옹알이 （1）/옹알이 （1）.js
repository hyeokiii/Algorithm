function solution(babbling) {
    var answer = 0;
    const arr = ["aya","ye","woo","ma"]
                
    let arr2 = babbling.map(bal=> {
        for(let i of arr){
            if(bal.includes(i)){
                bal = bal.replace(i,'X')
            }
        }
        if (bal.replace(/X/g,'').length === 0){
            answer++
        }
    })
    return answer;
}