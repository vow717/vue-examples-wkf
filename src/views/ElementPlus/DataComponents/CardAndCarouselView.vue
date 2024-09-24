<script setup lang="ts"></script>
<template>
  <div>
    <h2>Card卡片</h2>
    <p>
      Card 组件由 header body 和 footer组成。 header 和 footer是可选的，其内容取决于一个具名的
      slot。
    </p>
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      <template #footer>Footer content</template>
    </el-card>
    <p>通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。</p>
    <div class="flex flex-wrap gap-4">
      <el-card style="width: 480px" shadow="always">Always</el-card>
      <el-card style="width: 480px" shadow="hover">Hover</el-card>
      <el-card style="width: 480px" shadow="never">Never</el-card>
    </div>

    <h2>Carousel走马灯</h2>
    <p>el-carousel包裹在外，每个走马灯用el-carousel-item包裹</p>
    <p>默认鼠标hover指示器就会切换，如果trigger="click"那么就是点击才会切换</p>
    <div class="block text-center">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <p>在el-carousel里加motion-blur可以添加动态模糊。direction="vertical"改变方向</p>
    <p>
      指示器：indicator-position 属性定义了指示器的位置。 默认情况下，它会显示在走马灯内部，设置为
      outside 则会显示在外部；设置为 none 则不会显示指示器。
    </p>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <p>卡片模式: type="card"就可以改成卡片模式</p>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
