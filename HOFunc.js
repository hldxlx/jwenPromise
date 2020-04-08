//对函数进行包装（装饰） 切片编程（我们可以把核心抽离出来） 包装上自己的内容 切片 AOP
const say = (...args) => {
    //todo
    console.log('说话',args);
}
//希望在调用say方法之前做一些事
//Function.prototype  给每个函数都扩展一些功能
Function.prototype.before = function(cb){//高阶函数

    return (...args) => {// 箭头函数中没有this指向
        cb();//调用用户提前传入的before方法
        // ...有两个作用 1 在函数参数中 叫剩余运算符 2 展开运算符
        this(...args)
    }
}

let newSay = say.before(function(){
    console.log('before say');
})
newSay('a','b','c')



