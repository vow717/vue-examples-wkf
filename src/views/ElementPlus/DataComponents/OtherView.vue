<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>
<template>
  <div>
    <h2>Empty空状态</h2>
    <p>el-empty空状态，description="xxxx"为描述</p>
    <el-empty description="description" />
    <p>可以:src自定义图片,:image-size="200"自定义尺寸</p>
    <p>使用默认插槽可以在底部插入内容,如button</p>
    <el-empty>
      <el-button type="primary">Button</el-button>
    </el-empty>

    <h2>Infinite Scroll无限滚动</h2>
    <p>
      ul列表里,在要实现滚动加载的列表上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
    </p>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>

    <h2>Pagination分页</h2>
    <p>
      el-pagination,设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 分页元素如下：
      prev (上一页按钮), next (下一页按钮), pager (分页列表), jumper (跳转), total (总计), sizes
      (每页条数选择) 和 -> (every element after this symbol will be pulled to the right).
    </p>
    <el-pagination layout="prev, pager, next" :pager-size="9" :total="500" />

    <h2>Result结果</h2>
    <p>
      el-result icon="success warning error"
      然后title/sub-title=""设置提示文字，还可以用slot插槽插入一些按钮
    </p>
    <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <el-button type="primary">Back</el-button>
      </template>
    </el-result>

    <h2>Tree树形结构</h2>
    <p>:data="data" 而data是一个包含children数组的一个数组</p>
    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick" />
  </div>
</template>

<style>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
