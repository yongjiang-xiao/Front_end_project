<template>
  <div class="about-view">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">南开大学</h1>
        <p class="page-subtitle">允公允能，日新月异</p>
      </div>
    </div>

    <div class="container">
      <!-- 学校简介 -->
      <section class="section">
        <h2 class="section-title">学校简介</h2>
        <div class="content-card">
          <div class="card-content">
            <p>南开大学由严修、张伯苓秉承教育救国理念创办，肇始于1919年。1937年校园遭侵华日军炸毁，学校南迁，与北京大学、清华大学合组国立西南联合大学。1946年回津复校并改为国立。新中国成立后，经历高等教育院系调整，成为文理并重的全国重点大学。</p>
            <p>改革开放以来，天津对外贸易学院、中国旅游管理干部学院相继并入，经教育部与天津市共建支持，学校发展成为国家"211工程"和"985工程"重点建设的高校之一、国家"双一流"建设高校。</p>
          </div>
        </div>
      </section>

      <!-- 历史沿革 -->
      <section class="section">
        <h2 class="section-title">历史沿革</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in history" :key="index">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>{{ item.year }}</h3>
              <p>{{ item.event }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 校园文化 -->
      <section class="section">
        <h2 class="section-title">校园文化</h2>
        <div class="culture-grid">
          <div class="culture-item" v-for="(item, index) in culture" :key="index">
            <div class="culture-icon">
              <i :class="item.icon"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </section>

      <!-- 校园风光 -->
      <section class="section">
        <h2 class="section-title">校园风光</h2>
        <div class="gallery">
          <div class="gallery-item" v-for="(item, index) in gallery" :key="index">
            <div class="gallery-image">
              <img :src="item.image" :alt="item.title">
            </div>
            <div class="gallery-caption">
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      history: [
        {
          year: '1919年',
          event: '南开大学正式成立，开启了中国近代高等教育的新篇章'
        },
        {
          year: '1937年',
          event: '抗日战争爆发，南开大学被日军炸毁，被迫南迁'
        },
        {
          year: '1938年',
          event: '与北京大学、清华大学合组国立西南联合大学'
        },
        {
          year: '1946年',
          event: '回津复校并改为国立'
        },
        {
          year: '1952年',
          event: '全国高等院校院系调整，成为文理并重的全国重点大学'
        },
        {
          year: '1995年',
          event: '入选国家"211工程"重点建设高校'
        },
        {
          year: '2000年',
          event: '入选国家"985工程"重点建设高校'
        },
        {
          year: '2017年',
          event: '入选国家"双一流"建设高校'
        }
      ],
      culture: [
        {
          icon: 'fas fa-graduation-cap',
          title: '校训',
          description: '"允公允能，日新月异"体现了南开大学培养具有社会责任感和创新精神的人才的办学理念'
        },
        {
          icon: 'fas fa-flag',
          title: '校歌',
          description: '《南开大学校歌》创作于1919年，歌词体现了南开精神和文化传统'
        },
        {
          icon: 'fas fa-medal',
          title: '校徽',
          description: '南开大学校徽以八角形为基本形状，中心是"南开"二字，象征着南开精神的传承'
        },
        {
          icon: 'fas fa-users',
          title: '杰出校友',
          description: '周恩来、温家宝、陈省身、吴大猷等一大批杰出校友为国家发展做出了重要贡献'
        }
      ],
      gallery: [
        {
          title: '主楼',
          image: require('@/assets/images/学院楼.jpg')
        },
        {
          title: '马蹄湖',
          image: require('@/assets/images/33_马蹄湖.png')
        },
        {
          title: '图书馆',
          image: require('@/assets/images/图书馆.jpg')
        },
        {
          title: '周恩来像',
          image: require('@/assets/images/周恩来.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-view {
  padding-top: 0;
}

.hero-section {
  background: linear-gradient(135deg, var(--nk-blue-dark), var(--nk-blue));
  color: var(--nk-white);
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 48px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 2px;
}

.page-subtitle {
  font-size: 20px;
  font-weight: 300;
  opacity: 0.9;
}

.section {
  padding: 60px 0;
}

.section-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 16px;
  color: var(--nk-blue-dark);
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

.content-card {
  background-color: var(--nk-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 30px;
  margin-bottom: 40px;
  transition: var(--transition);
}

.content-card:hover {
  box-shadow: var(--shadow-md);
}

.card-content p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--nk-gray-dark);
}

.timeline {
  position: relative;
  padding-left: 140px;
  margin: 0;
  width: 100%;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--nk-blue-light);
  z-index: 1;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  width: 20px;
  height: 20px;
  background-color: var(--nk-blue);
  border-radius: 50%;
  position: absolute;
  left: 71px;
  z-index: 2;
}

.timeline-content {
  background-color: #f8f9fa;
  padding: 15px 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

.timeline-content h3 {
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

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.culture-item {
  background-color: var(--nk-white);
  border-radius: var(--radius-md);
  padding: 36px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.culture-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.culture-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(26, 83, 151, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.culture-icon i {
  font-size: 1.8rem;
  color: var(--nk-blue);
}

.culture-item h3 {
  font-size: 22px;
  margin-bottom: 16px;
  color: var(--nk-blue-dark);
}

.culture-item p {
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.gallery-item {
  background-color: var(--nk-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.gallery-image {
  height: 200px;
  overflow: hidden;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image img {
  transform: scale(1.05);
}

.gallery-caption {
  padding: 24px;
  text-align: center;
}

.gallery-caption h3 {
  font-size: 20px;
  color: var(--nk-blue-dark);
}

@media (max-width: 992px) {
  .timeline {
    padding-left: 120px;
  }
  
  .timeline::before {
    left: 70px;
  }
  
  .timeline-marker {
    left: 61px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }
  
  .page-subtitle {
    font-size: 18px;
  }
  
  .timeline {
    padding-left: 100px;
  }
  
  .timeline::before {
    left: 60px;
  }
  
  .timeline-marker {
    left: 51px;
  }
  
  .culture-grid,
  .gallery {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .content-card {
    padding: 20px;
  }
}
</style>