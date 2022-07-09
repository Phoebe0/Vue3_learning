{
  // 泛型: 把类型当作参数来传递使用
  let arr : Array<number> = [1,2,3]
  function fn <T> (value : T) {
    return value
  }
  fn<number> (10)
  fn<string> ('haha')
  fn<boolean> (true)

  // -------------案例-------------------
  // 1. 反转数组元素
  function reverseItem<T1, T2> (arr: [T1, T2]) : [T2, T1] {
    return [arr[1], arr[0]]
  }
  console.log(reverseItem(['haha',2]))
  console.log(reverseItem<string,boolean>(['haha',true]))

  // 2. 定义一个函数 参数1 是数字,参数2类型不固定, 返回的数组长度是参数1, 内容是参数2
  function getArr<T>(length: number, context: T) :T[] {
    let arr:any = []
    for(let i = 1; i <= length ; i++) {
      arr.push(context)
    }
    return arr
  }
  console.log(getArr<string>(5,'月'))
  
}