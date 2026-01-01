<template>
  <div class="psychological-counseling">
   

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="service-title">
        <h1>心理咨询</h1>
        <p>为南开学子提供专业心理健康支持与咨询服务</p>
      </div>

      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <div class="breadcrumb-container">
          <a href="index.html">首页</a>
          <span class="separator">/</span>
          <a href="javascript:void(0)" id="lifeServiceLink2">生活服务</a>
          <span class="separator">/</span>
          <span class="current">心理咨询</span>
        </div>
      </div>

      <!-- 服务时间 -->
      <div class="service-info-card">
        <div class="section-header">
          <i class="fas fa-clock"></i>
          <h2>服务时间</h2>
        </div>
        <div class="time-info">
          <i class="fas fa-clock"></i>
          <span>周一至周日：9:00-20:00（法定节假日除外）</span>
        </div>
      </div>

      <!-- 校区咨询点 -->
      <div class="service-info-card">
        <div class="section-header">
          <i class="fas fa-map-marker-alt"></i>
          <h2>校区咨询点</h2>
        </div>
        <div class="location-cards">
          <div 
            v-for="location in locations" 
            :key="location.id"
            class="location-card"
          >
            <div class="campus-name">{{ location.name }}</div>
            <div class="campus-details">
              <div class="location-info">
                <i class="fas fa-building"></i>
                <span>{{ location.building }}</span>
              </div>
              <div class="contact-info">
                <i class="fas fa-phone"></i>
                <span>{{ location.phone }}</span>
              </div>
            </div>
            <button class="btn btn-primary" @click="copyToClipboard(location.phone)">
              <i class="fas fa-copy"></i>
              复制电话
            </button>
          </div>
        </div>
      </div>

      <!-- 心理援助热线 -->
      <div class="service-info-card">
        <div class="section-header">
          <i class="fas fa-phone-alt"></i>
          <h2>心理援助热线</h2>
        </div>
        <div class="helpline-cards">
          <div 
            v-for="helpline in helplines" 
            :key="helpline.id"
            class="helpline-card"
          >
            <div class="helpline-name">{{ helpline.name }}</div>
            <div class="helpline-number" @click="copyToClipboard(helpline.number)">
              <i class="fas fa-phone"></i>
              <span>{{ helpline.number }}</span>
            </div>
            <div class="helpline-desc">{{ helpline.description }}</div>
          </div>
        </div>
      </div>

      <!-- 服务介绍 -->
      <div class="service-info-card">
        <div class="section-header">
          <i class="fas fa-info-circle"></i>
          <h2>服务介绍</h2>
        </div>
        <div class="service-types">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="service-type-item"
          >
            <div class="service-type-icon">
              <i :class="service.icon"></i>
            </div>
            <div class="service-type-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <footer>
      <div class="footer-container">
        <p>© 2023 南开大学服务网 - 为南开学子提供便捷服务</p>
      </div>
    </footer>

    <!-- 提示消息 -->
    <div class="toast" :class="{ active: showToast }">{{ toastMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'PsychologicalCounseling',
  data() {
    return {
      isScrolled: false,
      showToast: false,
      toastMessage: '',
      locations: [
        {
          id: 1,
          name: '八里台校区',
          building: '学生活动中心409',
          phone: '022-23505432'
        },
        {
          id: 2,
          name: '津南校区',
          building: '大通活动中心E303',
          phone: '022-85358432'
        },
        {
          id: 3,
          name: '泰达学院',
          building: '六区303',
          phone: '022-66229388'
        }
      ],
      helplines: [
        {
          id: 1,
          name: '天津市24小时阳光心理热线',
          number: '400-1060-525',
          description: '24小时专业心理支持服务'
        },
        {
          id: 2,
          name: '全国统一心理援助热线',
          number: '12356',
          description: '全国范围内心理援助服务'
        }
      ],
      services: [
        {
          id: 1,
          title: '个体心理咨询',
          description: '一对一的专业心理咨询，帮助您解决个人成长、情绪管理、人际关系等方面的困扰。',
          icon: 'fas fa-user'
        },
        {
          id: 2,
          title: '团体心理辅导',
          description: '通过小组互动形式，促进成员间的交流与支持，共同探索心理成长主题。',
          icon: 'fas fa-users'
        },
        {
          id: 3,
          title: '心理健康讲座',
          description: '定期开展心理健康知识普及讲座，提升学生心理素质和自我调适能力。',
          icon: 'fas fa-chalkboard-teacher'
        },
        {
          id: 4,
          title: '心理测评与评估',
          description: '提供专业的心理测评服务，帮助您更好地了解自己的心理特点和状态。',
          icon: 'fas fa-clipboard-check'
        },
        {
          id: 5,
          title: '危机干预与支持',
          description: '为处于心理危机状态的学生提供及时的专业干预和支持服务。',
          icon: 'fas fa-hands-helping'
        }
      ]
    }
  },
  methods: {
    copyToClipboard(text) {
      // 复制到剪贴板功能
      navigator.clipboard.writeText(text).then(() => {
        this.showToastMessage('电话号码已复制到剪贴板')
      }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        
        this.showToastMessage('电话号码已复制到剪贴板')
      })
    },
    showToastMessage(message) {
      this.toastMessage = message
      this.showToast = true
      
      setTimeout(() => {
        this.showToast = false
      }, 2000)
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
    window.scrollTo(0, 0)
    // 初始化时检查滚动位置
    this.handleScroll()
  },
  beforeUnmount() {
    // 移除事件监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.psychological-counseling {
  font-family: 'Microsoft YaHei', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

/* 页面头部样式 */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.logo-img {
  height: 40px;
  margin-right: 15px;
}

.logo-text {
  font-size: 22px;
  font-weight: bold;
  color: #4e73df;
}

/* 导航栏样式 */
.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 35px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  font-size: 16px;
}

.nav-link:hover,
.nav-link.active {
  color: #4e73df;
  border-bottom-color: #4e73df;
}

/* 面包屑导航 */
.breadcrumb {
  background-color: #f8f9fc;
  padding: 20px 0;
  border-bottom: 1px solid #e3e6f0;
}

.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 14px;
}

.breadcrumb a {
  color: #4e73df;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #2e59d9;
  text-decoration: underline;
}

.breadcrumb .separator {
  margin: 0 10px;
  color: #858796;
}

.breadcrumb .current {
  color: #5a5c69;
  font-weight: 500;
}

/* 主内容区域 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}

.service-title {
  text-align: center;
  margin-bottom: 50px;
}

.service-title h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.service-title h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #4e73df;
  border-radius: 2px;
}

.service-title p {
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 25px auto 0;
  line-height: 1.7;
}

/* 服务信息卡片 */
.service-info-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-bottom: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

/* 章节标题样式 */
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e3e6f0;
}

