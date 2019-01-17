// 带大写字母的字符串返回小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase1 = function(s) {
    var result = ""
    var len = s.length
    for (var i = 0; i < len; i++) {
        if (upper.includes(s[i])) {
            var index = findup(upper,s[i])
            result += lower[index]
        }else {
            result += s[i]
        }
    }
    return result
}

var findup = function(upper, x) {
    for (var i = 0; i < upper.length; i++) {
        if (x == upper[i]) {
            return i
        }
    }
}

lowercase1('ABCdefg')

// 带小写字母的字符串返回大写字母

var uppercase1 = function(s) {
    var result = ""
    var len = s.length
    for (var i = 0; i < len; i++) {
        if (lower.includes(s[i])) {
            var index = findlow(lower,s[i])
            result += upper[index]
            log(result)
        }else {
            result += s[i]
            log(result)
        }
    }
    return result
}

var findlow = function(lower, x) {
    for (var i = 0; i < lower.length; i++) {
        if (x == lower[i]) {
            return i
        }
    }
}

uppercase1('ABCdefg')

