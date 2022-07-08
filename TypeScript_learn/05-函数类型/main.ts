{

  /* --------------------- 基本使用 -------------------------- */
  // 函数指定类型：其实是在给函数的参数和返回值指定类型
  // function 函数名(参数1 : 类型, 参数2 : 类型) : 返回值类型 {函数体}
  
  function add (n : number, m : number) : number {
    return n + m
  }
  add(1, 2)
  
  // 自定义函数类型   只适用于函数表达式和箭头函数
  // type 自定义类型 = (参数1 : 类型, 参数2 : 类型) => 返回值类型 
  type MyFnType = (n : number, m : number) => number
  const sub : MyFnType = (n , m) => {
    return n - m
  } 
  sub(20, 10)

  const fn : MyFnType = function(n , m) {
    return n * m
  }
  fn(1, 2)

/*------------------------ void类型 -------------------------------*/
  // 如果函数没有返回值，那么，函数返回值类型为：void
  const fn2 = () => {}

  // 这种写法是明确指定函数返回值类型为 void，与上面不指定返回值类型相同
  const fn3 = () : void => {
    console.log('hello')
  }

  // 如果指定 返回值类型为 undefined，此时，函数体中必须显示的 return undefined 才可以
  const fn4 = () : undefined => {
    return undefined
  }

  /*------------------------ 可选参数 -------------------------------*/
  // 可选参数，可以不传参数，也可以传参数
  function mySlice(start?: number, end?: number): void {
    console.log('起始索引：', start, '结束索引：', end)
  }
}