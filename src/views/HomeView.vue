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
  background: linear-gradient(135deg, rgba(26, 83, 151, 0.7), rgba(120, 32, 105, 0.7)), url('@/assets/images/八里台校区.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 0;
  filter: brightness(0.8) contrast(1.1);
  transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
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

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

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
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--nk-blue);
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
  text-align: center;
  transition: var(--transition);
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(26, 83, 151, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.feature-icon i {
  font-size: 2rem;
  color: var(--nk-blue);
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 16px;
  color: var(--nk-blue-dark);
}

.feature-card p {
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

.news {
  padding: 80px 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.news-card {
  background-color: var(--nk-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
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
  padding: 24px;
}

.news-content h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--nk-blue-dark);
}

.news-content p {
  color: var(--nk-gray-dark);
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
  color: var(--nk-blue);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.news-link:hover {
  color: var(--nk-blue-dark);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    padding: 12px 28px;
    margin-bottom: 16px;
  }
  
  .btn-outline {
    margin-left: 0;
  }
  
  .features-grid,
  .news-grid {
    grid-template-columns: 1fr;
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
}
</style>