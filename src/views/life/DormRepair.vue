<template>
  <div class="dorm-repair">
    <!-- 页面头部 -->
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="header-title">
            <h1>宿舍报修</h1>
            <p>在线提交宿舍设施报修申请，快速解决生活问题</p>
          </div>
          <div class="header-image">
            <i class="fas fa-tools" style="font-size: 4rem; color: white;"></i>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <!-- 报修表单 -->
      <section class="repair-section">
        <div class="repair-card">
          <h2>提交报修申请</h2>
          <form @submit.prevent="submitRepair">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">姓名</label>
                <input 
                  type="text" 
                  v-model="repairForm.name" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">学号</label>
                <input 
                  type="text" 
                  v-model="repairForm.studentId" 
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
                  v-model="repairForm.phone" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">宿舍楼</label>
                <select v-model="repairForm.building" class="form-control" required @change="updateRooms">
                  <option value="">请选择宿舍楼</option>
                  <option value="1">1号楼</option>
                  <option value="2">2号楼</option>
                  <option value="3">3号楼</option>
                  <option value="4">4号楼</option>
                  <option value="5">5号楼</option>
                  <option value="6">6号楼</option>
                  <option value="7">7号楼</option>
                  <option value="8">8号楼</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">宿舍号</label>
                <select v-model="repairForm.room" class="form-control" required :disabled="!repairForm.building">
                  <option value="">请先选择宿舍楼</option>
                  <option 
                    v-for="room in filteredRooms" 
                    :key="room.id"
                    :value="room.id"
                  >
                    {{ room.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">报修类型</label>
                <select v-model="repairForm.type" class="form-control" required>
                  <option value="">请选择报修类型</option>
                  <option value="water">水管/水龙头</option>
                  <option value="electricity">电路/灯具</option>
                  <option value="furniture">家具/床具</option>
                  <option value="door">门锁/窗户</option>
                  <option value="network">网络/插座</option>
                  <option value="aircondition">空调/暖气</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">问题描述</label>
              <textarea 
                v-model="repairForm.description" 
                class="form-control" 
                rows="4" 
                placeholder="请详细描述需要维修的问题..."
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">上传图片（可选）</label>
              <div class="upload-area" @click="triggerFileUpload">
                <input 
                  type="file" 
                  ref="fileInput" 
                  @change="handleFileUpload" 
                  accept="image/*" 
                  multiple
                  style="display: none"
                >
                <div class="upload-placeholder">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>点击或拖拽上传图片</p>
                  <span>支持JPG、PNG格式，最多上传3张</span>
                </div>
                <div class="upload-preview" v-if="uploadedImages.length > 0">
                  <div 
                    v-for="(image, index) in uploadedImages" 
                    :key="index"
                    class="preview-item"
                  >
                    <img :src="image.url" :alt="image.name">
                    <button type="button" class="remove-btn" @click.stop="removeImage(index)">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">期望维修时间</label>
              <select v-model="repairForm.preferredTime" class="form-control" required>
                <option value="">请选择期望维修时间</option>
                <option value="morning">工作日上午 (8:00-12:00)</option>
                <option value="afternoon">工作日下午 (14:00-18:00)</option>
                <option value="evening">工作日晚上 (18:00-20:00)</option>
                <option value="weekend">周末</option>
                <option value="emergency">紧急情况（尽快）</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">方便联系时间</label>
              <input 
                type="text" 
                v-model="repairForm.contactTime" 
                class="form-control" 
                placeholder="例如：周一至周五 18:00后"
                required
              >
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-paper-plane"></i>
              提交报修申请
            </button>
          </form>
        </div>
      </section>

      <!-- 报修进度查询 -->
      <section class="status-section">
        <h2 class="section-title">报修进度查询</h2>
        <div class="status-card">
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              class="search-input" 
              placeholder="请输入报修单号或学号查询"
            >
            <button class="search-btn" @click="searchRepair">
              <i class="fas fa-search"></i>
              查询
            </button>
          </div>
          
          <div class="status-list" v-if="searchResults.length > 0">
            <div 
              v-for="item in searchResults" 
              :key="item.id"
              class="status-item"
            >
              <div class="status-header">
                <div class="status-info">
                  <h3>报修单号：{{ item.id }}</h3>
                  <p>提交时间：{{ item.submitTime }}</p>
                </div>
                <div class="status-badge" :class="getStatusClass(item.status)">
                  {{ getStatusText(item.status) }}
                </div>
              </div>
              <div class="status-content">
                <div class="status-detail">
                  <div class="detail-item">
                    <span class="label">宿舍：</span>
                    <span class="value">{{ item.building }}号楼 {{ item.room }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">报修类型：</span>
                    <span class="value">{{ getTypeText(item.type) }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">问题描述：</span>
                    <span class="value">{{ item.description }}</span>
                  </div>
                </div>
                <div class="status-timeline">
                  <div class="timeline-item" :class="{ active: item.status >= 1 }">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>已提交</h4>
                      <p>{{ item.submitTime }}</p>
                    </div>
                  </div>
                  <div class="timeline-item" :class="{ active: item.status >= 2 }">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>已受理</h4>
                      <p>{{ item.acceptTime || '处理中...' }}</p>
                    </div>
                  </div>
                  <div class="timeline-item" :class="{ active: item.status >= 3 }">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>维修中</h4>
                      <p>{{ item.repairTime || '处理中...' }}</p>
                    </div>
                  </div>
                  <div class="timeline-item" :class="{ active: item.status >= 4 }">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                      <h4>已完成</h4>
                      <p>{{ item.completeTime || '处理中...' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="empty-result" v-else-if="hasSearched">
            <i class="fas fa-search"></i>
            <p>未找到相关报修记录</p>
          </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'DormRepair',
  data() {
    return {
      repairForm: {
        name: '',
        studentId: '',
        phone: '',
        building: '',
        room: '',
        type: '',
        description: '',
        preferredTime: '',
        contactTime: ''
      },
      rooms: [
        // 1号楼
        { id: '101', name: '101室', building: '1' },
        { id: '102', name: '102室', building: '1' },
        { id: '103', name: '103室', building: '1' },
        { id: '104', name: '104室', building: '1' },
        { id: '201', name: '201室', building: '1' },
        { id: '202', name: '202室', building: '1' },
        { id: '203', name: '203室', building: '1' },
        { id: '204', name: '204室', building: '1' },
        { id: '301', name: '301室', building: '1' },
        { id: '302', name: '302室', building: '1' },
        { id: '303', name: '303室', building: '1' },
        { id: '304', name: '304室', building: '1' },
        
        // 2号楼
        { id: '205', name: '205室', building: '2' },
        { id: '206', name: '206室', building: '2' },
        { id: '207', name: '207室', building: '2' },
        { id: '208', name: '208室', building: '2' },
        { id: '305', name: '305室', building: '2' },
        { id: '306', name: '306室', building: '2' },
        { id: '307', name: '307室', building: '2' },
        { id: '308', name: '308室', building: '2' },
        
        // 其他号楼的房间...
      ],
      uploadedImages: [],
      searchQuery: '',
      searchResults: [],
      hasSearched: false,
      faqs: [
        {
          question: '提交报修申请后多久会有响应？',
          answer: '我们会在24小时内受理您的报修申请，紧急情况会优先处理。受理后，维修人员会根据实际情况安排维修时间。',
          isOpen: false
        },
        {
          question: '报修是否需要收费？',
          answer: '正常使用情况下造成的设施损坏，学校提供免费维修服务。因人为损坏或不当使用造成的维修，可能需要收取相应费用。',
          isOpen: false
        },
        {
          question: '如何查询报修进度？',
          answer: '您可以在本页面输入报修单号或学号查询报修进度，也可以关注宿舍楼公告栏的通知。',
          isOpen: false
        },
        {
          question: '如果维修后问题仍然存在怎么办？',
          answer: '如果维修后问题未解决，请重新提交报修申请，并在问题描述中注明"返修"，我们会优先安排处理。',
          isOpen: false
        },
        {
          question: '紧急情况（如漏水、断电）如何处理？',
          answer: '对于紧急情况，请立即拨打宿舍管理处电话：022-23501111，或直接联系宿舍管理员，我们会第一时间派人处理。',
          isOpen: false
        }
      ]
    }
  },
  computed: {
    filteredRooms() {
      if (!this.repairForm.building) return []
      return this.rooms.filter(room => room.building === this.repairForm.building)
    }
  },
  methods: {
    updateRooms() {
      // 当宿舍楼改变时，重置宿舍号选择
      this.repairForm.room = ''
    },
    triggerFileUpload() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files)
      
      // 限制最多上传3张图片
      const remainingSlots = 3 - this.uploadedImages.length
      const filesToUpload = files.slice(0, remainingSlots)
      
      filesToUpload.forEach(file => {
        // 创建预览URL
        const url = URL.createObjectURL(file)
        this.uploadedImages.push({
          name: file.name,
          url: url,
          file: file
        })
      })
      
      // 重置input，允许重复选择相同文件
      event.target.value = ''
    },
    removeImage(index) {
      // 释放URL对象
      URL.revokeObjectURL(this.uploadedImages[index].url)
      // 从数组中移除
      this.uploadedImages.splice(index, 1)
    },
    submitRepair() {
      // 这里可以添加表单提交逻辑
      this.$store.dispatch('showNotification', {
        type: 'success',
        message: '报修申请提交成功，我们会尽快处理！'
      })
      
      // 重置表单
      this.repairForm = {
        name: '',
        studentId: '',
        phone: '',
        building: '',
        room: '',
        type: '',
        description: '',
        preferredTime: '',
        contactTime: ''
      }
      
      // 清空上传的图片
      this.uploadedImages.forEach(image => {
        URL.revokeObjectURL(image.url)
      })
      this.uploadedImages = []
    },
    searchRepair() {
      if (!this.searchQuery.trim()) {
        this.$store.dispatch('showNotification', {
          type: 'warning',
          message: '请输入报修单号或学号'
        })
        return
      }
      
      this.hasSearched = true
      
      // 模拟查询结果
      // 实际应用中这里应该调用API查询
      if (this.searchQuery === '20210001' || this.searchQuery === 'BX202312001') {
        this.searchResults = [
          {
            id: 'BX202312001',
            studentId: '20210001',
            building: '3',
            room: '201',
            type: 'water',
            description: '宿舍水龙头漏水，无法正常关闭',
            status: 2, // 1-已提交 2-已受理 3-维修中 4-已完成
            submitTime: '2023-12-01 14:30',
            acceptTime: '2023-12-01 16:45',
            repairTime: null,
            completeTime: null
          }
        ]
      } else {
        this.searchResults = []
      }
    },
    getStatusClass(status) {
      const statusClasses = {
        1: 'status-submitted',
        2: 'status-accepted',
        3: 'status-repairing',
        4: 'status-completed'
      }
      return statusClasses[status] || ''
    },
    getStatusText(status) {
      const statusTexts = {
        1: '已提交',
        2: '已受理',
        3: '维修中',
        4: '已完成'
      }
      return statusTexts[status] || '未知'
    },
    getTypeText(type) {
      const typeTexts = {
        'water': '水管/水龙头',
        'electricity': '电路/灯具',
        'furniture': '家具/床具',
        'door': '门锁/窗户',
        'network': '网络/插座',
        'aircondition': '空调/暖气',
        'other': '其他'
      }
      return typeTexts[type] || '未知'
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
.dorm-repair {
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
  background: url('../assets/images/宿舍.jpg') no-repeat center;
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

.repair-section {
  margin: 40px 0;
}

.repair-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.repair-card h2 {
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

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.upload-area:hover {
  border-color: #4a6cf7;
}

.upload-placeholder i {
  font-size: 2.5rem;
  color: #4a6cf7;
  margin-bottom: 15px;
}

.upload-placeholder p {
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.upload-placeholder span {
  font-size: 0.9rem;
  color: #666;
}

.upload-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.preview-item {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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

.status-section {
  margin: 50px 0;
}

.status-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto;
}

.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.search-input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.search-btn {
  padding: 12px 20px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.status-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
}

.status-info h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.status-info p {
  font-size: 0.9rem;
  color: #666;
}

.status-badge {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status-submitted {
  background-color: #e3f2fd;
  color: #1976d2;
}

.status-accepted {
  background-color: #fff8e1;
  color: #ff8f00;
}

.status-repairing {
  background-color: #e8f5e9;
  color: #388e3c;
}

.status-completed {
  background-color: #e3f2fd;
  color: #1976d2;
}

.status-content {
  padding: 20px;
}

.status-detail {
  margin-bottom: 25px;
}

.detail-item {
  display: flex;
  margin-bottom: 10px;
}

.detail-item .label {
  width: 100px;
  font-weight: 500;
  color: #666;
}

.detail-item .value {
  flex: 1;
  color: #333;
}

.status-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 20px;
}

.status-timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #eee;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 25%;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 10px;
}

.timeline-item.active .timeline-dot {
  background-color: #4a6cf7;
}

.timeline-content {
  text-align: center;
}

.timeline-content h4 {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.timeline-content p {
  font-size: 0.8rem;
  color: #666;
}

.empty-result {
  text-align: center;
  padding: 40px 0;
  color: #999;
}

.empty-result i {
  font-size: 3rem;
  margin-bottom: 15px;
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
  
  .search-box {
    flex-direction: column;
  }
  
  .status-timeline {
    flex-direction: column;
    gap: 15px;
  }
  
  .timeline-item {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .timeline-dot {
    margin-right: 10px;
    margin-bottom: 0;
  }
  
  .status-timeline::before {
    display: none;
  }
}
</style>