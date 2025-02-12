function solution(polynomial) {
    let x = 0, con = 0;
    let arr = polynomial.split(" + ");
    
    arr.forEach((num) => {
        if (num.includes('x')) {
            let coef = num.replace('x', ''); // 'x' 제거 후 계수 추출
            x += coef ? Number(coef) : 1; // 빈 문자열이면 1로 처리
        } else {
            con += Number(num);
        }
    });

    if (x && con) return (x === 1 ? "x" : x + "x") + " + " + con;
    if (x) return x === 1 ? "x" : x + "x";
    return String(con);
}
