// let   普通变量
// 1. 不存在变量提升
// 2. 暂时性死区
// 3. 不允许重复声明

// 块级作用域
// ES5 只有全局作用域和函数作用域
// 内层变量可能会覆盖外层变量
// 用来计数的循环变量泄露为全局变量
// IIFE 不再必要
// 函数可以在 块级作用域中声明，但是只允许在 块级作用域中引用，类似于 private
// const 静态变量
// const 如果赋值为一个对象，只能保证一层不变，但是 对象的数据结构中的对象不能改变
// ES6 声明变量的六种方法 var function let const import class
// 顶层对象，浏览器中是 window Node 指的是 global 对象
// var   弃用变量
{
    let demo = 'demo'
    demo = 'demo2'
    console.log(demo)
}
