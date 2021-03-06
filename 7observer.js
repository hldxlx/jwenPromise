// 发布订阅 是发布和订阅两之间没有任何联系
// 观察者模式 （内部都是基于发布订阅的）有一个观察者 被观察者

class Subject{ //被观察者 小宝宝
    constructor(name){
        this.name = name
        this.arr = []
        this.state = '我很开心'
    }
    attach(observer){ // 注册观察者 基于发布订阅
        this.arr.push(observer)
    }
    setState(newState){
        this.state = newState
        this.arr.forEach(o => o.update(this)) //通知所有观察者 小宝宝的状态发生了变化
    }
}
class Observer{ // 观察者 我
    constructor(name){
        this.name = name
    }
    update(s){
        console.log(s.name+'当前状态是'+s.state+'对：'+this.name);
    }
}
let s = new Subject('小宝宝')
console.log(s.name)
let o1 = new Observer('我')
let o2 = new Observer('他')
console.log(s.state)
//注册关系 需要让观察者和被观察者产生关联
s.attach(o1);
s.attach(o2);
s.setState('不开心了')
//观察者模式是包含发布订阅的
