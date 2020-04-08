// after 在...之后
// 我希望调用某个函数3次之后 再去折行
function after(times,fn){
    return function(){
        if(--times == 0){
            fn()
        }
    }
}
let newSay = after(3,function say(){
    console.log('say')
})
newSay();
newSay();
newSay();

//异步并发问题 我同时发送多个请求 希望拿到最终的结果 {name,age,address}