// 1. 数组的和
var sum = function(array) {
    var s = 0
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        s = s + n
    }
  	return s
}

// 2. 数组的乘积
var product = function(array) {
    var s = 1
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        s = s * n
        // s *= n
    }
  	return s
}

// 3. 数组的平均数
var average = function(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

// 4. 数组中最小的数字
var min = function(array) {
    var minus = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] <= minus) {
            minus = array[i]
        }
    }
    return minus
}
