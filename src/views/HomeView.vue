<template>
  <div class="page">
    <!-- 把原 body 内容粘到这里 -->
    <!-- 导航栏 -->
   <!-- <header class="header">
    <div class="container">
      <nav class="navbar">
        <a href="index.html" class="logo">
          <img src="assets/南开大学logo.jpg" alt="南开大学Logo" class="logo-img" />
          <span class="logo-text">南开大学服务网</span>
        </a>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link active" data-section="home">首页</a></li>
          <li><a href="about.html" class="nav-link">学校介绍</a></li>
          <li><a href="map.html" class="nav-link">校园地图</a></li>
          <li><a href="life.html" class="nav-link" data-section="life">生活服务</a></li>
          <li><a href="weather.html" class="nav-link">风语者</a></li>
        </ul>
      </nav>
    </div>
  </header> -->

  <!-- 首页板块 -->
  <section id="home" class="section home-section active">
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">南开大学</h1>
          <p class="hero-subtitle">允公允能，日新月异 | 致力于培养具有国际视野和社会责任感的高素质人才</p>
          <div class="hero-buttons">
            <a href="about.html" class="btn">了解南开</a>
            <a href="map.html" class="btn btn-outline">校园地图</a>
          </div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="container">
        <h2 class="section-title">服务导航</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-university"></i>
            </div>
            <h3 class="feature-title">学校介绍</h3>
            <p class="feature-desc">了解南开大学的历史沿革、办学理念、学科设置和校园文化</p>
            <a href="about.html#about-overview" class="feature-link">查看详情 <i class="fas fa-arrow-right"></i></a>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3 class="feature-title">校园地图</h3>
            <p class="feature-desc">交互式校园地图，快速定位建筑位置，查看详细介绍</p>
            <a href="map.html" class="feature-link">立即查看 <i class="fas fa-arrow-right"></i></a>
          </div>
          <div class="feature-card">
             <div class="feature-icon">
               <i class="fas fa-concierge-bell"></i>
              </div>
              <h3 class="feature-title">生活服务</h3>
              <p class="feature-desc">宿舍报修、校园卡、交通医疗等常用服务入口一站直达</p>
              <a href="life.html" class="feature-link">进入服务 <i class="fas fa-arrow-right"></i></a>
          </div>


          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-wind wind-icon-animate"></i>
            </div>
            <h3 class="feature-title">风语者</h3>
            <p class="feature-desc">获取此刻津南风力信息，提供穿衣与出行建议</p>
            <a href="weather.html" class="feature-link">立即查看 <i class="fas fa-arrow-right"></i></a>
         </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 生活服务板块 -->
  <section id="life" class="section life-section">
    <div class="container">
      <div class="life-header">
        <h2 class="section-title">生活服务</h2>
        <p class="life-tagline">便捷生活，贴心服务 | 打造南开学子一站式生活服务平台</p>
      </div>

      <!-- 服务分类 -->
      <div class="service-categories">
        <!-- 宿舍服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-bed"></i>
            </div>
            <h3 class="category-title">宿舍服务</h3>
          </div>
          <div class="service-grid">
            <a href="dorm-repair.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-tools"></i>
                </div>
                <h4 class="service-name">宿舍报修</h4>
                <p class="service-desc">水电维修、家具更换、网络故障报修，快速响应宿舍问题</p>
              </div>
            </a>
            <a href="#" class="service-item-link" id="safety-service-link" onclick="document.getElementById('safety-modal').style.display='block'; document.body.style.overflow='hidden'; return false;">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h4 class="service-name">安全保障</h4>
                <p class="service-desc">校园安全紧急联系、门禁系统使用指南、安全防范知识</p>
              </div>
            </a>
            <div>
            </div>
          </div>
        </div>

        <!-- 校园卡服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-credit-card"></i>
            </div>
            <h3 class="category-title">校园卡服务</h3>
          </div>
          <div class="service-grid">
            <a href="card-loss.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h4 class="service-name">校园卡挂失</h4>
                <p class="service-desc">校园卡丢失快速挂失流程、补办地点、临时卡申请指南</p>
              </div>
            </a>
            <a href="card-recharge.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-wallet"></i>
                </div>
                <h4 class="service-name">校园卡充值</h4>
                <p class="service-desc">支付宝/微信充值教程、自助充值机位置、校园卡消费明细查询</p>
              </div>
            </a>
            <div>
            </div>
          </div>
        </div>

        <!-- 交通服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-bus"></i>
            </div>
            <h3 class="category-title">交通服务</h3>
          </div>
          <div class="service-grid">
            <a href="shuttle-bus.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-shuttle-van"></i>
                </div>
                <h4 class="service-name">校车查询</h4>
                <p class="service-desc">八里台-津南校区班车时刻表、节假日调整、实时位置查询</p>
              </div>
            </a>
            <div class="service-item">
              <div class="service-icon">
                <i class="fas fa-bicycle"></i>
              </div>
              <h4 class="service-name">共享单车</h4>
                <p class="service-desc">校园内共享单车停放区域规划、使用优惠、违规停放处理办法</p>
              </div>
            <div>
            </div>
          </div>
        </div>

        <!-- 医疗健康 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-hospital"></i>
            </div>
            <h3 class="category-title">医疗健康</h3>
          </div>
          <div class="service-grid">
            <a href="#" class="service-item-link" id="hospital-service-link" onclick="document.getElementById('hospital-modal').style.display='block'; document.body.style.overflow='hidden'; return false;">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-clinic-medical"></i>
                </div>
                <h4 class="service-name">校医院</h4>
                <p class="service-desc">各科室门诊时间、专家坐诊表、学生医保报销流程及定点医院</p>
              </div>
            </a>
            <a href="psychological-counseling.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-heartbeat"></i>
                </div>
                <h4 class="service-name">心理咨询</h4>
                <p class="service-desc">个人心理咨询预约、团体辅导活动、心理健康测评及危机干预</p>
              </div>
            </a>
            <div>
            </div>
          </div>
        </div>

        <!-- 文体生活 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-running"></i>
            </div>
            <h3 class="category-title">文体生活</h3>
          </div>
          <div class="service-grid">
            <a href="stadium-booking.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-basketball-ball"></i>
                </div>
                <h4 class="service-name">体育馆预约</h4>
                <p class="service-desc">篮球场/羽毛球场/网球场在线预约、体育器材借用、赛事活动报名</p>
              </div>
            </a>
            <a href="https://lib.nankai.edu.cn/" target="_blank" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-book-open"></i>
                </div>
                <h4 class="service-name">图书馆</h4>
                <p class="service-desc">馆藏图书检索、自习室座位预约、电子资源访问及文献传递服务</p>
              </div>
            </a>
            <a href="club-activities.html" class="service-item-link">
              <div class="service-item">
                <div class="service-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h4 class="service-name">学生社团</h4>
                <p class="service-desc">社团分类查询、活动日历、新学期招新信息及社团成立申请流程</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 服务提示 -->
      <div class="service-tips">
        <div class="tips-header">
          <h3><i class="fas fa-info-circle"></i> 服务提示</h3>
        </div>
        <div class="tips-content">
          <div class="tip-item">
            <div class="tip-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="tip-text">
              <h4>服务热线</h4>
              <p>校园服务总机：022-23508219（工作时间：周一至周五 08:00-17:30）</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-icon">
              <i class="fas fa-globe"></i>
            </div>
            <div class="tip-text">
              <h4>在线服务</h4>
              <p>南开大学一站式服务平台：service.nankai.edu.cn（24小时在线服务）</p>
            </div>
          </div>
          <div class="tip-item">
            <div class="tip-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <div class="tip-text">
              <h4>服务中心</h4>
              <p>学生服务中心：各校区教学楼一楼（工作时间：周一至周五 08:30-17:00）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  

  <!-- 安全保障模态框 -->
  <!-- <div id="safety-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>校园安全保障</h3>
        <span class="close-btn" id="close-safety-modal" onclick="document.getElementById('safety-modal').style.display='none'; document.body.style.overflow='auto';">&times;</span>
      </div>
      <div class="modal-body">
        <div class="safety-info">
          <h4>校园报警电话</h4>
          <div class="campus-info">
            <h5>八里台校区</h5>
            <p class="phone-number">23508962</p>
            <p class="phone-number">23508122</p>
          </div>
          <div class="campus-info">
            <h5>津南校区</h5>
            <p class="phone-number">85358962</p>
            <p class="phone-number">85358122</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- 校医院模态框 -->
  <!-- <div id="hospital-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>南开大学校医院</h3>
        <span class="close-btn" id="close-hospital-modal" onclick="document.getElementById('hospital-modal').style.display='none'; document.body.style.overflow='auto';">&times;</span>
      </div>
      <div class="modal-body">
        <div class="hospital-info">
          <div class="info-section">
            <h4>主要职责</h4>
            <p>南开大学医院是天津市城镇职工基本医疗保险和城乡居民基本医疗保险定点一级医院，是校内医疗服务窗口单位，为校内师生员工、离退休教职工提供基础医疗及预防保健服务，同时承担着学校的健康教育课、传染病防控、健康体检、健康宣传等公共卫生任务，以及学校重大活动和会议的医疗保障服务。</p>
          </div>
          
          <div class="info-section">
            <h4>办公地点</h4>
            <div class="location-info">
              <p><strong>八里台校区：</strong>院内生科院西侧</p>
              <p><strong>津南校区：</strong>院内近西北门</p>
            </div>
          </div>
          
          <div class="info-section">
            <h4>联系方式</h4>
            <div class="contact-info">
              <p class="phone-number">022-85358311（24小时值班电话）</p>
              <p class="phone-number">022-23498770（八里台校区）</p>
              <p class="phone-number">022-85358311（津南校区）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- 校园地图板块 -->
  <section id="map" class="section map-section">
    <div class="container">
      <div class="page">
        <header class="page-header">
          <h1>南开大学交互地图</h1>
          <p>鼠标滑过某栋建筑会发光浮起，点击后高亮锁定并显示对应介绍，按 Esc 取消选择。</p>
        </header>

        <main class="layout">
          <!-- 左侧地图 -->
          <section class="map-panel">
            <div class="map-container">
              <img src="assets/nk-map.jpg" alt="南开大学手绘地图" class="campus-map" />
              <!-- 建筑热点由 map.js 动态生成 -->
            </div>
          </section>

          <!-- 右侧信息栏 -->
          <aside class="info-panel">
            <div class="info-box">
              <h2 class="info-title" id="info-title">操作提示</h2>
              <div class="info-image-container" id="info-image-container" style="display: none;"></div>
              <p class="info-body" id="info-body">
                鼠标移动到地图上某栋建筑区域，会看到该建筑发光浮起；
                点击后高亮会一直存在，并在右侧显示对应文字介绍。
                按 Esc 取消当前选择。
              </p>
            </div>

            <div class="hint-box">
              <p>操作说明：</p>
              <ul>
                <li>🖱️ 滑过建筑：黄色高亮 + 浮起效果 + 提示音</li>
                <li>🖱️ 左键点击：蓝色高亮锁定 + 文字介绍+图片</li>
                <li>⎋ Esc：取消高亮，恢复默认提示</li>
                <li>🛠️ 调试：热点可拖拽，松手后控制台打印新 left/top</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  </section>

  
 </div>
