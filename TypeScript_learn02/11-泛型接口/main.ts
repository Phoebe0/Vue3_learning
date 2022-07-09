{
 interface IPeople<T> {
  name: T
  age: T
  height:T
  gender: T
  sayHi(song: T) : void
 }
 const p1: IPeople<string> = {
  name: 'Tricia',
  age: '十八',
  gender: '女',
  height: '一米八',
  sayHi(song) {
    console.log('我喜欢唱歌'+song)
  }
 }
 p1.sayHi('lala')

 const p2: IPeople<number> = {
  name: 11,
  age: 19,
  gender: 0,
  height: 180,
  sayHi(song) {
    console.log('我会唱'+song)
  }
 }
 p2.sayHi(78787)

}