{
  /* 
    创建两个对象：
    学生对象

    指定对象的类型
    姓名
    性别
    成绩
    身高

    学习
    打游戏
  */
   type StudentType = {
    name? : string
    gender? : string
    grade? : number
    height? : number
    study() : void
    play() : void
   }
   let stu1 : StudentType = {
    name: 'Jack',
    gender: '男',
    grade: 100,
    height: 188,
    study() {
      console.log('学习成绩优异')
    },
    play() {
      console.log('玩游戏')
    }
   }

   let stu2 : StudentType = {
    name: 'Rose',
    study() {
      console.log('学习成绩不好')
    },
    play() {
      console.log('贪玩')
      
    }
   }


}