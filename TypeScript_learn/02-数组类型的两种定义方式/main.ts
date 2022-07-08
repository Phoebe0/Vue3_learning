{
  // 复杂数据类型：数组
  // 方式一    let 变量名 :类型注解[] = [值]
  // 表示数组中只能存数字
  let arr :number[] = [1,2,3] 
  // 表示数组中只能存字符串
  let arr2 :string[] = ['a','b','c']

  // 方式二    let 变量名 :Array<类型注解> = [值]
  let arr3 :Array<number> = [1,2,3]
  let arr4 :Array<string> = ['a','b','c']
  let arr5 :Array<boolean> = [true,false,!0]

}