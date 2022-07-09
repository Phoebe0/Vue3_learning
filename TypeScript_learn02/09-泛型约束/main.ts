{
  // 指定更加具体的类型
  function id<Type>(value: Type[]): Type[] {
    console.log(value.length)
    return value
  }
  
  id([1,2,3])

  // 添加约束
  // 1. 创建一个接口
  interface ILength {
    length : number
  }
  function id2<Type extends ILength>(value: Type): Type {
    // 2. 继承接口:  表示传入的 类型 必须满足 ILength 接口的要求才行，也就是得有一个 number 类型的 length 属性
    console.log(value.length)
    return value
  }
  id2('hhhhh')
  id2([1,2,3])
  // id2(100) // 类型“number”的参数不能赋给类型“ILength”的参数
}