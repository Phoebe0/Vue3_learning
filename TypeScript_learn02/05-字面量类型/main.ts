{
  // 字面量类型    将一个固定的值设置为类型 这个就称为字面量类型,一般配合联合类型使用
  // str1 的类型为string  str2的类型为Hello
  let str1 = 'haha'
  const str2 = 'Hello'
  // str2的完整写法:  const str2: 'Hello' = 'Hello'
  
  // 性别 只有两种
  let gender : 'man' | 'woman'
  gender = 'man'
  
}