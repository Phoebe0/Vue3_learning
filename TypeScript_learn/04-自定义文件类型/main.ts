{
  // 定义数组的重复操作，可以自定义类型(类型别名)
  // 使用type关键字定义类型别名 
  // type 自定义类型别名 = 类型
  type MyType = (string | number | boolean)[]
  let arr : MyType = [1,'a',true]
  let arr2 : MyType = [1,'a',false, 888, 'hshs']
  let arr3 : MyType = [1, 888, 'hshs', false]

  type MyVarType = number | string | boolean
  let param1 : MyVarType = 'hello'
  let param2 : MyVarType = true
  let param3 : MyVarType = 100
}