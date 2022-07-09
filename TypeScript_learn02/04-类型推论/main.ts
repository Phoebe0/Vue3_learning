{
  // 类型推论 在 TS 中，某些没有明确指出类型的地方，TS 的类型推论机制会帮助提供类型
  /* 
    1. 变量声明并赋值   推论
    2. 函数的返回值 推论
  */
 let num = 100

 function fn (a: number, b: number) {
  return a + b + ''
 }
}