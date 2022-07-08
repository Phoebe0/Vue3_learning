{
  // ts类型分为两大类
// 1. js已有类型
// 2. ts新增类型
let num :number = 100
let str :string = 'hello'
let boo :boolean = true
boo = !0
let param :null = null
let param2 :undefined = undefined

// any类型可以赋值给任意类型
let any :any = 'hello'
any = 100
// void类型只能赋值undefined和null
let voids :void = undefined
// let voids1 :void = null
// never类型表示永远不存在的值
// never类型只能赋值给never类型
}