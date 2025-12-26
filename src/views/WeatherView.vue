<template>
  <div class="weather-view">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">风语者</h1>
        <p class="page-subtitle">实时天气信息，为您的出行提供参考</p>
      </div>
    </div>

    <div class="container">
      <!-- 当前天气 -->
      <section class="current-weather">
        <div class="weather-card">
          <div class="weather-main">
            <div class="weather-icon">
              <i :class="weatherData.current.icon"></i>
            </div>
            <div class="weather-info">
              <h2 class="temperature">{{ weatherData.current.temperature }}°C</h2>
              <p class="weather-desc">{{ weatherData.current.description }}</p>
              <p class="feels-like">体感温度: {{ weatherData.current.feelsLike }}°C</p>
            </div>
          </div>
          <div class="weather-details">
            <div class="detail-item">
              <i class="fas fa-wind"></i>
              <span>{{ weatherData.current.windSpeed }} m/s</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-tint"></i>
              <span>{{ weatherData.current.humidity }}%</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-eye"></i>
              <span>{{ weatherData.current.visibility }} km</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-compress-arrows-alt"></i>
              <span>{{ weatherData.current.pressure }} hPa</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 天气预报 -->
      <section class="forecast-section">
        <h2 class="section-title">未来7天预报</h2>
        <div class="forecast-container">
          <div 
            v-for="day in weatherData.forecast" 
            :key="day.date"
            class="forecast-day"
          >
            <div class="forecast-date">{{ formatDate(day.date) }}</div>
            <div class="forecast-icon">
              <i :class="day.icon"></i>
            </div>
            <div class="forecast-temps">
              <span class="temp-high">{{ day.high }}°</span>
              <span class="temp-low">{{ day.low }}°</span>
            </div>
            <div class="forecast-desc">{{ day.description }}</div>
          </div>
        </div>
      </section>

      <!-- 生活指数 -->
      <section class="life-index-section">
        <h2 class="section-title">生活指数</h2>
        <div class="index-grid">
          <div 
            v-for="index in lifeIndex" 
            :key="index.id"
            class="index-card"
          >
            <div class="index-icon">
              <i :class="index.icon"></i>
            </div>
            <h3>{{ index.name }}</h3>
            <div class="index-level" :class="index.levelClass">{{ index.level }}</div>
            <p>{{ index.description }}</p>
          </div>
        </div>
      </section>

      <!-- 天气预警 -->
      <section class="alert-section" v-if="weatherAlerts.length > 0">
        <h2 class="section-title">天气预警</h2>
        <div 
          v-for="alert in weatherAlerts" 
          :key="alert.id"
          class="alert-card"
          :class="alert.type"
        >
          <div class="alert-header">
            <div class="alert-icon">
              <i :class="alert.icon"></i>
            </div>
            <div class="alert-title">
              <h3>{{ alert.title }}</h3>
              <p>{{ alert.time }}</p>
            </div>
          </div>
          <div class="alert-content">
            <p>{{ alert.description }}</p>
          </div>
        </div>
      </section>

      <!-- 空气质量 -->
      <section class="air-quality-section">
        <h2 class="section-title">空气质量</h2>
        <div class="air-quality-card">
          <div class="aqi-main">
            <div class="aqi-value" :class="airQuality.levelClass">
              {{ airQuality.aqi }}
            </div>
            <div class="aqi-info">
              <h3>{{ airQuality.level }}</h3>
              <p>{{ airQuality.description }}</p>
            </div>
          </div>
          <div class="pollutants">
            <div 
              v-for="pollutant in airQuality.pollutants" 
              :key="pollutant.name"
              class="pollutant-item"
            >
              <span class="pollutant-name">{{ pollutant.name }}</span>
              <span class="pollutant-value">{{ pollutant.value }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data() {
    return {
      weatherData: {
        current: {
          temperature: 25,
          description: '晴朗',
          feelsLike: 27,
          windSpeed: 3.2,
          humidity: 45,
          visibility: 10,
          pressure: 1013,
          icon: 'fas fa-sun'
        },
        forecast: [
          {
            date: new Date(Date.now() + 86400000),
            high: 28,
            low: 18,
            description: '多云',
            icon: 'fas fa-cloud-sun'
          },
          {
            date: new Date(Date.now() + 86400000 * 2),
            high: 26,
            low: 17,
            description: '小雨',
            icon: 'fas fa-cloud-rain'
          },
          {
            date: new Date(Date.now() + 86400000 * 3),
            high: 24,
            low: 16,
            description: '阴',
            icon: 'fas fa-cloud'
          },
          {
            date: new Date(Date.now() + 86400000 * 4),
            high: 27,
            low: 19,
            description: '晴',
            icon: 'fas fa-sun'
          },
          {
            date: new Date(Date.now() + 86400000 * 5),
            high: 29,
            low: 20,
            description: '晴',
            icon: 'fas fa-sun'
          },
          {
            date: new Date(Date.now() + 86400000 * 6),
            high: 30,
            low: 21,
            description: '多云',
            icon: 'fas fa-cloud-sun'
          },
          {
            date: new Date(Date.now() + 86400000 * 7),
            high: 28,
            low: 19,
            description: '雷阵雨',
            icon: 'fas fa-bolt'
          }
        ]
      },
      lifeIndex: [
        {
          id: 1,
          name: '穿衣指数',
          level: '炎热',
          levelClass: 'high',
          icon: 'fas fa-tshirt',
          description: '建议穿短袖、短裤等清凉服装'
        },
        {
          id: 2,
          name: '运动指数',
          level: '较适宜',
          levelClass: 'medium',
          icon: 'fas fa-running',
          description: '天气较好，适合户外运动'
        },
        {
          id: 3,
          name: '紫外线指数',
          level: '很强',
          levelClass: 'high',
          icon: 'fas fa-sun',
          description: '紫外线辐射强，建议涂抹防晒霜'
        },
        {
          id: 4,
          name: '感冒指数',
          level: '少发',
          levelClass: 'low',
          icon: 'fas fa-head-side-cough',
          description: '感冒发生几率较低'
        },
        {
          id: 5,
          name: '雨伞指数',
          level: '不需要',
          levelClass: 'low',
          icon: 'fas fa-umbrella',
          description: '天气晴朗，不需要雨伞'
        },
        {
          id: 6,
          name: '洗车指数',
          level: '适宜',
          levelClass: 'medium',
          icon: 'fas fa-car',
          description: '天气较好，适宜洗车'
        }
      ],
      weatherAlerts: [
        {
          id: 1,
          type: 'warning',
          title: '高温黄色预警',
          time: '2023-08-26 10:30',
          description: '预计今天白天最高气温将升至35°C以上，请注意防暑降温。',
          icon: 'fas fa-temperature-high'
        }
      ],
      airQuality: {
        aqi: 75,
        level: '良',
        levelClass: 'good',
        description: '空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响',
        pollutants: [
          { name: 'PM2.5', value: '35 μg/m³' },
          { name: 'PM10', value: '50 μg/m³' },
          { name: 'SO₂', value: '10 μg/m³' },
          { name: 'NO₂', value: '25 μg/m³' },
          { name: 'O₃', value: '120 μg/m³' },
          { name: 'CO', value: '0.6 mg/m³' }
        ]
      }
    }
  },
  methods: {
    formatDate(date) {
      const options = { month: 'short', day: 'numeric' };
      return date.toLocaleDateString('zh-CN', options);
    }
  }
}
</script>

