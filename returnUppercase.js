// 返回大写的字符串
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var uppercase = function(s) {
    var result = ""
    for (var i = 0; i < s.length; i++) {
        var index = find(lower,s[i])
        result += upper[index]
    }
    //log(result)
    return result
}

var find = function(lower, x) {
    for (var i = 0; i < lower.length; i++) {
        if (x == lower[i]) {
            return i
        }
    }
}

uppercase('abcdefg')
