{
  // 类型断言  明确一个数据类型
  // - 使用as关键字,  后面的类型是一个更加具体的类型
  // 也可以在前面用 <HTMLDivElement>

  // 1. 获取一个div元素 
  // const box = document.querySelector('div') as HTMLDivElement
  const box = <HTMLDivElement> document.querySelector('div')
  console.log(box.innerHTML)

  // 2. 获取一个类名叫.pic的img标签
  const img = document.querySelector('img') as HTMLImageElement
  console.log(img.src)

  // 3. 获取一个id为target的超链接
  const target = document.querySelector('#target') as  HTMLAnchorElement
  console.log(target.href)
  
  
}