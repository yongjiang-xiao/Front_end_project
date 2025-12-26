<template>
  <div class="psychological-counseling">
    <!-- 页面头部 -->
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="header-title">
            <h1>心理咨询</h1>
            <p>为南开学子提供专业心理健康支持与咨询服务</p>
          </div>
          <div class="header-image">
            <i class="fas fa-brain" style="font-size: 4rem; color: white;"></i>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <!-- 服务介绍 -->
      <section class="intro-section">
        <div class="intro-card">
          <h2>心理健康服务中心</h2>
          <p>南开大学心理健康服务中心致力于为全校学生提供专业、保密的心理咨询服务，帮助同学们解决学习、生活、情感等方面的心理困扰，促进身心健康发展。</p>
          <div class="intro-features">
            <div class="feature-item">
              <i class="fas fa-user-shield"></i>
              <span>严格保密</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-user-md"></i>
              <span>专业团队</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-heart"></i>
              <span>免费服务</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 服务地点 -->
      <section class="locations-section">
        <h2 class="section-title">服务地点</h2>
        <div class="locations-grid">
          <div 
            v-for="location in locations" 
            :key="location.id"
            class="location-card"
          >
            <div class="location-header">
              <h3>{{ location.name }}</h3>
              <div class="location-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
            </div>
            <div class="location-info">
              <div class="info-item">
                <i class="fas fa-building"></i>
                <span>{{ location.building }}</span>
              </div>
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <span>{{ location.phone }}</span>
              </div>
              <div class="info-item">
                <i class="fas fa-clock"></i>
                <span>{{ location.hours }}</span>
              </div>
            </div>
            <button class="btn btn-primary" @click="copyToClipboard(location.phone)">
              <i class="fas fa-copy"></i>
              复制电话
            </button>
          </div>
        </div>
      </section>

      <!-- 预约咨询 -->
      <section class="booking-section">
        <h2 class="section-title">预约咨询</h2>
        <div class="booking-card">
          <form @submit.prevent="submitBooking">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">姓名</label>
                <input 
                  type="text" 
                  v-model="bookingForm.name" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">学号</label>
                <input 
                  type="text" 
                  v-model="bookingForm.studentId" 
                  class="form-control" 
                  required
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">手机号</label>
                <input 
                  type="tel" 
                  v-model="bookingForm.phone" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">邮箱</label>
                <input 
                  type="email" 
                  v-model="bookingForm.email" 
                  class="form-control" 
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">咨询校区</label>
              <select v-model="bookingForm.campus" class="form-control" required>
                <option value="">请选择校区</option>
                <option value="balitai">八里台校区</option>
                <option value="jinnan">津南校区</option>
                <option value="taida">泰达校区</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">咨询类型</label>
              <select v-model="bookingForm.type" class="form-control" required>
                <option value="">请选择咨询类型</option>
                <option value="individual">个人咨询</option>
                <option value="group">团体咨询</option>
                <option value="career">职业规划</option>
                <option value="relationship">人际关系</option>
                <option value="emotion">情绪管理</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">问题描述</label>
              <textarea 
                v-model="bookingForm.description" 
                class="form-control" 
                rows="4" 
                placeholder="请简单描述您希望咨询的问题..."
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">期望时间</label>
              <input 
                type="datetime-local" 
                v-model="bookingForm.preferredTime" 
                class="form-control" 
                required
              >
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-calendar-check"></i>
              提交预约
            </button>
          </form>
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="faq-section">
        <h2 class="section-title">常见问题</h2>
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <h3>{{ faq.question }}</h3>
              <i class="fas fa-chevron-down" :class="{ active: faq.isOpen }"></i>
            </div>
            <div class="faq-answer" :class="{ active: faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 心理健康资源 -->
      <section class="resources-section">
        <h2 class="section-title">心理健康资源</h2>
        <div class="resources-grid">
          <div 
            v-for="resource in resources" 
            :key="resource.id"
            class="resource-card"
          >
            <div class="resource-icon">
              <i :class="resource.icon"></i>
            </div>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <a :href="resource.link" class="resource-link" target="_blank">
              了解更多 <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PsychologicalCounseling',
  data() {
    return {
      locations: [
        {
          id: 1,
          name: '八里台校区',
          building: '学生活动中心302室',
          phone: '022-23501234',
          hours: '周一至周五 8:30-17:00'
        },
        {
          id: 2,
          name: '津南校区',
          building: '学生中心5楼',
          phone: '022-23505678',
          hours: '周一至周五 9:00-17:30'
        },
        {
          id: 3,
          name: '泰达校区',
          building: '教学楼A区203室',
          phone: '022-23509876',
          hours: '周一至周四 9:00-16:00'
        }
      ],
      bookingForm: {
        name: '',
        studentId: '',
        phone: '',
        email: '',
        campus: '',
        type: '',
        description: '',
        preferredTime: ''
      },
      faqs: [
        {
          question: '心理咨询是否收费？',
          answer: '南开大学心理健康服务中心为在校学生提供免费的心理咨询服务。',
          isOpen: false
        },
        {
          question: '咨询内容是否保密？',
          answer: '是的，我们严格遵守保密原则。未经您的同意，不会向任何人透露您的咨询内容，除非涉及法律规定的特殊情况。',
          isOpen: false
        },
        {
          question: '一次咨询多长时间？',
          answer: '个体咨询通常为50分钟，团体咨询为90分钟。咨询师会根据您的具体情况安排合适的咨询时长。',
          isOpen: false
        },
        {
          question: '需要提前多久预约？',
          answer: '建议至少提前3-5天预约，以便我们安排合适的咨询师和时间。紧急情况可直接联系中心。',
          isOpen: false
        },
        {
          question: '可以取消预约吗？',
          answer: '可以，但请至少提前24小时取消，以便将时间留给其他有需要的同学。',
          isOpen: false
        }
      ],
      resources: [
        {
          id: 1,
          title: '心理健康自测',
          description: '通过专业量表了解自己的心理健康状况',
          icon: 'fas fa-clipboard-check',
          link: '#'
        },
        {
          id: 2,
          title: '压力管理指南',
          description: '学习有效的压力管理技巧和方法',
          icon: 'fas fa-spa',
          link: '#'
        },
        {
          id: 3,
          title: '情绪调节技巧',
          description: '掌握情绪识别和调节的有效方法',
          icon: 'fas fa-smile',
          link: '#'
        },
        {
          id: 4,
          title: '人际关系改善',
          description: '提升人际交往能力，改善人际关系',
          icon: 'fas fa-users',
          link: '#'
        }
      ]
    }
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.$store.dispatch('showNotification', {
          type: 'success',
          message: '电话号码已复制到剪贴板'
        })
      }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        
        this.$store.dispatch('showNotification', {
          type: 'success',
          message: '电话号码已复制到剪贴板'
        })
      })
    },
    submitBooking() {
      // 这里可以添加表单提交逻辑
      this.$store.dispatch('showNotification', {
        type: 'success',
        message: '预约提交成功，我们将尽快与您联系！'
      })
      
      // 重置表单
      this.bookingForm = {
        name: '',
        studentId: '',
        phone: '',
        email: '',
        campus: '',
        type: '',
        description: '',
        preferredTime: ''
      }
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
.psychological-counseling {
  padding-top: 0;
}

.page-header {
  background: linear-gradient(135deg, #4a6cf7 0%, #667eea 100%);
  color: white;
  padding: 60px 0 40px;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/图书馆.jpg') no-repeat center;
  background-size: cover;
  opacity: 0.2;
  z-index: 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.header-title h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.header-title p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.intro-section {
  margin: 40px 0;
}

.intro-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.intro-card h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.intro-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.intro-features {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-item i {
  font-size: 2rem;
  color: #4a6cf7;
  margin-bottom: 10px;
}

.feature-item span {
  font-weight: 500;
  color: #333;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #4a6cf7;
}

.locations-section {
  margin: 50px 0;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.location-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-5px);
}

.location-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.location-header h3 {
  font-size: 1.3rem;
  color: #333;
}

.location-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-icon i {
  color: #4a6cf7;
}

.location-info {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-item i {
  width: 20px;
  color: #4a6cf7;
  margin-right: 10px;
}

.booking-section {
  margin: 50px 0;
}

.booking-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #4a6cf7;
  box-shadow: 0 0 0 2px rgba(74, 108, 247, 0.2);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #3a5bd9;
}

.btn-block {
  width: 100%;
}

.faq-section {
  margin: 50px 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: #f8f9fa;
}

.faq-question h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
}

.faq-question i {
  color: #4a6cf7;
  transition: transform 0.3s;
}

.faq-question i.active {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 25px 20px;
  color: #666;
  line-height: 1.6;
}

.resources-section {
  margin: 50px 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.resource-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.resource-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.resource-icon i {
  font-size: 1.8rem;
  color: #4a6cf7;
}

.resource-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
}

.resource-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.resource-link {
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s;
}

.resource-link:hover {
  gap: 10px;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-title {
    margin-bottom: 20px;
  }
  
  .intro-features {
    flex-direction: column;
    gap: 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .locations-grid,
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style>