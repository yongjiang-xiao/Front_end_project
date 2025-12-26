<template>
  <div>
    <!-- 导航栏 -->
    <header class="header">
      <div class="logo">
        <i class="fa-solid fa-school"></i>
        <span>南开大学服务网</span>
      </div>

      <nav class="navbar">
        <a href="#home">首页</a>
        <a href="#life">生活服务</a>
        <a href="#map">校园地图</a>
        <a href="#about">关于我们</a>
      </nav>
    </header>

    <!-- 首页 Banner -->
    <section id="home" class="banner">
      <h1>欢迎来到南开大学服务网</h1>
      <p>一站式校园生活服务平台</p>
    </section>

    <!-- 生活服务 -->
    <section id="life" class="life-service">
      <h2>生活服务</h2>

      <div class="service-grid">
        <div class="service-card" @click="goDormRepair">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <h3>宿舍报修</h3>
        </div>

        <div class="service-card">
          <i class="fa-solid fa-credit-card"></i>
          <h3>校园卡服务</h3>
        </div>

        <div class="service-card">
          <i class="fa-solid fa-bus"></i>
          <h3>校车查询</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goDormRepair = () => {
  router.push('/dorm-repair')
}
</script>

<style scoped>
/* 如果原 style.css 是全局样式，这里可以不写 */
</style>
