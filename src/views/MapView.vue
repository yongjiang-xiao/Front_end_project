<template>
  <div class="map-view">
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">校园地图</h1>
        <p class="page-subtitle">探索南开大学校园，查找教学楼、食堂等地点</p>
      </div>
    </div>

    <div class="container">
      <!-- 地图搜索 -->
      <section class="search-section">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="搜索地点..." 
            class="search-input"
            @keyup.enter="searchLocation"
          >
          <button @click="searchLocation" class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="quick-search">
          <span class="quick-search-label">快速查找：</span>
          <button 
            v-for="tag in quickSearchTags" 
            :key="tag"
            @click="quickSearch(tag)"
            class="tag-btn"
          >
            {{ tag }}
          </button>
        </div>
      </section>

      <!-- 地图区域 -->
      <section class="map-section">
        <div class="map-container">
          <div class="map-wrapper">
            <img src="@/assets/images/nk-map.jpg" alt="南开大学地图" class="map-image">
            <div 
              v-for="location in filteredLocations" 
              :key="location.id"
              class="map-marker"
              :style="{ top: location.top, left: location.left }"
              @click="showLocationInfo(location)"
            >
              <i :class="location.icon"></i>
            </div>
          </div>
        </div>
        
        <!-- 地点信息面板 -->
        <div class="location-panel" v-if="selectedLocation">
          <div class="panel-header">
            <h3>{{ selectedLocation.name }}</h3>
            <button @click="closeLocationInfo" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="panel-content">
            <div class="location-info">
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ selectedLocation.address }}</span>
              </div>
              <div class="info-item" v-if="selectedLocation.phone">
                <i class="fas fa-phone"></i>
                <span>{{ selectedLocation.phone }}</span>
              </div>
              <div class="info-item" v-if="selectedLocation.hours">
                <i class="fas fa-clock"></i>
                <span>{{ selectedLocation.hours }}</span>
              </div>
            </div>
            <div class="location-description" v-if="selectedLocation.description">
              <p>{{ selectedLocation.description }}</p>
            </div>
            <div class="location-actions">
              <button class="btn btn-primary">
                <i class="fas fa-directions"></i>
                导航
              </button>
              <button class="btn btn-outline">
                <i class="fas fa-bookmark"></i>
                收藏
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 地点分类 -->
      <section class="categories-section">
        <h2 class="section-title">地点分类</h2>
        <div class="category-grid">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="category-card"
            @click="filterByCategory(category.id)"
          >
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3>{{ category.name }}</h3>
            <span class="category-count">{{ category.count }} 个地点</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapView',
  data() {
    return {
      searchQuery: '',
      selectedLocation: null,
      activeCategory: null,
      locations: [
        {
          id: 1,
          name: '主楼',
          category: 'teaching',
          top: '30%',
          left: '40%',
          icon: 'fas fa-university',
          address: '南开区卫津路94号',
          phone: '022-23500000',
          hours: '8:00-22:00',
          description: '南开大学主楼，是学校的标志性建筑，建于1952年，为学校行政办公和教学场所。'
        },
        {
          id: 2,
          name: '图书馆',
          category: 'teaching',
          top: '45%',
          left: '35%',
          icon: 'fas fa-book',
          address: '南开区卫津路94号',
          phone: '022-23500001',
          hours: '8:00-22:00',
          description: '南开大学图书馆，藏书丰富，是学生学习和研究的重要场所。'
        },
        {
          id: 3,
          name: '第一食堂',
          category: 'dining',
          top: '60%',
          left: '25%',
          icon: 'fas fa-utensils',
          address: '南开区卫津路94号',
          phone: '022-23500002',
          hours: '6:30-21:00',
          description: '第一食堂，提供各种美食，价格实惠，是学生就餐的主要场所。'
        },
        {
          id: 4,
          name: '第二食堂',
          category: 'dining',
          top: '65%',
          left: '50%',
          icon: 'fas fa-utensils',
          address: '南开区卫津路94号',
          phone: '022-23500003',
          hours: '6:30-21:00',
          description: '第二食堂，环境优雅，提供多样化的餐饮选择。'
        },
        {
          id: 5,
          name: '学生宿舍1号楼',
          category: 'dormitory',
          top: '20%',
          left: '60%',
          icon: 'fas fa-bed',
          address: '南开区卫津路94号',
          phone: '022-23500004',
          description: '学生宿舍1号楼，可容纳800名学生，配备完善的生活设施。'
        },
        {
          id: 6,
          name: '体育馆',
          category: 'sports',
          top: '35%',
          left: '70%',
          icon: 'fas fa-running',
          address: '南开区卫津路94号',
          phone: '022-23500005',
          hours: '8:00-22:00',
          description: '体育馆，设有篮球场、羽毛球场、健身房等设施，是学生体育锻炼的场所。'
        },
        {
          id: 7,
          name: '马蹄湖',
          category: 'scenic',
          top: '50%',
          left: '60%',
          icon: 'fas fa-water',
          address: '南开区卫津路94号',
          description: '马蹄湖，南开大学校园内的著名景点，环境优美，是学生休闲散步的好去处。'
        },
        {
          id: 8,
          name: '校医院',
          category: 'service',
          top: '25%',
          left: '30%',
          icon: 'fas fa-hospital',
          address: '南开区卫津路94号',
          phone: '022-23500006',
          hours: '8:00-17:30',
          description: '校医院，为师生提供基本医疗服务，配备专业医护人员。'
        }
      ],
      categories: [
        { id: 'teaching', name: '教学楼', icon: 'fas fa-university', count: 2 },
        { id: 'dining', name: '食堂', icon: 'fas fa-utensils', count: 2 },
        { id: 'dormitory', name: '宿舍', icon: 'fas fa-bed', count: 1 },
        { id: 'sports', name: '体育设施', icon: 'fas fa-running', count: 1 },
        { id: 'scenic', name: '景点', icon: 'fas fa-image', count: 1 },
        { id: 'service', name: '服务设施', icon: 'fas fa-concierge-bell', count: 1 }
      ],
      quickSearchTags: ['主楼', '图书馆', '食堂', '宿舍', '体育馆', '校医院']
    }
  },
  computed: {
    filteredLocations() {
      let result = this.locations
      
      if (this.activeCategory) {
        result = result.filter(location => location.category === this.activeCategory)
      }
      
      if (this.searchQuery) {
        result = result.filter(location => 
          location.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
      
      return result
    }
  },
  methods: {
    searchLocation() {
      if (!this.searchQuery) return
      
      const location = this.locations.find(loc => 
        loc.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      
      if (location) {
        this.showLocationInfo(location)
      }
    },
    quickSearch(tag) {
      this.searchQuery = tag
      this.searchLocation()
    },
    filterByCategory(categoryId) {
      this.activeCategory = this.activeCategory === categoryId ? null : categoryId
    },
    showLocationInfo(location) {
      this.selectedLocation = location
    },
    closeLocationInfo() {
      this.selectedLocation = null
    }
  }
}
</script>

<style scoped>
.map-view {
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

.search-section {
  padding: 40px 0;
  background-color: #f8f9fa;
  margin-bottom: 30px;
}

.search-box {
  display: flex;
  max-width: 600px;
  margin: 0 auto 20px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex: 1;
  padding: 15px 25px;
  border: none;
  font-size: 16px;
  outline: none;
}

.search-btn {
  background-color: #4a6cf7;
  color: white;
  border: none;
  padding: 0 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #3a5bd9;
}

.quick-search {
  text-align: center;
}

.quick-search-label {
  margin-right: 10px;
  color: #666;
}

.tag-btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 8px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.tag-btn:hover {
  background-color: #4a6cf7;
  color: white;
  border-color: #4a6cf7;
}

.map-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

.map-container {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.map-wrapper {
  position: relative;
  padding-bottom: 75%;
}

.map-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-marker {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #4a6cf7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.map-marker:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background-color: #3a5bd9;
}

.location-panel {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
}

.panel-header {
  background-color: #4a6cf7;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-header h3 {
  font-size: 1.3rem;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.panel-content {
  padding: 20px;
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
  margin-right: 10px;
  color: #4a6cf7;
}

.location-description {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #666;
}

.location-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #4a6cf7;
  color: white;
}

.btn-primary:hover {
  background-color: #3a5bd9;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid #4a6cf7;
  color: #4a6cf7;
}

.btn-outline:hover {
  background-color: #4a6cf7;
  color: white;
}

.categories-section {
  padding: 40px 0;
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

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.category-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(74, 108, 247, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.category-icon i {
  font-size: 1.5rem;
  color: #4a6cf7;
}

.category-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.category-count {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .map-section {
    grid-template-columns: 1fr;
  }
  
  .location-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>