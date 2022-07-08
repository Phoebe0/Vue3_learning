# todoList

# 导入静态页面



# 使用pinia管理数据

- 安装pinia

```bash
yarn add pinia
```

- 在main.js中引入pinia并挂载

```js
import {createPinia} from 'pinia'

...
...

const pinia = createPinia()
createApp(App)
.use(pinia)
```

- 新建store/modules，并在下面新建文件todos.js

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a77a683-0d71-4b0b-b4a4-1e992a9bb0a4/Untitled.png)

```js
// 1. 导入defineStore
import {defineStore} from 'pinia'
// 2. 创建仓库导出
export default defineStore('todos',{
  state() {
    return {
      list: [
        {
          id: 1,
          name: '吃饭',
          done: false,
        },
        {
          id: 2,
          name: '睡觉',
          done: true,
        },
        {
          id: 3,
          name: '打豆豆',
          done: false,
        },
      ],
    }
  },
  actions: {},
  getters: {}
})
```

- 新建store/index.js 把todos模块导出

```js
import useTodosStore from './modules/todos'

const useStore = () => {
  return {
    todos: useTodosStore()
  }
}

export default useStore
```

# 渲染页面

**在TodoMain.vue中导入store/ index.js，并使用仓库中的数据渲染页面**

- 导入仓库

```js
import useStore from '../store'
const { todos } = useStore()
```

- 渲染
    - `:*class*="{completed: item.done}"`  任务选中时变成灰色并添加下划线
    - `:checked="item.done"`  根据列表中的done属性确定是否默认选中

```js
<li v-for="item in todos.list" :key="item.id" :class="{completed: item.done}">
	  <div class="view">
	    <input class="toggle" type="checkbox" :checked="item.done" />
	    <label>{{item.name}}</label>
	    <button class="destroy"></button>
	  </div>
	  <input class="edit" value="Create a TodoMVC template" />
</li>
```

# 删除功能

- 在todos.js中的actions里完成删除
    - 获取到删除的那一行的id，使用过滤器过滤掉和这一行id相同的id

```js
actions: {
    // 删除
    delTodos (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
}
```

- 在ToDoMain.vue中使用删除功能, 传递当前行的id
    - 直接仓库名.方法名
    
    ```js
    <button class="destroy" @click="todos.delTodos(item.id)"></button>
    ```
    

# 修改功能

- 在todos.js中的actions里完成修改
    - 找到和当前行id相同的那一项数据
    - 把他的done属性改为相反的值
    
    ```js
    actions: {
        // 修改单个todos的状态
        changeState (id) {
          const o = this.list.find(item => item.id === id)
          o.done = !o.done
        }
      },
    ```
    
- 在ToDoMain.vue中使用修改功能

```js
<input class="toggle" type="checkbox" :checked="item.done" @change="todos.changeState(item.id)"/>
```

# 添加功能

- 在todos.js中添加新增功能
    - 非空校验   `if(!name.trim()) return`
    - 数组添加数据

```js
actions: {

    ...
		...

    // 新增
    addTodos (name) {
      if(!name.trim()) return
      this.list.unshift({
          id: +new Date(),
          name,
          done: false,
      })
    }

...

  },
```

- 在TodoHeader.vue中，定义一个添加函数 add

```js
<script setup>
import { ref } from 'vue';
import useStore from '../store'
const { todos } = useStore()
const name = ref('')
const add = () => {
  todos.addTodos(name.value)
  // 清空
  name.value = ''
}

</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input 
    **v-model="name"** 
    class="new-todo" 
    placeholder="What needs to be done?" 
    autofocus
    **@keyup.enter="add"**
    />
  </header>
</template>

<style lang="less" scoped></style>
```

# 底部统计与清空

- 在todos.js中

```js
actions: {
...
...

// 清除
    clear () {
      this.list = this.list.filter(item => !item.done)
    }
},
getters: {
    // 剩余数量统计
    count () {
      return this.list.filter(item => !item.done).length
    },
    // 是否显示清除按钮
    isShowButton () {
      return this.list.some(item => item.done)
    },
    // 是否显示底部
    isShowFooter () {
      return this.list.length
    }
  }
```

- 在TodoFooter.vue中引入仓库

```js
<script setup>
import useStore from '../store'
const { todos } = useStore()
</script>
```

- 如果没有数据，隐藏整个底部

```js
<footer class="footer" v-if="todos.isShowFooter">
...
...
</footer>
```

- 如果没有数据，则隐藏清空按钮

```js
<button class="clear-completed" v-if="todos.isShowButton" @click="todos.clear">清空已完成</button>
```

- 显示剩余任务个数

```js
<span class="todo-count"><strong>{{todos.count}}</strong> 个剩余任务</span>
```

# 全选反选

- 给输入框加一个触发函数toggleChecked

```js
actions: {

		 ...
		 ...

    // 全选反选
    toggleChecked (boo) {
      this.list.forEach(item => item.done = boo)
    }
  },
```

- 添加一个是否全选的计算属性

```js
getters: {
    ...
		...

    // 全选反选
    isAllCheck () {
      if(!this.list.length) return false 
      return this.list.every(item => item.done)
    }
  }
```

- 在TodoMain.vue中

```js
<input id="toggle-all" class="toggle-all" type="checkbox" :checked="todos.isAllCheck" @change="todos.toggleChecked(!todos.isAllCheck)"/>
```

# 底部筛选

- 在store/modules下面新建一个toggle.js切换底部按钮的组件

```jsx
import { defineStore } from 'pinia'
export default defineStore('toggles', {
  state () {
    return {
      // 提供按钮选项
      btns: ['All', 'Active', 'Compelted'],
      // 默认选中
      activeBtn: 'All'
    }
  },
  actions: {
    // 点击切换时，切换选中按钮
    changeActive(str) {
      this.activeBtn = str
    }
  },
  getters: {}
})
```

- 在TodoFooter.vue中渲染

```js
<li v-for="(item,index) in toggles.btns" :key="index" @click="toggles.changeActive(item)">
  <a :class="{selected: item === toggles.activeBtn}" href="#/">{{item}}</a>
</li>
```

- 切换不同页面显示不同选项
    - 在todos.js中定义一个计算属性
    
    ```js
    getters: {
        
        showList() {
          const useTooglesStore = tooglesStore()
          if(useTooglesStore.activeBtn === 'All') {
            return this.list
          } else if (useTooglesStore.activeBtn === 'Active') {
            return this.list.filter(item => !item.done)
          } else {
            return this.list.filter(item => item.done)
          }
        }
      }
    ```
    
    - 在TodoMain.vue中渲染
    
    ```js
    <ul class="todo-list">
         <li
           :class="{ completed: item.done }"
           v-for="item in todos.showList"
           :key="item.id"
         >
            ...
    				...
    
          </li>
        </ul>
    ```
    
    # 持久化存储
    
    - 仓库中数据发生变化，触发 $subscribe
        - 在TodoMain.vue中
    
    ```js
    const { todos } = useStore()
    // 仓库中数据发生变化，触发 $subscribe
    todos.$subscribe (() => {
      localStorage.setItem('todos', JSON.stringify(todos.list))
    })
    ```
    
    - 获取数据从本地缓存获取
        - 在todos.js中
