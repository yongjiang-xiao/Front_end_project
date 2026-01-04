<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>南开大学一站式学生服务平台</h3>
          <p>为南开学子提供便捷的校园服务</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-weixin"></i></a>
            <a href="#" class="social-link"><i class="fab fa-weibo"></i></a>
            <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">学校介绍</router-link></li>
            <li><router-link to="/map">校园地图</router-link></li>
            <li><router-link to="/life">生活服务</router-link></li>
            <li><router-link to="/weather">风语者</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>联系我们</h3>
          <p>地址：天津市南开区卫津路94号</p>
          <p>电话：022-23500000</p>
          <p>邮箱：service@nankai.edu.cn</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} 南开大学一站式学生服务平台. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #4a6cf7;
}

.footer-section p {
  margin-bottom: 10px;
  line-height: 1.6;
}

.social-links {
  display: flex;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ecf0f1;
  border-radius: 50%;
  margin-right: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #4a6cf7;
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #4a6cf7;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>