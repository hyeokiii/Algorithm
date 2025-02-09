function solution(array, n) {
    array.sort((a,b)=>a-b)
    let arr = array.map(num=> Math.abs(num-=n))
    return array[arr.indexOf((Math.min(...arr)))]
}