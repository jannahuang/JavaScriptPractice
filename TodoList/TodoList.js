// 将输出封装成 log 函数，便于 debug
var log = function() {
    console.log.apply(console, arguments);
}


// 存放所有事件
var todoList = []
var doneList = []
// 保存事件至本地
var saveTodos = function() {
    var t = JSON.stringify(todoList)
    var d = JSON.stringify(doneList)
    localStorage.todoList = t
    localStorage.doneList = d
}
// 从本地解析 todoList
var loadTodos = function() {
    var t = localStorage.todoList
    return JSON.parse(t)
}
// 从本地解析 doneList
var loadDones = function() {
    var d = localStorage.doneList
    return JSON.parse(d)
}
// 加载本地事件至页面
var initTodos = function() {
    todoList = loadTodos()
    doneList = loadDones()
    for (var i = 0; i < todoList.length; i++) {
        var todo = todoList[i]
        insertTodo(todo)
    }
    for (var i = 0; i < doneList.length; i++) {
        var todo = doneList[i]
        removeTodo(todo)
    }
    todocount.innerHTML = todoList.length
    donecount.innerHTML = doneList.length
}


// 新增事件
var bindEventAdd = function() {
    var addTodo = document.querySelector('#id-input-todo')
    addTodo.addEventListener('keydown', function(event){
        var target = event.target
        // 当输入为 Enter，对象失焦，读取输入框内容
        if (event.key === 'Enter') {
            target.blur()
            event.preventDefault()
            var task = addTodo.value
            var todo = {
                'task': task,
                'time': currentTime()
            }
            todoList.push(todo)
            saveTodos()
            insertTodo(todo)
        }
        // 保存事件，更新总数
        saveTodos()
        todocount.innerHTML = todoList.length
    })

}
// 删除或完成事件
var bindEventDelete = function() {
    var todoContainer = document.querySelector('#id-div-container')
    // 通过 event.target 检查点击的内容
    todoContainer.addEventListener('click', function(event){
        log('container click', event, event.target)
        var target = event.target
        // 如果点击删除，则删除事件；点击完成，则将事件移至完成列表，更新时间
        if (target.classList.contains('todo-delete')) {
            var todoDiv = target.parentElement
            var index = indexOfElement(todoDiv)
            todoDiv.remove()
            todoList.splice(index, 1)
            saveTodos()
            todocount.innerHTML = todoList.length
        }else if (target.classList.contains('todo-check')) {
            var todoDiv = target.parentElement
            var index = indexOfElement(todoDiv)
            doneList.push(todoList[index])
            doneList[doneList.length-1]['time'] = currentTime()
            removeTodo(todoList[index])
            todoDiv.remove()
            todoList.splice(index, 1)
            saveTodos()
            todocount.innerHTML = todoList.length
            donecount.innerHTML = doneList.length
        }
    })
}
// 重做事件
var bindEventRedo = function() {
    var todoDone = document.querySelector('#id-div-done')
    // 通过 event.target 检查点击的内容
    todoDone.addEventListener('click', function(event){
        log('click redo', event, event.target)
        var target = event.target
        // 如果点击重做，则将事件恢复至待办列表，更新时间
        if (target.classList.contains('todo-check')) {
            var doneDiv = target.parentElement
            var index = indexOfElement(doneDiv)
            todoList.push(doneList[index])
            todoList[todoList.length-1]['time'] = currentTime()
            insertTodo(doneList[index])
            doneDiv.remove()
            doneList.splice(index, 1)
            saveTodos()
            todocount.innerHTML = todoList.length
            donecount.innerHTML = doneList.length
        }
    })
}


// 将事件插入 todoContainer
var insertTodo = function(todo) {
    var todoContainer = document.querySelector('#id-div-container')
    var t = templateTodo(todo)
    todoContainer.insertAdjacentHTML('beforeend', t)
}
// 将事件移至 todoDone
var removeTodo = function(todo) {
    var doneTodo = document.querySelector('#id-div-done')
    var t = templateTodoDone(todo)
    doneTodo.insertAdjacentHTML('beforeend', t)
}
// 新增事件语句模板
var templateTodo = function(todo) {
    var t = `
        <div class='todo-cell'>
            <input type='checkbox' class="todo-check">
            <span>${todo.task}</span>
            <span class="todo-time"}>${todo.time}</span>
            <a class='todo-delete'>-</a>

        </div>
    `
    return t
}
// 完成事件语句模板
var templateTodoDone = function(todo) {
    var t = `
        <div class='todo-cell todo-done'>
            <input type='checkbox' class="todo-check" checked="checked">
            <span>${todo.task}</span>
            <span class="todo-time"}>${todo.time}</span>
            <a class='todo-delete'>-</a>

        </div>
    `
    return t
}

// 查找事件下标
var indexOfElement = function(element) {
    var parent = element.parentElement
    for (var i = 0; i < parent.children.length; i++) {
        var e = parent.children[i]
        if (e === element) {
            return i
        }
    }
}
// 生成时间
var currentTime = function() {
    var d = new Date()
    var year = d.getFullYear()
    var month = ("0"+(d.getMonth() + 1)).slice(-2)
    var date = ("0"+d.getDate()).slice(-2)
    var hours = ("0"+d.getHours()).slice(-2)
    var minutes = ("0"+d.getMinutes()).slice(-2)
    var seconds = ("0"+d.getSeconds()).slice(-2)
    var timeString = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    return timeString
}


// 添加所有功能
var bindEvents =function () {
    bindEventAdd()
    bindEventDelete()
    bindEventRedo()
}

var __main = function () {
    bindEvents()
    initTodos()
}

__main()
