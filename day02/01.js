const agrs = process.argv.slice(2);

let p1 = parseFloat(agrs[0]);
let op = agrs[1];
let p2 = parseFloat(agrs[2]);
let result ;
switch (op) {
    case '+':
        result = p1 + p2;
        break;
    case '-':
        result = p1 - p2;
        break;
    case '*':
        result = p1 * p2;
        break;
    case '/':
        result = p1 / p2;
        break;
}
console.log(result);