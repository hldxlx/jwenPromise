// Promise.all

const fs = require('fs'); // fs是一个node中 file system 有文件的读写操作
//有异步的api  (异步是要等待同步代码折行完后 才会折行)

// node中异步方法都有回调

//并发操作 就是两个操作互不影响
const after = (times,fn) => ()=> --times == 0 && fn()
let out = after(2,()=>{ // 并发的解决核心就是靠定时器来维护
    console.log(renderObj)
})
let renderObj = {}
fs.readFile('./name.txt','utf8',function(err,data){
    renderObj.name = data
    out()
})
fs.readFile('./age.txt','utf8',function(err,data){
    renderObj.age = data
    out()
})
console.log('hello');
