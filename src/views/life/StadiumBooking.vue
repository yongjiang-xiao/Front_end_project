<template>
  <div class="stadium-booking">
    <!-- 页面头部 -->
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="header-title">
            <h1>体育馆预约</h1>
            <p>便捷预约校内体育场馆，享受健康运动生活</p>
          </div>
          <div class="header-image">
            <i class="fas fa-running" style="font-size: 4rem; color: white;"></i>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <!-- 预约表单 -->
      <section class="booking-section">
        <div class="booking-card">
          <h2>预约场馆</h2>
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
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">场馆类型</label>
                <select v-model="bookingForm.venueType" class="form-control" required @change="updateVenues">
                  <option value="">请选择场馆类型</option>
                  <option value="basketball">篮球场</option>
                  <option value="badminton">羽毛球场</option>
                  <option value="tennis">网球场</option>
                  <option value="table-tennis">乒乓球室</option>
                  <option value="gym">健身房</option>
                  <option value="swimming">游泳馆</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">具体场馆</label>
                <select v-model="bookingForm.venue" class="form-control" required :disabled="!bookingForm.venueType">
                  <option value="">请先选择场馆类型</option>
                  <option 
                    v-for="venue in filteredVenues" 
                    :key="venue.id"
                    :value="venue.id"
                  >
                    {{ venue.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">预约日期</label>
                <input 
                  type="date" 
                  v-model="bookingForm.date" 
                  class="form-control" 
                  :min="minDate"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">预约时间</label>
                <select v-model="bookingForm.timeSlot" class="form-control" required>
                  <option value="">请选择时间段</option>
                  <option value="08:00-09:00">08:00-09:00</option>
                  <option value="09:00-10:00">09:00-10:00</option>
                  <option value="10:00-11:00">10:00-11:00</option>
                  <option value="11:00-12:00">11:00-12:00</option>
                  <option value="14:00-15:00">14:00-15:00</option>
                  <option value="15:00-16:00">15:00-16:00</option>
                  <option value="16:00-17:00">16:00-17:00</option>
                  <option value="17:00-18:00">17:00-18:00</option>
                  <option value="18:00-19:00">18:00-19:00</option>
                  <option value="19:00-20:00">19:00-20:00</option>
                  <option value="20:00-21:00">20:00-21:00</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">使用人数</label>
              <input 
                type="number" 
                v-model="bookingForm.peopleCount" 
                class="form-control" 
                min="1"
                required
              >
            </div>
            <div class="form-group">
              <label class="form-label">备注</label>
              <textarea 
                v-model="bookingForm.notes" 
                class="form-control" 
                rows="3" 
                placeholder="请输入其他需要说明的信息..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-calendar-check"></i>
              提交预约
            </button>
          </form>
        </div>
      </section>

      <!-- 场馆介绍 -->
      <section class="venues-section">
        <h2 class="section-title">场馆介绍</h2>
        <div class="venues-grid">
          <div 
            v-for="venueType in venueTypes" 
            :key="venueType.id"
            class="venue-card"
          >
            <div class="venue-image">
              <img :src="venueType.image" :alt="venueType.name">
            </div>
            <div class="venue-content">
              <h3>{{ venueType.name }}</h3>
              <p>{{ venueType.description }}</p>
              <div class="venue-info">
                <div class="info-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ venueType.location }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ venueType.hours }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-tag"></i>
                  <span>{{ venueType.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 预约规则 -->
      <section class="rules-section">
        <h2 class="section-title">预约规则</h2>
        <div class="rules-card">
          <ul class="rules-list">
            <li>学生可凭校园卡免费预约使用体育场馆</li>
            <li>每次预约最长不超过2小时</li>
            <li>需提前至少1天预约，最多提前7天预约</li>
            <li>预约成功后请按时到场，迟到超过15分钟将自动取消预约</li>
            <li>如需取消预约，请至少提前2小时操作</li>
            <li>请爱护场馆设施，遵守场馆使用规定</li>
            <li>特殊情况下（如维护、活动等），场馆可能临时关闭，请关注通知</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StadiumBooking',
  data() {
    return {
      bookingForm: {
        name: '',
        studentId: '',
        phone: '',
        email: '',
        venueType: '',
        venue: '',
        date: '',
        timeSlot: '',
        peopleCount: 1,
        notes: ''
      },
      venues: [
        // 篮球场
        { id: 'b1', name: '篮球场A', type: 'basketball', location: '体育馆1楼', capacity: 20 },
        { id: 'b2', name: '篮球场B', type: 'basketball', location: '体育馆1楼', capacity: 20 },
        { id: 'b3', name: '室外篮球场1', type: 'basketball', location: '室外运动区', capacity: 15 },
        { id: 'b4', name: '室外篮球场2', type: 'basketball', location: '室外运动区', capacity: 15 },
        
        // 羽毛球场
        { id: 'bd1', name: '羽毛球场1', type: 'badminton', location: '体育馆2楼', capacity: 4 },
        { id: 'bd2', name: '羽毛球场2', type: 'badminton', location: '体育馆2楼', capacity: 4 },
        { id: 'bd3', name: '羽毛球场3', type: 'badminton', location: '体育馆2楼', capacity: 4 },
        { id: 'bd4', name: '羽毛球场4', type: 'badminton', location: '体育馆2楼', capacity: 4 },
        
        // 网球场
        { id: 't1', name: '网球场1', type: 'tennis', location: '室外运动区', capacity: 4 },
        { id: 't2', name: '网球场2', type: 'tennis', location: '室外运动区', capacity: 4 },
        
        // 乒乓球室
        { id: 'tt1', name: '乒乓球室1', type: 'table-tennis', location: '体育馆3楼', capacity: 4 },
        { id: 'tt2', name: '乒乓球室2', type: 'table-tennis', location: '体育馆3楼', capacity: 4 },
        { id: 'tt3', name: '乒乓球室3', type: 'table-tennis', location: '体育馆3楼', capacity: 4 },
        
        // 健身房
        { id: 'g1', name: '健身房A', type: 'gym', location: '体育馆4楼', capacity: 30 },
        { id: 'g2', name: '健身房B', type: 'gym', location: '体育馆4楼', capacity: 30 },
        
        // 游泳馆
        { id: 's1', name: '游泳馆', type: 'swimming', location: '游泳馆', capacity: 50 }
      ],
      venueTypes: [
        {
          id: 'basketball',
          name: '篮球场',
          description: '标准室内外篮球场，提供篮球等器材',
          location: '体育馆1楼/室外运动区',
          hours: '8:00-21:00',
          price: '免费',
          image: require('@/assets/images/篮球场.jpg')
        },
        {
          id: 'badminton',
          name: '羽毛球场',
          description: '室内羽毛球场，提供羽毛球拍和球',
          location: '体育馆2楼',
          hours: '8:00-21:00',
          price: '免费',
          image: require('@/assets/images/羽毛球场.jpg')
        },
        {
          id: 'tennis',
          name: '网球场',
          description: '室外标准网球场，提供网球拍和球',
          location: '室外运动区',
          hours: '8:00-18:00',
          price: '免费',
          image: require('@/assets/images/网球场.jpg')
        },
        {
          id: 'table-tennis',
          name: '乒乓球室',
          description: '室内乒乓球室，提供球拍和球',
          location: '体育馆3楼',
          hours: '8:00-21:00',
          price: '免费',
          image: require('@/assets/images/练习场.jpg')
        },
        {
          id: 'gym',
          name: '健身房',
          description: '配备各种健身器材，有专业教练指导',
          location: '体育馆4楼',
          hours: '8:00-21:00',
          price: '免费',
          image: require('@/assets/images/体育场.jpg')
        },
        {
          id: 'swimming',
          name: '游泳馆',
          description: '标准泳池，提供更衣室和淋浴设施',
          location: '游泳馆',
          hours: '10:00-20:00',
          price: '免费',
          image: require('@/assets/images/排球场.jpg')
        }
      ]
    }
  },
  computed: {
    minDate() {
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow.toISOString().split('T')[0]
    },
    filteredVenues() {
      if (!this.bookingForm.venueType) return []
      return this.venues.filter(venue => venue.type === this.bookingForm.venueType)
    }
  },
  methods: {
    updateVenues() {
      // 当场馆类型改变时，重置具体场馆选择
      this.bookingForm.venue = ''
    },
    submitBooking() {
      // 这里可以添加表单提交逻辑
      this.$store.dispatch('showNotification', {
        type: 'success',
        message: '预约提交成功，请按时到场使用！'
      })
      
      // 重置表单
      this.bookingForm = {
        name: '',
        studentId: '',
        phone: '',
        email: '',
        venueType: '',
        venue: '',
        date: '',
        timeSlot: '',
        peopleCount: 1,
        notes: ''
      }
    }
  }
}
</script>

<style scoped>
.stadium-booking {
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
  background: url('../assets/images/体育场.jpg') no-repeat center;
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

.booking-section {
  margin: 40px 0;
}

.booking-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.booking-card h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
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

.form-control:disabled {
  background-color: #f8f9fa;
  cursor: not-allowed;
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

.venues-section {
  margin: 50px 0;
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.venue-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.venue-card:hover {
  transform: translateY(-5px);
}

.venue-image {
  height: 200px;
  overflow: hidden;
}

.venue-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.venue-card:hover .venue-image img {
  transform: scale(1.05);
}

.venue-content {
  padding: 25px;
}

.venue-content h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
}

.venue-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.venue-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-item i {
  width: 20px;
  color: #4a6cf7;
  margin-right: 10px;
}

.rules-section {
  margin: 50px 0;
}

.rules-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.rules-list {
  list-style: none;
  padding: 0;
}

.rules-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  line-height: 1.6;
  color: #555;
}

.rules-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  background-color: #4a6cf7;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-title {
    margin-bottom: 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .venues-grid {
    grid-template-columns: 1fr;
  }
}
</style>