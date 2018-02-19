var letter = 'é';   
var buff = Buffer.from(letter);  
var len = buff.length;  
console.log(buff);                  // 默认编码是utf8，这里占据两个字节 <Buffer c3 a9>
console.log(len);                   // 2
var code = buff[0];                 
console.log(code);                  // 第一个字节为0xc3，即195：超出ascii的最大支持范围
var binary = code.toString(2);      // 195的二进制：10101001
console.log(binary);
var finalBinary = binary.slice(1);  // 将高位的1舍弃，变成：0101001
console.log(finalBinary);
var finalCode = parseInt(finalBinary, 2);  // 0101001 对应的十进制：67
console.log(finalCode);
var finalLetter = String.fromCharCode(finalCode);  // 67对应的字符：C
console.log(finalLetter);