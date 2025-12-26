<template>
  <div class="home">
    <!-- 首页英雄区 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">南开大学</h1>
          <p class="hero-subtitle">允公允能，日新月异 | 致力于培养具有国际视野和社会责任感的高素质人才</p>
          <div class="hero-buttons">
            <router-link to="/about" class="btn">了解南开</router-link>
            <router-link to="/map" class="btn btn-outline">校园地图</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务导航 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">服务导航</h2>
        <div class="features-grid">
          <div class="feature-card" @click="navigateTo('/life')">
            <div class="feature-icon">
              <i class="fas fa-concierge-bell"></i>
            </div>
            <h3>生活服务</h3>
            <p>心理咨询、体育馆预约、班车查询等便捷服务</p>
          </div>
          <div class="feature-card" @click="navigateTo('/map')">
            <div class="feature-icon">
              <i class="fas fa-map-marked-alt"></i>
            </div>
            <h3>校园地图</h3>
            <p>探索南开大学校园，查找教学楼、食堂等地点</p>
          </div>
          <div class="feature-card" @click="navigateTo('/weather')">
            <div class="feature-icon">
              <i class="fas fa-cloud-sun"></i>
            </div>
            <h3>风语者</h3>
            <p>实时天气信息，为您的出行提供参考</p>
          </div>
          <div class="feature-card" @click="navigateTo('/about')">
            <div class="feature-icon">
              <i class="fas fa-university"></i>
            </div>
            <h3>学校介绍</h3>
            <p>了解南开大学的历史、文化和学术成就</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 校园新闻 -->
    <section class="news">
      <div class="container">
        <h2 class="section-title">校园动态</h2>
        <div class="news-grid">
          <div class="news-card" v-for="item in news" :key="item.id">
            <div class="news-image">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="news-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <div class="news-meta">
                <span class="news-date">{{ item.date }}</span>
                <a href="#" class="news-link">阅读更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      news: [
        {
          id: 1,
          title: '南开大学2023年招生工作圆满结束',
          excerpt: '今年我校共录取本科生5000余人，研究生3000余人，生源质量持续提升。',
          date: '2023-08-30',
          image: require('@/assets/images/八里台校区.webp')
        },
        {
          id: 2,
          title: '我校在人工智能领域取得重要突破',
          excerpt: '计算机学院团队在国际顶级会议发表最新研究成果，获得学术界高度评价。',
          date: '2023-08-25',
          image: require('@/assets/images/科技馆.jpg')
        },
        {
          id: 3,
          title: '新学期开学典礼隆重举行',
          excerpt: '校长发表重要讲话，鼓励同学们在新学期继续发扬南开精神。',
          date: '2023-09-01',
          image: require('@/assets/images/周恩来.png')
        }
      ]
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 0;
}

.hero {
  background: linear-gradient(135deg, #4a6cf7 0%, #667eea 100%);
  color: white;
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/八里台校区.webp') no-repeat center;
  background-size: cover;
  opacity: 0.2;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.features {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #4a6cf7;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon i {
  font-size: 2rem;
  color: #4a6cf7;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.news {
  padding: 80px 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: 25px;
}

.news-content h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.news-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  color: #999;
  font-size: 0.9rem;
}

.news-link {
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.news-link:hover {
  color: #3a5bd9;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>