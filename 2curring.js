//函数科里化
//判断一个变量的类型
//判断类型 有四种方式 constructor instanceof typeof Object.prototype.toString.call
// function checkType(content,type){
//     return Object.prototype.toString.call(content) === `[object ${type}]`
// }
// let bool = checkType('hello','String')
// let bool2 = checkType('aa','String')
//什么叫函数科里化 把一个函数的氛围进行缩小 让函数变的更具体一些

// function checkType(type){
//     //私有化 这个函数 可以拿到上层函数的参数
//     return function(content){
//         return Object.prototype.toString.call(content) === `[object ${type}]`
//     }
// }
// let isString = checkType('String')
// let flag = isString('hello')
// console.log(flag)

//如何实现通用的函数科里化
const add = (a,b,c,d,e) => {
    return a + b + c + d + e
}
const curring = (fn,arr=[]) => {
    let len = fn.length; // 长度指代的是函数的参数个数
    return (...args) => { // 保存用户传入的参数
        arr = arr.concat(args) // [1]
        if(arr.length < len){ // 通过传递的参数 不停地判断是否达到函数折行的参数个数
            return curring(fn,arr) //[1]
        }
        return fn(...arr)
    }
}
console.log(curring(add)(1)(2)(3,4)(5))


function checkType(type,content){
    return Object.prototype.toString.call(content) === `[object ${type}]`
}
let util = {};
['Number','String','Boolean'].forEach(item =>{
    util['is'+item] = curring(checkType)(item)
})
let s = util.isString('hell');
console.log(s, '===sss');
