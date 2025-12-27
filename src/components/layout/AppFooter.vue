<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/images/南开大学logo.jpg" alt="南开大学Logo" class="footer-logo-img" />
          <p class="footer-slogan">允公允能，日新月异</p>
        </div>
        <div class="footer-links">
          <div class="footer-link-group">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#home" data-section="home">首页</a></li>
              <li><a href="#about" data-section="about">学校介绍</a></li>
              <li><a href="#map" data-section="map">校园地图</a></li>
              <li><a href="life.html">生活服务</a></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h4>官方平台</h4>
            <ul>
              <li><a href="https://www.nankai.edu.cn" target="_blank">南开大学官网</a></li>
              <li><a href="https://jwc.nankai.edu.cn" target="_blank">教务处</a></li>
              <li><a href="https://graduate.nankai.edu.cn" target="_blank">研究生院</a></li>
              <li><a href="https://xsc.nankai.edu.cn" target="_blank">学生工作处</a></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h4>招生就业</h4>
            <ul>
              <li><a href="https://zsb.nankai.edu.cn" target="_blank">本科招生</a></li>
              <li><a href="https://graduate.nankai.edu.cn" target="_blank">研究生招生</a></li>
              <li><a href="https://job.nankai.edu.cn" target="_blank">就业指导中心</a></li>
            </ul>
          </div>
          <div class="footer-link-group">
            <h4>联系我们</h4>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> 天津市南开区卫津路94号</li>
              <li><i class="fas fa-phone"></i> 022-23508219</li>
              <li><i class="fas fa-envelope"></i> office@nankai.edu.cn</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        
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
  background-color: var(--nk-blue-dark);
  color: var(--nk-white);
  padding: 60px 0 24px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  flex: 1;
  min-width: 250px;
}

.footer-logo-img {
  height: 60px;
  margin-bottom: 16px;
}

.footer-slogan {
  font-size: 18px;
  font-weight: 500;
  opacity: 0.9;
}

.footer-links {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}

.footer-link-group h4 {
  font-size: 16px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--nk-accent);
  display: inline-block;
}

.footer-link-group ul {
  list-style: none;
}

.footer-link-group li {
  margin-bottom: 8px;
}

.footer-link-group a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition);
}

.footer-link-group a:hover {
  color: var(--nk-accent);
  margin-left: 4px;
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  opacity: 0.7;
}
</style>
