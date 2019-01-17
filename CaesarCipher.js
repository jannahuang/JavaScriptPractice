// Caesar Cipher 凯瑟加密算法的暴力解密方法

var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// 封装输出语句为 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// 将大写字母统一成小写字母，便于阅读
var getLowercase = function(letter) {
    for (var i = 0; i < upper.length; i++) {
        if (letter == upper[i]) {
            return lower[i]
        }
    }
}

// 将字母移位
var getShift = function(shift, letter) {
    for (var i = 0; i < lower.length; i++) {
        if (letter == lower[i]) {
            var index = i
        }
    }
    if (index + shift >= 26) {
        return lower[index + shift - 26]
    }else{
        return lower[index + shift]
    }
}

// 主函数
var CaesarCipher = function(string, shift) {
    result = ''
    len = string.length
    for (var i = 0; i < len; i++) {
        if (upper.includes(string[i])){
            result += getShift(shift, getLowercase(string[i]))
        }else if (lower.includes(string[i])) {
            result += getShift(shift, string[i])
        }else {
            result += string[i]
        }
    }
    return result
}

// 将密文放置此处
code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX, \
EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

// 循环 25 次暴力破解密文
for (var i = 1; i < 26; i++) {
    log(i, CaesarCipher(code, i))
}
