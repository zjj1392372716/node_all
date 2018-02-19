const str = '\u00bd + \u00bc = \u00be';

// 输出: ½ + ¼ = ¾: 9 个字符, 12 个字节
console.log(`${str}: ${str.length} 个字符, ` +
    `${Buffer.byteLength(str, 'utf8')} 个字节`);

const str1 = 'Buffer';

console.log(`${str1}:${str1.length}个字符 ` +
    `${Buffer.byteLength(str1, 'utf8')}个字节`
);