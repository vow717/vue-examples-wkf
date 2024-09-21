<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')
const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

const value = ref([])

const props = {
  expandTrigger: 'hover' as const
}
const props2 = { multiple: true }
const handleChange = (value: any) => {
  console.log(value)
}

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'typography',
            label: 'Typography'
          },
          {
            value: 'icon',
            label: 'Icon'
          },
          {
            value: 'button',
            label: 'Button'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          },
          {
            value: 'checkbox',
            label: 'Checkbox'
          },
          {
            value: 'input',
            label: 'Input'
          },
          {
            value: 'input-number',
            label: 'InputNumber'
          },
          {
            value: 'select',
            label: 'Select'
          },
          {
            value: 'cascader',
            label: 'Cascader'
          },
          {
            value: 'switch',
            label: 'Switch'
          },
          {
            value: 'slider',
            label: 'Slider'
          },
          {
            value: 'time-picker',
            label: 'TimePicker'
          },
          {
            value: 'date-picker',
            label: 'DatePicker'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          },
          {
            value: 'upload',
            label: 'Upload'
          },
          {
            value: 'rate',
            label: 'Rate'
          },
          {
            value: 'form',
            label: 'Form'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          },
          {
            value: 'tag',
            label: 'Tag'
          },
          {
            value: 'progress',
            label: 'Progress'
          },
          {
            value: 'tree',
            label: 'Tree'
          },
          {
            value: 'pagination',
            label: 'Pagination'
          },
          {
            value: 'badge',
            label: 'Badge'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          },
          {
            value: 'loading',
            label: 'Loading'
          },
          {
            value: 'message',
            label: 'Message'
          },
          {
            value: 'message-box',
            label: 'MessageBox'
          },
          {
            value: 'notification',
            label: 'Notification'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu'
          },
          {
            value: 'tabs',
            label: 'Tabs'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          },
          {
            value: 'dropdown',
            label: 'Dropdown'
          },
          {
            value: 'steps',
            label: 'Steps'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          },
          {
            value: 'tooltip',
            label: 'Tooltip'
          },
          {
            value: 'popover',
            label: 'Popover'
          },
          {
            value: 'card',
            label: 'Card'
          },
          {
            value: 'carousel',
            label: 'Carousel'
          },
          {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'docs',
        label: 'Design Documentation'
      }
    ]
  }
]

onMounted(() => {
  restaurants.value = loadAll()
})
</script>
<template>
  <h2>自动补全</h2>
  <p>fetch-suggestions 属性是返回建议输入的方法。 有点击一直显示建议和输入显示建议两个方法。</p>
  <div style="max-width: 200px">
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      clearable
      class="inline-input w-50"
      placeholder="Please Input"
      @select="handleSelect" />
  </div>
  <p>还有从服务端获取搜索数据</p>
  <p>https://element-plus.org/zh-CN/component/autocomplete.html</p>
  <h2>Cascader级联选择</h2>
  <p>触发子菜单</p>
  <p>
    只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。
    options的children:[]决定子数组选项。 通过 props.expandTrigger 属性控制子节点的展开方式
  </p>
  <p>expandTrigger:'hover' as const 是鼠标悬浮就展开</p>
  <p>在options对象内加个disabled:true 就可以禁选这个选项</p>
  <p>
    我们选出来的显示是
    父选项/二级选项/三级选项。如果只想看最后一级选项的名称，就在el-cascader加个:show-all-levels="false"
  </p>
  <div class="m-4">
    <p>Child options expand when clicked (default)</p>
    <el-cascader v-model="value" :options="options" @change="handleChange" />
  </div>
  <div class="m-4">
    <p>Child options expand when hovered</p>
    <el-cascader v-model="value" :options="options" :props="props" @change="handleChange" />
  </div>
  <h2>多选</h2>
  <p>在标签中添加 :props="props" 并设置 props = { multiple: true } 来开启多选模式。</p>
  <p>
    使用多选时，所有选中的标签将默认显示。可以设置 collapse = true 将选中的标签折叠。可以设置
    max-collapse-tags 来显示最大tag数量，默认1。可以使用 collapse-tags-tooltip
    属性来启用鼠标悬停折叠文字以显示具体所选值的行为。
  </p>
  <div class="m-4">
    <p>Max Collapse Tags</p>
    <el-cascader
      :options="options"
      :props="props2"
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      clearable />
  </div>
  <h2>动态加载/可搜索</h2>
  <p>具体看网页https://element-plus.org/zh-CN/component/cascader.html</p>
</template>