<style scoped>
.weather-view {
  padding-top: 0;
}

.hero-section {
  background: linear-gradient(135deg, #4a6cf7 0%, #667eea 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 1.3rem;
  font-weight: 300;
}

.current-weather {
  margin: 40px 0;
}

.weather-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.weather-main {
  display: flex;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, #4a6cf7 0%, #667eea 100%);
  color: white;
}

.weather-icon {
  font-size: 5rem;
  margin-right: 30px;
}

.weather-info h2 {
  font-size: 3.5rem;
  font-weight: 300;
  margin: 0 0 10px;
}

.weather-desc {
  font-size: 1.5rem;
  margin: 0 0 5px;
}

.feels-like {
  font-size: 1.1rem;
  opacity: 0.8;
}

.weather-details {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f8f9fa;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.detail-item i {
  font-size: 1.5rem;
  color: #4a6cf7;
  margin-bottom: 8px;
}

.detail-item span {
  font-size: 0.9rem;
  color: #666;
}

.forecast-section {
  margin: 40px 0;
}

.section-title {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
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

.forecast-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.forecast-day {
  background: white;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.forecast-day:hover {
  transform: translateY(-5px);
}

.forecast-date {
  font-weight: 500;
  margin-bottom: 10px;
  color: #333;
}

.forecast-icon {
  font-size: 2rem;
  color: #4a6cf7;
  margin-bottom: 10px;
}

.forecast-temps {
  margin-bottom: 10px;
}

.temp-high {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
}

.temp-low {
  font-size: 1rem;
  color: #999;
  margin-left: 5px;
}

.forecast-desc {
  font-size: 0.9rem;
  color: #666;
}

.life-index-section {
  margin: 40px 0;
}

.index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.index-card {
  background: white;
  border-radius: 10px;
  padding: 25px 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.index-card:hover {
  transform: translateY(-5px);
}

.index-icon {
  font-size: 2rem;
  color: #4a6cf7;
  margin-bottom: 15px;
}

.index-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.index-level {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.index-level.low {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.index-level.medium {
  background-color: #fff8e1;
  color: #f57f17;
}

.index-level.high {
  background-color: #ffebee;
  color: #c62828;
}

.index-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.alert-section {
  margin: 40px 0;
}

.alert-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.alert-card.warning {
  border-left: 5px solid #ff9800;
}

.alert-card.danger {
  border-left: 5px solid #f44336;
}

.alert-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
}

.alert-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  color: #ff9800;
}

.alert-card.danger .alert-icon {
  color: #f44336;
}

.alert-title h3 {
  font-size: 1.2rem;
  margin: 0 0 5px;
  color: #333;
}

.alert-title p {
  font-size: 0.9rem;
  margin: 0;
  color: #666;
}

.alert-content {
  padding: 15px 20px;
  line-height: 1.6;
  color: #555;
}

.air-quality-section {
  margin: 40px 0;
}

.air-quality-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.aqi-main {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.aqi-value {
  font-size: 4rem;
  font-weight: 300;
  margin-right: 30px;
  padding: 10px 20px;
  border-radius: 10px;
}

.aqi-value.excellent {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.aqi-value.good {
  background-color: #e0f7fa;
  color: #00796b;
}

.aqi-value.lightly-polluted {
  background-color: #fff8e1;
  color: #f57f17;
}

.aqi-value.moderately-polluted {
  background-color: #fbe9e7;
  color: #e64a19;
}

.aqi-value.heavily-polluted {
  background-color: #ffebee;
  color: #c62828;
}

.aqi-value.severely-polluted {
  background-color: #f3e5f5;
  color: #6a1b9a;
}

.aqi-info h3 {
  font-size: 1.8rem;
  margin: 0 0 10px;
  color: #333;
}

.aqi-info p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.pollutants {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.pollutant-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.pollutant-name {
  font-weight: 500;
  color: #333;
}

.pollutant-value {
  color: #666;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .weather-main {
    flex-direction: column;
    text-align: center;
  }
  
  .weather-icon {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .weather-details {
    flex-wrap: wrap;
  }
  
  .detail-item {
    width: 50%;
    margin-bottom: 15px;
  }
  
  .forecast-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .index-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .aqi-main {
    flex-direction: column;
    text-align: center;
  }
  
  .aqi-value {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>