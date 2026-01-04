<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo">
          <img src="@/assets/images/南开大学logo.jpg" alt="南开大学Logo" class="logo-img" />
          <span class="logo-text">南开大学一站式学生服务平台</span>
        </router-link>
        <ul class="nav-links">
          <li>
            <router-link to="/" class="nav-link" :class="{ active: $route.name === 'home' }">首页</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" :class="{ active: $route.name === 'about' }">学校介绍</router-link>
          </li>
          <li>
            <router-link to="/map" class="nav-link" :class="{ active: $route.name === 'map' }">校园地图</router-link>
          </li>
          <li>
            <router-link to="/life" class="nav-link" :class="{ active: $route.path.startsWith('/life') }">生活服务</router-link>
          </li>
          <li>
            <router-link to="/weather" class="nav-link" :class="{ active: $route.name === 'weather' }">风语者</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background-color: var(--nk-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  height: 50px;
  width: auto;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--nk-blue);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: var(--nk-gray-dark);
  font-size: 16px;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--nk-blue);
}

.nav-link.active {
  color: var(--nk-blue);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--nk-blue);
  border-radius: 3px;
}

</style>