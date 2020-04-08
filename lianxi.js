// const say = (...args) => {
//     console.log('say',args)
// }
// Function.prototype.before = function(cb){
//     return (...args) => {
//         cb()
//         this(...args)
//     }
// }
// let newSay = say.before(function(){
//     console.log('before')
// })
// newSay('a','b','c')
//
// function checkType(type){
//     return function (content){
//         return Object.prototype.toString.call(content) === `[object ${type}]`
//     }
// }
// let isString = checkType('String');
// let res = isString('kk');
// let isBoolean = checkType('Boolean');
// let res2 = isBoolean(true);
// console.log(res,res2)
//
//



