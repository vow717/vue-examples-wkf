<template>
  <div>
    <input type="file" @change="handleFileChange" ref="fileInput" />
    <div
      class="image-container"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp">
      <img ref="img" id="1" />
      <div
        v-if="img"
        class="crop-box"
        :style="{
          left: x + 'px',
          top: y + 'px',
          width: width + 'px',
          height: height + 'px'
        }"></div>
    </div>

    <button @click="handleCrop">裁剪</button>
    <!-- 裁剪后的图片 -->
    <img id="2" />
    <button @click="uploadCroppedImage()">上传裁剪后的图片</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)
const img = ref<HTMLImageElement | null>(null)
const isDragging = ref(false) // 是否正在拖拽裁剪框
const startX = ref(0) // 鼠标按下时的坐标
const startY = ref(0) // 鼠标按下时的坐标
const x = ref(0) // 裁剪框的坐标
const y = ref(0) // 裁剪框的坐标
const width = ref(200) // 初始裁剪框宽度
const height = ref(200) // 初始裁剪框高度

// 压缩图片，将传上来的图片压缩为指定宽高
const compressImage = (imgObj: HTMLImageElement) => {
  return new Promise<string>((resolve) => {
    const maxWidth = 800 // 最大宽度
    const maxHeight = 600 // 最大高度
    let width = imgObj.width
    let height = imgObj.height

    if (width > maxWidth) {
      height = height * (maxWidth / width)
      width = maxWidth
    }

    if (height > maxHeight) {
      width = width * (maxHeight / height)
      height = maxHeight
    }

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = width
    canvas.height = height
    ctx.drawImage(imgObj, 0, 0, width, height)
    const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8) // 压缩质量 0.8
    resolve(compressedDataUrl)
  })
}
// 选择文件
const handleFileChange = () => {
  const file = fileInput.value?.files?.[0]
  if (file) {
    const reader = new FileReader()
    // reader.readAsDataURL完成后，会触发load事件回调
    reader.onload = async (e) => {
      const imgObj = new Image()
      imgObj.src = e.target!.result as string
      await new Promise((resolve) => {
        imgObj.onload = resolve
      })
      const compressedImage = await compressImage(imgObj)
      img.value!.src = compressedImage
    }
    reader.readAsDataURL(file) // 读取文件，转为base64格式，生成url(这个url是一个base64编码的字符串,可以直接作为图片的src属性)
  }
}

// 鼠标事件处理,实现拖拽裁剪框
const onMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  startX.value = e.offsetX
  startY.value = e.offsetY
}

// 鼠标移动事件处理,实现拖拽裁剪框
const onMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    const dx = e.offsetX - startX.value
    const dy = e.offsetY - startY.value
    x.value += dx
    y.value += dy
    startX.value = e.offsetX
    startY.value = e.offsetY
  }
}

// 鼠标抬起事件处理
const onMouseUp = () => {
  isDragging.value = false
}

// 裁剪图片
const handleCrop = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const imgElement = img.value!
  canvas.width = width.value
  canvas.height = height.value
  ctx.drawImage(
    imgElement,
    x.value,
    y.value,
    width.value,
    height.value,
    0,
    0,
    width.value,
    height.value
  )
  document.getElementById('2')!.setAttribute('src', canvas.toDataURL())
}

// 假装上传裁剪完后的图片
const uploadCroppedImage = () => {
  const imgElement = document.getElementById('2') as HTMLImageElement
  const imgData = imgElement.src
  console.log('上传裁剪后的图片', imgData)
}
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

.crop-box {
  position: absolute;
  border: 2px solid red;
  pointer-events: none;
}
</style>
