{
  // 枚举类型  如果没有提供默认值,从0开始递增
  enum Drictions {
    up = '上',
    down = '下',
    left = '左',
    right = '右'
  }

  function changeDirection (dir : Drictions) {
    console.log('方向改变' + dir)
  }
  changeDirection(Drictions.up)
  changeDirection(Drictions.down)
  changeDirection(Drictions.left)
  changeDirection(Drictions.right)
}