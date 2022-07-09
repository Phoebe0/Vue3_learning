{
  // interface定义对象 还可以实现继承
  // 在ES6中 class类的继承使用extends关键字
  // class People { }
  // class Student extends People { }

  // 人的类型接口
  type IPerson = {
    name: string,
    age?: number,
    sayHello?(): void
    play?: () => void
  }

  // 动物的接口 
  type IAnimal = {
    eat(): void
  }

  // 学生的类型接口 继承于人的类型接口
  type IStudent = {
    grade: number
  } & IPerson & IAnimal

  type IWorker = {
  } & IPerson | IAnimal

  const stu1 : IStudent = {
    name: 'Tricia',
    grade: 100,
    sayHello() {
      console.log('你好')
    },
    eat() {
      console.log('吃吃吃')
    },
  }

  const worker : IWorker = {
    eat() {
      console.log('喝喝喝')
    },
  }
  worker.eat()
  stu1.sayHello && stu1.sayHello()
}