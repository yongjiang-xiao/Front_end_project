<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo">
          <img src="@/assets/images/南开大学logo.jpg" alt="南开大学Logo" class="logo-img" />
          <span class="logo-text">南开大学服务网</span>
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
            <router-link to="/life" class="nav-link" :class="{ active: $route.name === 'life' }">生活服务</router-link>
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
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.logo-img {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #4a6cf7;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-link {
  margin-left: 30px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4a6cf7;
}

.nav-link.active {
  color: #4a6cf7;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4a6cf7;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 10px 0;
  }
  
  .logo {
    margin-bottom: 10px;
  }
  
  .nav-links {
    width: 100%;
    justify-content: space-around;
  }
  
  .nav-link {
    margin: 0;
  }
}
</style>