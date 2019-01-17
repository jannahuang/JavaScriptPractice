// Caesar cipher 凯撒加密
// 对于一个字符串整体移位，将明文加密成密码
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var encode = function(s) {
    var result = ""
    var len = s.length
    for (var i = 0; i < len; i++) {
        var sl = s[i]
        var index = find(lower,s[i])
        if (s[i] == 'z') {
            result += lower[0]
        }else {
            result += lower[index+1]
        }
    }
    return result
}

var find = function(lower, x) {
    for (var i = 0; i < lower.length; i++) {
        if (x == lower[i]) {
            return i
        }
    }
}

encode(abcefg)