</template>
<style>
/* 把原 CSS 粘这里 */
/* 全局样式重置 */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* 南开大学品牌色 */
  --nk-blue: #1a5397;
  --nk-blue-light: #3b82f6;
  --nk-blue-dark: #0f3460;
  --nk-gray: #f5f7fa;
  --nk-gray-dark: #4b5563;
  --nk-white: #ffffff;
  --nk-accent: #ffc107;

  /* 通用变量 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --transition: all 0.3s ease;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  background-color: var(--nk-gray);
  color: #333;
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* 容器样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 板块通用样式 */
.section {
  display: none;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
}

.section.active {
  display: block !important;
}

/* 导航栏样式 */
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

/* 英雄区域样式 */
.hero {
  background: linear-gradient(135deg, var(--nk-blue-dark), var(--nk-blue));
  color: var(--nk-white);
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/八里台校区.webp');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 48px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto 48px;
  opacity: 0.9;
  line-height: 1.8;
}

.btn {
  display: inline-block;
  padding: 14px 36px;
  background-color: var(--nk-accent);
  color: var(--nk-blue-dark);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.btn:hover {
  background-color: #e6a800;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--nk-white);
  color: var(--nk-white);
  margin-left: 20px;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* 特色板块样式 */
.features {
  padding: 80px 0;
  background-color: var(--nk-white);
}

.section-title {
  font-size: 36px;
  color: var(--nk-blue-dark);
  text-align: center;
  margin-bottom: 16px;
  position: relative;
  font-weight: 700;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--nk-accent);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  background-color: var(--nk-white);
  border-radius: var(--radius-md);
  padding: 36px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  text-align: center;
  border-top: 4px solid var(--nk-blue);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 48px;
  color: var(--nk-blue);
  margin-bottom: 24px;
}

.feature-title {
  font-size: 22px;
  color: var(--nk-blue-dark);
  margin-bottom: 16px;
  font-weight: 600;
}

.feature-desc {
  color: var(--nk-gray-dark);
  font-size: 15px;
  line-height: 1.7;
  flex-grow: 1;
  margin-bottom: 20px;
}

/* 快速链接样式 */
.feature-link {
  display: inline-block;
  color: var(--nk-blue);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  margin-top: auto;
}

.feature-link:hover {
  color: var(--nk-blue-dark);
  transform: translateX(5px);
}

.feature-link i {
  margin-left: 5px;
  font-size: 12px;
}

/* 学校介绍页面样式 */
.about-section {
  background-color: var(--nk-white);
  padding: 80px 0;
}

/* 地图页面样式 */
.map-section {
  background-color: var(--nk-white);
  padding: 60px 0;
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.about-tagline {
  font-size: 18px;
  color: var(--nk-gray-dark);
  margin-top: 8px;
  font-style: italic;
}

/* 每个区块样式 */
.about-section-block {
  background-color: var(--nk-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 30px;
  margin-bottom: 40px;
  transition: var(--transition);
}

.about-section-block:hover {
  box-shadow: var(--shadow-md);
}

/* 区块标题栏 */
.about-section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.section-icon {
  width: 40px;
  height: 40px;
  background-color: var(--nk-blue-light);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.about-section-title {
  font-size: 26px;
  color: var(--nk-blue-dark);
  font-weight: 600;
  margin-bottom: 0;
}

/* 内容行布局 */
.about-content-row {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.about-image-column {
  flex: 1;
}

.about-text-column {
  flex: 1.5;
}

/* 图片画廊 */
.about-image-gallery {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--transition);
}

.thumbnail-images {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.thumbnail {
  flex: 1;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.7;
  transition: var(--transition);
}

.thumbnail:hover {
  opacity: 1;
  transform: scale(1.05);
}

/* 高亮项 */
.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f0f7ff;
  color: var(--nk-blue);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.highlight-item i {
  font-size: 12px;
}

/* 时间线样式（完全匹配你提供的截图）
.timeline {
  position: relative;
  padding-left: 140px;
  /* 预留日期+竖线区域 */
  /* margin: 0;
  width: 100%;
} */ */

/* 时间线竖线（左对齐，与日期块右侧贴合） */
.timeline::before {
  content: "";
  position: absolute;
  left: 80px;
  /* 竖线位于日期块右侧 */
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--nk-blue-light);
  z-index: 1;
}

/* 时间线项：日期+内容 */
.timeline-item {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* 日期块：左靠，覆盖竖线 */
.timeline-date {
  position: absolute;
  left: -140px;
  /* 左移到timeline的padding区域 */
  top: 0;
  width: 120px;
  /* 足够宽的日期区域 */
  text-align: left;
  /* 左对齐文字 */
  background-color: var(--nk-blue);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
  /* 覆盖竖线 */
  box-sizing: border-box;
}

/* 内容区：右靠，无遮挡 */
.timeline-content {
  background-color: #f8f9fa;
  padding: 15px 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

.timeline-content h4 {
  color: var(--nk-blue-dark);
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
}

.timeline-content p {
  color: var(--nk-gray-dark);
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
}

/* 学科卡片样式 */
.disciplines-content {
  margin-bottom: 30px;
}

.disciplines-intro {
  margin-bottom: 30px;
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.discipline-card {
  background-color: #f8f9fa;
  border-radius: var(--radius-md);
  padding: 25px;
  transition: var(--transition);
  border-left: 4px solid var(--nk-blue-light);
}

.discipline-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
  background-color: white;
}

.discipline-icon {
  font-size: 32px;
  color: var(--nk-blue);
  margin-bottom: 15px;
}

.discipline-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  margin-bottom: 10px;
}

.discipline-desc {
  font-size: 14px;
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

/* 校园文化样式 */
.culture-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.culture-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.culture-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-sm);
}

.culture-icon {
  font-size: 36px;
  color: var(--nk-blue);
  margin-top: 5px;
}

.culture-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  margin-bottom: 8px;
}

.culture-desc {
  font-weight: 500;
  margin-bottom: 8px;
}

.culture-explainer {
  font-size: 14px;
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

/* 校园设施样式（移除左上角小字 - 已修改） */
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.facility-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  background-color: white;
}

.facility-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

.facility-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: var(--transition);
}

.facility-card:hover .facility-image {
  transform: scale(1.05);
}

.facility-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  padding: 15px 20px 5px;
  margin-bottom: 5px;
}

.facility-desc {
  font-size: 14px;
  color: var(--nk-gray-dark);
  padding: 0 20px 20px;
  line-height: 1.6;
}

/* 数据统计样式 */
.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.stat-card {
  background-color: var(--nk-blue-light);
  color: var(--nk-white);
  padding: 25px 15px;
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  transform: translateX(-100%);
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background-color: var(--nk-blue);
}

.stat-card:hover::before {
  transform: translateX(100%);
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 杰出校友样式 */
.alumni-slider {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding-bottom: 20px;
  scrollbar-width: thin;
  scrollbar-color: var(--nk-blue-light) transparent;
}

.alumni-slider::-webkit-scrollbar {
  height: 6px;
}

.alumni-slider::-webkit-scrollbar-track {
  background: transparent;
}

.alumni-slider::-webkit-scrollbar-thumb {
  background-color: var(--nk-blue-light);
  border-radius: 3px;
}

.alumni-item {
  flex: 0 0 280px;
  background-color: white;
  border-radius: var(--radius-md);
  padding: 25px;
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: var(--transition);
}

.alumni-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.alumni-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 15px;
  border: 3px solid var(--nk-blue-light);
}

.alumni-name {
  font-size: 18px;
  color: var(--nk-blue-dark);
  margin-bottom: 5px;
}

.alumni-title {
  font-size: 14px;
  color: var(--nk-gray-dark);
  margin-bottom: 10px;
  font-style: italic;
}

.alumni-desc {
  font-size: 13px;
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

/* 地图页面样式 */
.page {
  max-width: 1200px;
  margin: 24px auto 40px;
  padding: 0 16px;
}

.page-header {
  text-align: center;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 32px;
  margin-bottom: 12px;
  color: var(--nk-blue-dark);
}

.page-header p {
  font-size: 16px;
  color: var(--nk-gray-dark);
}

.layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* 左侧地图 */
.map-panel {
  flex: 2;
}

.map-container {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #e0e7ff;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

.campus-map {
  display: block;
  width: 100%;
  height: auto;
}

/* ===============================
   Hotspot：只有光，不要边框，不要变蓝
================================ */



/









/* 右侧信息栏 */
.info-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-box {
  background: white;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
  min-height: 200px;
}

.info-title {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--nk-blue-dark);
}

/* 图片容器样式 */
.info-image-container {
  margin: 16px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 图片样式 */
.info-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 300px;
}

.info-body {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
  white-space: pre-wrap;
}

.hint-box {
  background: #eef2ff;
  border-radius: 14px;
  padding: 16px;
  font-size: 14px;
  color: #4b5563;
}

.hint-box ul {
  list-style: none;
  margin-top: 8px;
}

.hint-box li+li {
  margin-top: 4px;
}

/* 页脚样式 */
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

/* 响应式样式 */
@media (max-width: 992px) {
  .about-content-row {
    flex-direction: column;
  }

  .about-image-column,
  .about-text-column {
    flex: none;
    width: 100%;
  }

  .layout {
    flex-direction: column;
  }

  .info-panel {
    width: 100%;
  }

  /* 响应式时间线 */
  .timeline {
    padding-left: 120px;
  }

  .timeline::before {
    left: 70px;
  }

  .timeline-date {
    left: -120px;
    width: 100px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 16px 0;
  }

  .nav-links {
    margin-top: 16px;
    gap: 20px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .btn {
    padding: 12px 28px;
    margin-bottom: 16px;
  }

  .btn-outline {
    margin-left: 0;
  }

  .section-title {
    font-size: 28px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }

  .about-section-title {
    font-size: 22px;
  }

  /* 响应式时间线 */
  .timeline {
    padding-left: 100px;
  }

  .timeline::before {
    left: 60px;
  }

  .timeline-date {
    left: -100px;
    width: 90px;
    font-size: 12px;
  }

  .timeline-content {
    padding: 12px 18px;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 28px;
  }

  .features {
    padding: 40px 0;
  }

  .feature-card {
    padding: 24px;
  }

  .about-section-block {
    padding: 20px;
  }

  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-number {
    font-size: 24px;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }

  .alumni-item {
    flex: 0 0 240px;
  }

  /* 移动端时间线 */
  .timeline {
    padding-left: 90px;
  }

  .timeline::before {
    left: 50px;
  }

  .timeline-date {
    left: -90px;
    width: 80px;
    font-size: 11px;
  }

  .timeline-content {
    padding: 10px 15px;
  }

  .timeline-content h4 {
    font-size: 14px;
  }

  .timeline-content p {
    font-size: 13px;
  }
  
}
/* ===== 地图页：左右同高，右侧可滚动 ===== */




</style>

