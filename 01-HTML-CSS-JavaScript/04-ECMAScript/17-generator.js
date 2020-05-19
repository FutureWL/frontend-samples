// Generator 函数的语法
// 简介
// next 方法的参数
// for...of 循环
// Generator.prototype.throw()
// Generator.prototype.return()
// next()、throw()、return() 的共同点
// yield* 表达式
// 作为对象属性的 Generator 函数
// Generator 函数的this
// 含义
// 应用

function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}

var hw = helloWorldGenerator()

//