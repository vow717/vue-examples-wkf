<script setup lang="ts"></script>
<template>
  <div class="modal">
    <div class="modal-dialog">
      <img
        src="https://img.zcool.cn/community/01a25e5d6220d0a8012187f413dea0.gif"
        alt="Loading..." />
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  width: 500px;
  height: 350px;
  margin: 10% auto;
  border-radius: 10px;
  position: relative;
}
.modal-dialog img {
  object-fit: cover;
  position: relative;
  left: -5%;
  top: -5%;
  width: 120%;
  height: 120%;
}
</style>