.section-header i {
  font-size: 28px;
  color: #4e73df;
  margin-right: 15px;
  background-color: #e7f1ff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-header h2 {
  font-size: 24px;
  color: #333;
  font-weight: 600;
}

/* 服务时间 */
.time-info {
  background-color: #f8f9fc;
  border-left: 5px solid #4e73df;
  padding: 25px 30px;
  border-radius: 0 8px 8px 0;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
}

.time-info i {
  color: #4e73df;
  margin-right: 15px;
  font-size: 24px;
}

/* 校区位置卡片 */
.location-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.location-card {
  background-color: #fff;
  border: 1px solid #e3e6f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.location-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #4e73df;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.location-card:hover::before {
  transform: scaleX(1);
}

.campus-name {
  font-size: 22px;
  font-weight: 600;
  color: #4e73df;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e3e6f0;
  display: flex;
  align-items: center;
}

.campus-name i {
  margin-right: 10px;
  font-size: 20px;
}

.campus-details {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
}

.location-info,
.contact-info {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
}

.location-info i,
.contact-info i {
  width: 24px;
  color: #5a5c69;
  margin-right: 12px;
  font-size: 18px;
}

/* 热线卡片 */
.helpline-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.helpline-card {
  background-color: #fff;
  border: 1px solid #e3e6f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.helpline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #e74a3b;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.helpline-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.helpline-card:hover::before {
  transform: scaleX(1);
}

.helpline-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.4;
}

.helpline-number {
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  color: #e74a3b;
  margin-bottom: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.helpline-number:hover {
  color: #c0392b;
}

.helpline-number i {
  margin-right: 12px;
  font-size: 24px;
}

.helpline-desc {
  font-size: 15px;
  color: #5a5c69;
  line-height: 1.5;
}

/* 服务类型 */
.service-types {
  margin-top: 30px;
}

.service-type-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e3e6f0;
}

.service-type-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.service-type-icon {
  background-color: #e7f1ff;
  color: #4e73df;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.service-type-item:hover .service-type-icon {
  background-color: #4e73df;
  color: #fff;
  transform: scale(1.05);
}

.service-type-icon i {
  font-size: 28px;
}

.service-type-content h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.service-type-content p {
  font-size: 16px;
  color: #5a5c69;
  line-height: 1.6;
}

/* 页脚样式 */
footer {
  background-color: #f8f9fc;
  border-top: 1px solid #e3e6f0;
  padding: 40px 0;
  margin-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  color: #5a5c69;
  font-size: 15px;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #4e73df;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.btn:hover {
  background-color: #3a5bd9;
}

/* 提示消息样式 */
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 15px;
  pointer-events: none;
}

.toast.active {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .location-cards,
  .helpline-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 15px 0;
  }
  
  .nav-links {
    margin-top: 15px;
  }
  
  .nav-links li {
    margin: 0 10px;
  }
  
  .service-title h1 {
    font-size: 30px;
  }
  
  .service-info-card {
    padding: 25px;
  }
  
  .location-cards,
  .helpline-cards {
    grid-template-columns: 1fr;
  }
  
  .service-type-item {
    flex-direction: column;
    text-align: center;
  }
  
  .service-type-icon {
    margin: 0 auto 20px;
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 30px 15px 40px;
  }
  
  .service-info-card {
    padding: 20px;
  }
  
  .section-header {
    flex-direction: column;
    text-align: center;
  }
  
  .section-header i {
    margin-bottom: 15px;
    margin-right: 0;
  }
  
  .time-info {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  
  .time-info i {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .helpline-number {
    font-size: 22px;
    justify-content: center;
  }
}
</style>