<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div data-div-border>
    <h1>Element-Plus</h1>
    <h2><router-link to="">Home</router-link></h2>
    <h2>基础组件</h2>
    <ul>
      <li>
        <router-link to="/ElementPlus/BasicComponents/ButtonView">Button按钮</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/BorderAndColorView">
          Border边框和Color色彩
        </router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/ContainerView">Container布局容器</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/IconView">Icon布局容器</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/BasicComponents/OtherView">其他组件</router-link>
      </li>
    </ul>
    <h2><router-link to="/ElementPlus/ConfigProviderView">配置组件</router-link></h2>
    <h2>Form表单组件</h2>
    <ul>
      <li>
        <router-link to="/ElementPlus/FormComponents/AutocompleteView">自动补全输入框</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/FormView">Form表单</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/OtherView">其他组件</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/RateView">Rate评分</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/SliderView">Slider滑块</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/TransferView">Transfer穿梭框</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FormComponents/UploadView">Upload上传</router-link>
      </li>
    </ul>
    <h2>Data数据展示</h2>
    <ul>
      <li>
        <router-link to="/ElementPlus/DataComponents/AvatarAndBadgeView">
          Avatar头像和Badge徽章
        </router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/DataComponents/CardAndCarouselView">
          Card卡片和Carousel走马灯
        </router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/DataComponents/CollapseView">Collapse折叠面板</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/DataComponents/ProgressView">Progress进度条</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/DataComponents/OtherView">其他组件</router-link>
      </li>
      <li>table表格，简单却又繁琐多样，建议看网站</li>
      <li>
        <router-link to="/ElementPlus/DataComponents/TourView">Tour漫游式引导</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/DataComponents/StatisticView">Statistic统计组件</router-link>
      </li>
    </ul>
    <h2>Feedback反馈组件</h2>
    <ul>
      <li><router-link to="/ElementPlus/FeedbackComponents/AlertView">Alert提示</router-link></li>
      <li>
        <router-link to="/ElementPlus/FeedbackComponents/DialogView">Dialog对话框</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FeedbackComponents/TooltipView">Tooltip文字提示</router-link>
      </li>
      <li>
        <router-link to="/ElementPlus/FeedbackComponents/OtherView">其他组件</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
[data-div-border] {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
li {
  margin: 3px;
}
</style>
