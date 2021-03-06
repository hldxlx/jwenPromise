// Promise.all

const fs = require('fs'); // fs是一个node中 file system 有文件的读写操作
//有异步的api  (异步是要等待同步代码折行完后 才会折行)

// node中异步方法都有回调

//并发操作 就是两个操作互不影响
function after(times,fn){
    let renderObj = {}           //  并没有声明外部变量 而是放在内部
    return function(key,value){
        renderObj[key] = value
        if(--times == 0){
            fn(renderObj)
        }
    }
}
let out = after(2,(renderObj)=>{ // 并发的解决核心就是靠定时器来维护
    console.log(renderObj)
})

fs.readFile('./name.txt','utf8',function(err,data){
    out('name',data)
})
fs.readFile('./age.txt','utf8',function(err,data){
    out('age',data)
})
console.log('hello');
