<script setup lang="ts">
import { ref } from 'vue'
import { UserFilled, SwitchButton } from '@element-plus/icons-vue'
const user = ref({
  number: '',
  password: '',
  sex: ''
})
</script>
<template>
  <div>
    <div class="d1">
      <div class="d2">
        <el-form label-position="right">
          <el-form-item label="账号">
            <el-input
              v-model="user.number"
              :prefix-icon="UserFilled"
              placeholder="请输入您的账号" />
          </el-form-item>

          <el-form-item label="密码">
            <el-input
              v-model="user.password"
              :prefix-icon="SwitchButton"
              placeholder="请输入您的密码" />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="user.sex">
              <el-radio value="1" size="large">男</el-radio>
              <el-radio value="0" size="large">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style>
.d1 {
  height: 340px;
  width: 600px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-color: #93b7dd;
}
.d2 {
  height: 260px;
  width: 480px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
}
</style>
