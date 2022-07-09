{
  interface IPeople {
    name: string
    age: number
    gender: string
    height: number
  }

  // keyof关键字 可以获取对象类型的键 并且将这些键联合成一个新类型
  type keyTypes = keyof IPeople
  let str: keyTypes = 'gender'

}