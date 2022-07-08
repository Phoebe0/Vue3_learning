{
  // 接口类型说明
  // 接口类型说明 
  
  interface IPersonType {
    name: String,
    age: Number,
    gender: String,
    sing : (song : string) => void
    run() : void
  }
  const obj : IPersonType = {
    name : 'Tt',
    age : 18, 
    gender : '女',
    sing : (song) => {
      console.log('我会' + song)
    }, 
    run() {
      console.log('跑800m 3min');
      
    },
  }
  obj.sing('小小小小小')
  
}