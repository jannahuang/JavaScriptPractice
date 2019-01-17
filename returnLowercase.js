// 返回字符串的小写形式
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    var result = ""
    for (var i = 0; i < s.length; i++) {
        var index = find(upper, s[i])
        result += lower[index]
    }
    return result
}

var find = function(upper, x) {
    for (var i = 0; i < upper.length; i++) {
        if (x == upper[i]) {
            return i
        }
    }
}

lowercase('ABCD')
