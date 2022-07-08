{
//  联合类型
// temp变量，可以存 string number Boolean 三种类型
let temp : string | number | boolean = 100
temp = 'hello'
temp = true
// 实际应用中存定时器id 默认会给null，后面会改成number
let timeId : number | null = null
timeId = window.setInterval(() => {
  console.log('hello')
}, 1000)

// 需求 数组中可以存数字，字符串，也可以存布尔值
let arr : (boolean | number | string)[] = [1,'a',true]
let arr2 : Array<boolean | number | string> = [1,'a',false]
}