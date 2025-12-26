<template>
  <div class="life-view">
    <div class="container">
      <div class="life-header">
        <h1 class="page-title">生活服务</h1>
        <p class="page-subtitle">便捷生活，贴心服务 | 打造南开学子一站式生活服务平台</p>
      </div>

      <!-- 服务分类 -->
      <div class="service-categories">
        <!-- 宿舍服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-bed"></i>
            </div>
            <h2 class="category-title">宿舍服务</h2>
          </div>
          <div class="service-grid">
            <div class="service-item" @click="navigateTo('/life/dorm-repair')">
              <div class="service-icon">
                <i class="fas fa-tools"></i>
              </div>
              <h3>宿舍报修</h3>
              <p>在线提交宿舍设施报修申请</p>
            </div>
          </div>
        </div>

        <!-- 校园服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-school"></i>
            </div>
            <h2 class="category-title">校园服务</h2>
          </div>
          <div class="service-grid">
            <div class="service-item" @click="navigateTo('/life/stadium-booking')">
              <div class="service-icon">
                <i class="fas fa-running"></i>
              </div>
              <h3>体育馆预约</h3>
              <p>预约校内体育场馆和设施</p>
            </div>
            <div class="service-item" @click="navigateTo('/life/shuttle-bus')">
              <div class="service-icon">
                <i class="fas fa-bus"></i>
              </div>
              <h3>班车查询</h3>
              <p>查询校车时刻表和路线</p>
            </div>
            <div class="service-item" @click="navigateTo('/life/club-activities')">
              <div class="service-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>社团活动</h3>
              <p>了解校内社团和活动信息</p>
            </div>
          </div>
        </div>

        <!-- 学生服务 -->
        <div class="service-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h2 class="category-title">学生服务</h2>
          </div>
          <div class="service-grid">
            <div class="service-item" @click="navigateTo('/life/psychological-counseling')">
              <div class="service-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>心理咨询</h3>
              <p>专业心理健康支持与咨询</p>
            </div>
            <div class="service-item" @click="navigateTo('/life/card-loss')">
              <div class="service-icon">
                <i class="fas fa-id-card"></i>
              </div>
              <h3>校园卡挂失</h3>
              <p>校园卡丢失在线挂失</p>
            </div>
            <div class="service-item" @click="navigateTo('/life/card-recharge')">
              <div class="service-icon">
                <i class="fas fa-credit-card"></i>
              </div>
              <h3>校园卡充值</h3>
              <p>在线为校园卡充值</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeView',
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.life-view {
  padding: 40px 0;
}

.life-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.service-categories {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-category {
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.category-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.category-icon i {
  font-size: 1.8rem;
  color: #4a6cf7;
}

.category-title {
  font-size: 1.8rem;
  color: #333;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.service-item {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.service-icon i {
  font-size: 1.8rem;
  color: #4a6cf7;
}

.service-item h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.service-item p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .category-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>