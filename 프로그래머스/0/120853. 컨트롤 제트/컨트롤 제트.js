function solution(s) {
    let stack = []
    
    for(let c of s.split(' ')){
        if(c === 'Z'){
            stack.pop()
        }else{
            stack.push(Number(c))
        }
    }
    
    return stack.reduce((acc,cur)=> acc += cur,0)
}