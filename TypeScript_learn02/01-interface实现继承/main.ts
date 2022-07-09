{
  // interface定义对象 还可以实现继承
  // 在ES6中 class类的继承使用extends关键字
  // class People { }
  // class Student extends People { }

  // 人的类型接口
  interface IPerson {
    name: string,
    age?: number,
    sayHello?(): void
    play?: () => void
  }

  // 学生的类型接口 继承于人的类型接口
  interface IStudent extends IPerson {
    grade: number
  }
  const stu1: IStudent = {
    name: 'Tricia',
    grade: 100,
    sayHello() {
      console.log('你好')
    },
  }
  // 注意：不能调用可能是未定义的对象，所以调用时要加判断
  // stu1.sayHello()
  stu1.sayHello && stu1.sayHello()
}