<template>
  <div class="weather-view">
    <div class="weather-section">
      <div class="container">
        <div class="weather-header">
          <h2>津南风语者 <i class="fas fa-wind"></i></h2>
          <p>"在津南，没有一处风是无辜的"</p>
        </div>

        <div class="weather-card">
          <div class="radar-container">
            <div class="radar-circle"></div>
            <div class="radar-beam"></div>
          </div>

          <div class="wind-display">
            <i class="fas fa-wind wind-icon-animate"></i>
            <div>
              <div class="wind-main-num">{{ windLevel }}</div>
              <div class="wind-unit">当前风力 (级)</div>
            </div>
          </div>
          <h3>{{ windStatus }}</h3>
        </div>

        <div class="survival-section">
          <h3><i class="fas fa-shield-alt"></i> 实时生存建议</h3>
          <div class="survival-grid">
            <div class="survival-item">
              <i class="fas fa-weight-hanging"></i>
              <h4>建议体重</h4>
              <p>{{ tipWeight }}</p>
            </div>
            <div class="survival-item">
              <i class="fas fa-tshirt"></i>
              <h4>穿衣指数</h4>
              <p>{{ tipOutfit }}</p>
            </div>
            <div class="survival-item">
              <i class="fas fa-bicycle"></i>
              <h4>出行预警</h4>
              <p>{{ tipTravel }}</p>
            </div>
            <div class="survival-item">
              <i class="fas fa-utensils"></i>
              <h4>补给建议</h4>
              <p>{{ tipFood }}</p>
            </div>
            <div class="survival-item">
              <i class="fas fa-water"></i>
              <h4>补水建议</h4>
              <p>{{ tipHydrate }}</p>
            </div>
          </div>
          <div class="nankai-fun-facts">
            <h4><i class="fas fa-lightbulb"></i> 津南生存冷知识</h4>
            <ul>
              <li> <b>理科图书馆门口：</b> 这里的风速通常比操场高出 2 个等级。</li>
              <li> <b>单车停放：</b> 建议逆风停放，否则你的车可能会被风"自动解锁"并顺移 5 米。</li>
              <li> <b>发型管理：</b> 在津南，最保值的理财产品是一瓶超强力发胶。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data() {
    return {
      windLevel: '--',
      windStatus: '正在获取卫星数据...',
      tipWeight: '--',
      tipOutfit: '--',
      tipTravel: '--',
      tipFood: '--',
      tipHydrate: '--'
    }
  },
  mounted() {
    // 模拟获取风力数据
    setTimeout(() => {
      this.generateWindData();
    }, 2000);
    
    // 定期更新风力数据
    setInterval(() => {
      this.generateWindData();
    }, 10000);
  },
  methods: {
    generateWindData() {
      // 生成随机风力等级 (0-12级)
      const level = Math.floor(Math.random() * 13);
      this.windLevel = level;
      
      // 根据风力等级生成状态描述
      const statusDescriptions = [
        '无风，烟直上',
        '软风，烟示风向',
        '轻风，感觉有风',
        '微风，旗帜展开',
        '和风，吹起尘土',
        '清风，小树摇动',
        '强风，大树枝摇动',
        '疾风，步行困难',
        '大风，树枝折断',
        '烈风，房屋受损',
        '狂风，树木连根拔起',
        '暴风，巨大破坏',
        '飓风，毁灭性破坏'
      ];
      this.windStatus = statusDescriptions[level] || '未知风力状态';
      
      // 根据风力等级生成生存建议
      this.generateSurvivalTips(level);
    },
    
    generateSurvivalTips(level) {
      // 体重建议
      if (level < 3) {
        this.tipWeight = '体重不限，自由飞翔';
      } else if (level < 6) {
        this.tipWeight = '建议体重 > 50kg';
      } else if (level < 9) {
        this.tipWeight = '建议体重 > 65kg，或携带铁饼';
      } else {
        this.tipWeight = '建议体重 > 80kg，或直接放弃出行';
      }
      
      // 穿衣指数
      if (level < 3) {
        this.tipOutfit = '轻薄透气，享受微风';
      } else if (level < 6) {
        this.tipOutfit = '紧身衣+防风外套';
      } else if (level < 9) {
        this.tipOutfit = '专业防风装备，建议头盔';
      } else {
        this.tipOutfit = '宇航服或直接居家办公';
      }
      
      // 出行预警
      if (level < 3) {
        this.tipTravel = '适宜出行，建议骑行';
      } else if (level < 6) {
        this.tipTravel = '可出行，不建议骑行';
      } else if (level < 9) {
        this.tipTravel = '谨慎出行，建议校内交通';
      } else {
        this.tipTravel = '禁止出行！生命第一！';
      }
      
      // 补给建议
      if (level < 3) {
        this.tipFood = '正常饮食即可';
      } else if (level < 6) {
        this.tipFood = '增加高热量食物';
      } else if (level < 9) {
        this.tipFood = '携带压缩饼干和能量棒';
      } else {
        this.tipFood = '携带3天以上的应急口粮';
      }
      
      // 补水建议
      if (level < 3) {
        this.tipHydrate = '正常补水，2L/天';
      } else if (level < 6) {
        this.tipHydrate = '增加补水，3L/天';
      } else if (level < 9) {
        this.tipHydrate = '频繁补水，4L/天，防风罩必备';
      } else {
        this.tipHydrate = '室内补水，避免外出水分蒸发';
      }
    }
  }
}
</script>

