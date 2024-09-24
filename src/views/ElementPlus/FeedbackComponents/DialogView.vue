<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<template>
  <div>
    <h2>Dailog对话框</h2>
    <p>
      Dialog 弹出一个对话框，适合需要定制性更大的场景。 需要设置 model-value / v-model 属性，它接收
      Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为
      footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了
      before-close 的用法。
    </p>
    <p>
      before-close 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 footer 具名 slot
      里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 before-close 的相关逻辑。
    </p>
    <el-button plain @click="dialogVisible = true">Click to open the Dialog</el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </div>
      </template>
    </el-dialog>
    <p>模态框内的内容可以自定义，可以是表单表格登入框之类的</p>
    <p>el-dialog后面加个draggable就可以拖拽对话框了</p>

    <h2>Drawer抽屉</h2>
    <p>
      呼出一个临时的侧边栏。el-drawer同样v-model绑定隐藏和显示状态。有四个方向direction, ltr rtl ttb
      btt,表示left to right，right to left，top to bottom，bottom to top
    </p>
    
  </div>
</template>
