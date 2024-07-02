<script setup lang="ts">
import { listCoursesService } from './listCoursesService'
import { useExample06Store } from './useExample06Store'

//listCoursesService业务处理端把useExample06Store全局数据里的coursesS给改成
//对应的数据，然后 coursesR 获取。
listCoursesService()
const coursesR = useExample06Store().coursesS
//把courses里索引为偶数的name改成'响应式改变'
const changeItemF = () => {
  coursesR.value?.forEach((c, index) => index % 2 == 0 && (c.name = '响应式改变'))
}
</script>
<template>
  <div>
    <h2>组件化设计与传参</h2>
    <p>
      --listCoursesService业务处理端把useExample06Store全局数据里的coursesS给改成对应的数据，
      <br />
      --然后 coursesR 获取到view视图端
    </p>
    <div v-for="(c, index) of coursesR" :key="index">
      <p>ID:{{ c.id }}</p>
      <p>NAME:{{ c.name }}</p>
      <p>CREATETIME：{{ c.createTime }}</p>
    </div>
    <button type="button" @click="changeItemF()">
      把courses里索引为偶数的name改成'响应式改变'
    </button>

    <hr />
    <h2>下面给出个作业:</h2>
    <h3>需求：进入课程列表组件后，异步获取/加载课程列表数据。需要编辑时，弹出编辑模态框</h3>
    <h4>方法一:defineModel</h4>
    <p>
      defineModel
      用于定义子组件与父组件之间的双向数据绑定。它可以让子组件直接读取和更新父组件传递的数据，而无需额外的事件监听和触发。
    </p>
    <p>使用场景：当你需要在子组件中修改父组件的数据并希望这些修改能够自动同步回父组件时使用。</p>
    <h4>方法二:defineEmit</h4>
    <p>
      defineEmit
      用于定义子组件可以触发的事件，并向父组件传递数据。这些事件通常在子组件中被触发，父组件可以监听这些事件并响应。
    </p>
    <p>使用场景：当你需要在子组件中触发一个事件并传递数据给父组件时使用。</p>

    <hr />
    <h2>总结:</h2>
    <p>
      组件闭包下，当父子组件间需要相互调用执行操作时
      <br />
      <h3>子组件改变父组件数据</h3>
      <br />
      defineProps()，声明组件接收的参数属性。可将需子组件渲染/执行的数据/函数传入。即，声明在父组件，执行在子组件
      <br />
      defineModel()，声明组件对外暴露的双向绑定属性，父组件绑定属性到自己的响应式数据。
      <br />
      defineEmits()，声明组件对外暴露的事件。子组件中声明的事件被激活，通知父组件执行操作。即，声明在子组件，执行在子组件，同时执行父组件
      <br />
      <h3>父组件执行子组件函数</h3>
      <br />
      defineExpose()，声明组件对外暴露的属性。即，声明在子组件，由父组件执行操作子组件
      <br />
      基于全局数据状态
    </p>
  </div>
</template>
