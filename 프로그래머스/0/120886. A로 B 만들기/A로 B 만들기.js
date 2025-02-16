function solution(before, after) {
    let arr1 = before.split('').sort().join('')
    let arr2 = after.split('').sort().join('')
    return arr1 === arr2 ? 1 : 0
}