<style scoped>
.weather-view {
  padding-top: 0;
}

.weather-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #782069 0%, #1a5397 100%);
  min-height: calc(100vh - 80px);
  color: white;
}

.weather-header {
  text-align: center;
  margin-bottom: 40px;
}

.weather-header h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.weather-header p {
  font-size: 1.2rem;
  font-style: italic;
}

.weather-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 30px;
  text-align: center;
}

.radar-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
}

.radar-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.radar-circle::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 10%;
  left: 10%;
}

.radar-circle::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 60%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 20%;
  left: 20%;
}

.radar-beam {
  position: absolute;
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
  top: 50%;
  left: 50%;
  transform-origin: left center;
  animation: radar-sweep 3s infinite linear;
}

@keyframes radar-sweep {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.wind-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 20px 0;
}

.wind-main-num {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
}

.wind-unit {
  font-size: 1.5rem;
  opacity: 0.8;
}

.wind-icon-animate {
  font-size: 5rem;
  animation: float 3s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

.survival-section {
  margin-top: 40px;
}

.survival-section h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
}

.survival-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.survival-item {
  background: rgba(255, 255, 255, 0.9);
  color: var(--nk-blue-dark);
  padding: 20px;
  border-radius: var(--radius-md);
  transition: var(--transition);
  text-align: center;
}

.survival-item:hover {
  transform: translateY(-5px);
}

.survival-item i {
  font-size: 2rem;
  color: #782069;
  margin-bottom: 10px;
}

.survival-item h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--nk-blue-dark);
}

.survival-item p {
  font-size: 1rem;
  color: var(--nk-gray-dark);
}

.nankai-fun-facts {
  margin-top: 40px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-md);
}

.nankai-fun-facts h4 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  text-align: center;
}

.nankai-fun-facts ul {
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.8;
  margin-top: 10px;
  padding-left: 20px;
}

.nankai-fun-facts li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .weather-header h2 {
    font-size: 2rem;
  }
  
  .weather-card {
    padding: 20px;
  }
  
  .radar-container {
    width: 150px;
    height: 150px;
  }
  
  .wind-main-num {
    font-size: 6rem;
  }
  
  .wind-display {
    flex-direction: column;
    gap: 15px;
  }
  
  .survival-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
}
</style>