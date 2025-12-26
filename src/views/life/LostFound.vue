<template>
  <div class="lost-found">
    <!-- 页面头部 -->
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="header-title">
            <h1>失物招领</h1>
            <p>发布和查找失物信息，帮助失主找回遗失物品</p>
          </div>
          <div class="header-image">
            <i class="fas fa-search" style="font-size: 4rem; color: white;"></i>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <!-- 功能切换 -->
      <section class="tab-section">
        <div class="tab-buttons">
          <button 
            class="tab-btn" 
            :class="{ active: activeTab === 'lost' }"
            @click="activeTab = 'lost'"
          >
            <i class="fas fa-question-circle"></i>
            我要寻物
          </button>
          <button 
            class="tab-btn" 
            :class="{ active: activeTab === 'found' }"
            @click="activeTab = 'found'"
          >
            <i class="fas fa-hand-holding-heart"></i>
            我拾到物品
          </button>
          <button 
            class="tab-btn" 
            :class="{ active: activeTab === 'search' }"
            @click="activeTab = 'search'"
          >
            <i class="fas fa-search"></i>
            查找失物
          </button>
        </div>
      </section>

      <!-- 我要寻物表单 -->
      <section v-if="activeTab === 'lost'" class="form-section">
        <div class="form-card">
          <h2>发布寻物信息</h2>
          <form @submit.prevent="submitLost">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">姓名</label>
                <input 
                  type="text" 
                  v-model="lostForm.name" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">学号</label>
                <input 
                  type="text" 
                  v-model="lostForm.studentId" 
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
                  v-model="lostForm.phone" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">物品类别</label>
                <select v-model="lostForm.category" class="form-control" required>
                  <option value="">请选择物品类别</option>
                  <option value="card">证件类</option>
                  <option value="electronics">电子产品</option>
                  <option value="books">书籍文具</option>
                  <option value="clothing">衣物配饰</option>
                  <option value="keys">钥匙</option>
                  <option value="wallet">钱包/包</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">物品名称</label>
              <input 
                type="text" 
                v-model="lostForm.itemName" 
                class="form-control" 
                placeholder="请输入遗失物品的名称"
                required
              >
            </div>
            <div class="form-group">
              <label class="form-label">物品描述</label>
              <textarea 
                v-model="lostForm.description" 
                class="form-control" 
                rows="4" 
                placeholder="请详细描述遗失物品的特征、颜色、品牌等信息"
                required
              ></textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">遗失地点</label>
                <select v-model="lostForm.location" class="form-control" required>
                  <option value="">请选择遗失地点</option>
                  <option value="library">图书馆</option>
                  <option value="classroom">教学楼</option>
                  <option value="dormitory">宿舍楼</option>
                  <option value="canteen">食堂</option>
                  <option value="gym">体育馆</option>
                  <option value="playground">操场</option>
                  <option value="road">校园道路</option>
                  <option value="other">其他地点</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">遗失时间</label>
                <input 
                  type="datetime-local" 
                  v-model="lostForm.lostTime" 
                  class="form-control" 
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">上传图片（可选）</label>
              <div class="upload-area" @click="triggerLostFileUpload">
                <input 
                  type="file" 
                  ref="lostFileInput" 
                  @change="handleLostFileUpload" 
                  accept="image/*" 
                  style="display: none"
                >
                <div class="upload-placeholder">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>点击上传物品图片</p>
                </div>
                <div class="upload-preview" v-if="lostImage">
                  <div class="preview-item">
                    <img :src="lostImage.url" :alt="lostImage.name">
                    <button type="button" class="remove-btn" @click.stop="removeLostImage">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-paper-plane"></i>
              提交寻物信息
            </button>
          </form>
        </div>
      </section>

      <!-- 我拾到物品表单 -->
      <section v-if="activeTab === 'found'" class="form-section">
        <div class="form-card">
          <h2>发布拾物信息</h2>
          <form @submit.prevent="submitFound">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">姓名</label>
                <input 
                  type="text" 
                  v-model="foundForm.name" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">学号</label>
                <input 
                  type="text" 
                  v-model="foundForm.studentId" 
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
                  v-model="foundForm.phone" 
                  class="form-control" 
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label">物品类别</label>
                <select v-model="foundForm.category" class="form-control" required>
                  <option value="">请选择物品类别</option>
                  <option value="card">证件类</option>
                  <option value="electronics">电子产品</option>
                  <option value="books">书籍文具</option>
                  <option value="clothing">衣物配饰</option>
                  <option value="keys">钥匙</option>
                  <option value="wallet">钱包/包</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">物品名称</label>
              <input 
                type="text" 
                v-model="foundForm.itemName" 
                class="form-control" 
                placeholder="请输入拾到物品的名称"
                required
              >
            </div>
            <div class="form-group">
              <label class="form-label">物品描述</label>
              <textarea 
                v-model="foundForm.description" 
                class="form-control" 
                rows="4" 
                placeholder="请详细描述拾到物品的特征、颜色、品牌等信息"
                required
              ></textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">拾到地点</label>
                <select v-model="foundForm.location" class="form-control" required>
                  <option value="">请选择拾到地点</option>
                  <option value="library">图书馆</option>
                  <option value="classroom">教学楼</option>
                  <option value="dormitory">宿舍楼</option>
                  <option value="canteen">食堂</option>
                  <option value="gym">体育馆</option>
                  <option value="playground">操场</option>
                  <option value="road">校园道路</option>
                  <option value="other">其他地点</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">拾到时间</label>
                <input 
                  type="datetime-local" 
                  v-model="foundForm.foundTime" 
                  class="form-control" 
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">物品存放地点</label>
              <input 
                type="text" 
                v-model="foundForm.storageLocation" 
                class="form-control" 
                placeholder="请说明物品当前存放地点"
                required
              >
            </div>
            <div class="form-group">
              <label class="form-label">上传图片（可选）</label>
              <div class="upload-area" @click="triggerFoundFileUpload">
                <input 
                  type="file" 
                  ref="foundFileInput" 
                  @change="handleFoundFileUpload" 
                  accept="image/*" 
                  style="display: none"
                >
                <div class="upload-placeholder">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>点击上传物品图片</p>
                </div>
                <div class="upload-preview" v-if="foundImage">
                  <div class="preview-item">
                    <img :src="foundImage.url" :alt="foundImage.name">
                    <button type="button" class="remove-btn" @click.stop="removeFoundImage">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <i class="fas fa-paper-plane"></i>
              提交拾物信息
            </button>
          </form>
        </div>
      </section>

      <!-- 查找失物 -->
      <section v-if="activeTab === 'search'" class="search-section">
        <div class="search-card">
          <h2>查找失物</h2>
          <div class="search-filters">
            <div class="filter-row">
              <div class="filter-group">
                <label class="filter-label">物品类别</label>
                <select v-model="searchFilters.category" class="filter-control">
                  <option value="">全部类别</option>
                  <option value="card">证件类</option>
                  <option value="electronics">电子产品</option>
                  <option value="books">书籍文具</option>
                  <option value="clothing">衣物配饰</option>
                  <option value="keys">钥匙</option>
                  <option value="wallet">钱包/包</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div class="filter-group">
                <label class="filter-label">地点</label>
                <select v-model="searchFilters.location" class="filter-control">
                  <option value="">全部地点</option>
                  <option value="library">图书馆</option>
                  <option value="classroom">教学楼</option>
                  <option value="dormitory">宿舍楼</option>
                  <option value="canteen">食堂</option>
                  <option value="gym">体育馆</option>
                  <option value="playground">操场</option>
                  <option value="road">校园道路</option>
                  <option value="other">其他地点</option>
                </select>
              </div>
              <div class="filter-group">
                <label class="filter-label">时间范围</label>
                <select v-model="searchFilters.timeRange" class="filter-control">
                  <option value="">全部时间</option>
                  <option value="today">今天</option>
                  <option value="week">最近一周</option>
                  <option value="month">最近一个月</option>
                  <option value="three-months">最近三个月</option>
                </select>
              </div>
            </div>
            <div class="filter-row">
              <div class="filter-group full-width">
                <label class="filter-label">关键词</label>
                <div class="keyword-search">
                  <input 
                    type="text" 
                    v-model="searchFilters.keyword" 
                    class="filter-control" 
                    placeholder="请输入物品名称、描述等关键词"
                  >
                  <button class="search-btn" @click="searchItems">
                    <i class="fas fa-search"></i>
                    搜索
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="search-tabs">
            <button 
              class="search-tab" 
              :class="{ active: searchTab === 'lost' }"
              @click="searchTab = 'lost'"
            >
              寻物信息 ({{ lostItems.length }})
            </button>
            <button 
              class="search-tab" 
              :class="{ active: searchTab === 'found' }"
              @click="searchTab = 'found'"
            >
              拾物信息 ({{ foundItems.length }})
            </button>
          </div>
          
          <div class="search-results">
            <div v-if="searchTab === 'lost' && lostItems.length > 0" class="items-list">
              <div 
                v-for="item in lostItems" 
                :key="item.id"
                class="item-card"
                @click="viewItemDetail(item)"
              >
                <div class="item-image" v-if="item.image">
                  <img :src="item.image" :alt="item.itemName">
                </div>
                <div class="item-content">
                  <div class="item-header">
                    <h3>{{ item.itemName }}</h3>
                    <span class="item-category">{{ getCategoryText(item.category) }}</span>
                  </div>
                  <p class="item-description">{{ item.description }}</p>
                  <div class="item-meta">
                    <div class="meta-item">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>{{ getLocationText(item.location) }}</span>
                    </div>
                    <div class="meta-item">
                      <i class="fas fa-clock"></i>
                      <span>{{ formatDate(item.lostTime) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div v-if="searchTab === 'found' && foundItems.length > 0" class="items-list">
              <div 
                v-for="item in foundItems" 
                :key="item.id"
                class="item-card"
                @click="viewItemDetail(item)"
              >
                <div class="item-image" v-if="item.image">
                  <img :src="item.image" :alt="item.itemName">
                </div>
                <div class="item-content">
                  <div class="item-header">
                    <h3>{{ item.itemName }}</h3>
                    <span class="item-category">{{ getCategoryText(item.category) }}</span>
                  </div>
                  <p class="item-description">{{ item.description }}</p>
                  <div class="item-meta">
                    <div class="meta-item">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>{{ getLocationText(item.location) }}</span>
                    </div>
                    <div class="meta-item">
                      <i class="fas fa-clock"></i>
                      <span>{{ formatDate(item.foundTime) }}</span>
                    </div>
                    <div class="meta-item">
                      <i class="fas fa-archive"></i>
                      <span>{{ item.storageLocation }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div v-if="(searchTab === 'lost' && lostItems.length === 0) || (searchTab === 'found' && foundItems.length === 0)" class="empty-result">
              <i class="fas fa-search"></i>
              <p>暂无相关记录</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 物品详情模态框 -->
    <div v-if="showDetailModal" class="modal-overlay" @click="closeDetailModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ currentItem.itemName }}</h3>
          <button class="close-btn" @click="closeDetailModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="detail-image" v-if="currentItem.image">
            <img :src="currentItem.image" :alt="currentItem.itemName">
          </div>
          <div class="detail-info">
            <div class="info-row">
              <span class="info-label">类别：</span>
              <span class="info-value">{{ getCategoryText(currentItem.category) }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">描述：</span>
              <span class="info-value">{{ currentItem.description }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">{{ currentItem.type === 'lost' ? '遗失' : '拾到' }}地点：</span>
              <span class="info-value">{{ getLocationText(currentItem.location) }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">{{ currentItem.type === 'lost' ? '遗失' : '拾到' }}时间：</span>
              <span class="info-value">{{ formatDate(currentItem.type === 'lost' ? currentItem.lostTime : currentItem.foundTime) }}</span>
            </div>
            <div v-if="currentItem.type === 'found'" class="info-row">
              <span class="info-label">存放地点：</span>
              <span class="info-value">{{ currentItem.storageLocation }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">联系人：</span>
              <span class="info-value">{{ currentItem.name }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">联系方式：</span>
              <span class="info-value">{{ currentItem.phone }}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="closeDetailModal">
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LostFound',
  data() {
    return {
      activeTab: 'lost',
      searchTab: 'lost',
      showDetailModal: false,
      currentItem: {},
      lostForm: {
        name: '',
        studentId: '',
        phone: '',
        category: '',
        itemName: '',
        description: '',
        location: '',
        lostTime: ''
      },
      foundForm: {
        name: '',
        studentId: '',
        phone: '',
        category: '',
        itemName: '',
        description: '',
        location: '',
        foundTime: '',
        storageLocation: ''
      },
      lostImage: null,
      foundImage: null,
      searchFilters: {
        category: '',
        location: '',
        timeRange: '',
        keyword: ''
      },
      lostItems: [
        // 模拟数据
        {
          id: 'L001',
          type: 'lost',
          name: '张三',
          studentId: '20210001',
          phone: '13800138001',
          category: 'card',
          itemName: '校园卡',
          description: '蓝色卡套，内有校园卡和一张银行卡',
          location: 'library',
          lostTime: '2023-12-01T14:30',
          image: require('@/assets/images/校园卡.jpg')
        },
        {
          id: 'L002',
          type: 'lost',
          name: '李四',
          studentId: '20210002',
          phone: '13800138002',
          category: 'electronics',
          itemName: 'AirPods Pro',
          description: '白色充电盒，右耳耳机有轻微划痕',
          location: 'classroom',
          lostTime: '2023-12-02T10:15',
          image: require('@/assets/images/airpods.jpg')
        }
      ],
      foundItems: [
        // 模拟数据
        {
          id: 'F001',
          type: 'found',
          name: '王五',
          studentId: '20210003',
          phone: '13800138003',
          category: 'keys',
          itemName: '钥匙串',
          description: '包含3把钥匙和一个小熊挂件',
          location: 'canteen',
          foundTime: '2023-12-01T12:45',
          storageLocation: '学生活动中心301室',
          image: require('@/assets/images/钥匙.jpg')
        },
        {
          id: 'F002',
          type: 'found',
          name: '赵六',
          studentId: '20210004',
          phone: '13800138004',
          category: 'books',
          itemName: '《高等数学》教材',
          description: '第七版，封面有笔记',
          location: 'library',
          foundTime: '2023-12-02T16:20',
          storageLocation: '图书馆服务台',
          image: require('@/assets/images/高数.jpg')
        }
      ]
    }
  },
  methods: {
    triggerLostFileUpload() {
      this.$refs.lostFileInput.click()
    },
    handleLostFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const url = URL.createObjectURL(file)
        this.lostImage = {
          name: file.name,
          url: url,
          file: file
        }
      }
    },
    removeLostImage() {
      if (this.lostImage) {
        URL.revokeObjectURL(this.lostImage.url)
        this.lostImage = null
      }
      this.$refs.lostFileInput.value = ''
    },
    triggerFoundFileUpload() {
      this.$refs.foundFileInput.click()
    },
    handleFoundFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const url = URL.createObjectURL(file)
        this.foundImage = {
          name: file.name,
          url: url,
          file: file
        }
      }
    },
    removeFoundImage() {
      if (this.foundImage) {
        URL.revokeObjectURL(this.foundImage.url)
        this.foundImage = null
      }
      this.$refs.foundFileInput.value = ''
    },
    submitLost() {
      // 这里可以添加表单提交逻辑
      const newItem = {
        id: 'L' + Date.now(),
        type: 'lost',
        ...this.lostForm,
        image: this.lostImage ? this.lostImage.url : null
      }
      
      this.lostItems.unshift(newItem)
      
      this.$store.dispatch('showNotification', {
        type: 'success',
        message: '寻物信息发布成功！'
      })
      
      // 重置表单
      this.lostForm = {
        name: '',
        studentId: '',
        phone: '',
        category: '',
        itemName: '',
        description: '',
        location: '',
        lostTime: ''
      }
      this.removeLostImage()
      
      // 切换到搜索页面
      this.activeTab = 'search'
      this.searchTab = 'lost'
    },
    submitFound() {
      // 这里可以添加表单提交逻辑
      const newItem = {
        id: 'F' + Date.now(),
        type: 'found',
        ...this.foundForm,
        image: this.foundImage ? this.foundImage.url : null
      }
      
      this.foundItems.unshift(newItem)
      
      this.$store.dispatch('showNotification', {
        type: 'success',
        message: '拾物信息发布成功！'
      })
      
      // 重置表单
      this.foundForm = {
        name: '',
        studentId: '',
        phone: '',
        category: '',
        itemName: '',
        description: '',
        location: '',
        foundTime: '',
        storageLocation: ''
      }
      this.removeFoundImage()
      
      // 切换到搜索页面
      this.activeTab = 'search'
      this.searchTab = 'found'
    },
    searchItems() {
      // 这里可以添加搜索逻辑
      this.$store.dispatch('showNotification', {
        type: 'info',
        message: '搜索功能开发中...'
      })
    },
    viewItemDetail(item) {
      this.currentItem = item
      this.showDetailModal = true
    },
    closeDetailModal() {
      this.showDetailModal = false
      this.currentItem = {}
    },
    getCategoryText(category) {
      const categoryMap = {
        'card': '证件类',
        'electronics': '电子产品',
        'books': '书籍文具',
        'clothing': '衣物配饰',
        'keys': '钥匙',
        'wallet': '钱包/包',
        'other': '其他'
      }
      return categoryMap[category] || '未知'
    },
    getLocationText(location) {
      const locationMap = {
        'library': '图书馆',
        'classroom': '教学楼',
        'dormitory': '宿舍楼',
        'canteen': '食堂',
        'gym': '体育馆',
        'playground': '操场',
        'road': '校园道路',
        'other': '其他地点'
      }
      return locationMap[location] || '未知'
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      
      return `${year}-${month}-${day} ${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
.lost-found {
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
  background: url('../assets/images/lost-found-header.jpg') no-repeat center;
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

.tab-section {
  margin: 30px 0;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.tab-btn:hover {
  border-color: #4a6cf7;
  color: #4a6cf7;
}

.tab-btn.active {
  background-color: #4a6cf7;
  color: white;
  border-color: #4a6cf7;
}

.form-section, .search-section {
  margin-bottom: 40px;
}

.form-card, .search-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.form-card h2, .search-card h2 {
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

.upload-preview {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.preview-item {
  position: relative;
  width: 150px;
  height: 150px;
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

.search-filters {
  margin-bottom: 25px;
}

.filter-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.filter-group {
  flex: 1;
}

.filter-group.full-width {
  flex: auto;
}

.filter-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.filter-control {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.keyword-search {
  display: flex;
  gap: 10px;
}

.search-btn {
  padding: 10px 20px;
  background-color: #4a6cf7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.search-tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.search-tab {
  padding: 12px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  transition: all 0.3s;
}

.search-tab:hover {
  color: #4a6cf7;
}

.search-tab.active {
  color: #4a6cf7;
  border-bottom-color: #4a6cf7;
}

.search-results {
  min-height: 300px;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.item-card {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.item-image {
  height: 180px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-content {
  padding: 15px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.item-header h3 {
  font-size: 1.1rem;
  margin: 0;
}

.item-category {
  font-size: 0.8rem;
  padding: 3px 8px;
  background-color: #f0f0f0;
  border-radius: 10px;
  color: #666;
}

.item-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-meta {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.meta-item {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
}

.meta-item i {
  width: 16px;
  margin-right: 5px;
  color: #4a6cf7;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #999;
}

.modal-body {
  padding: 20px;
}

.detail-image {
  margin-bottom: 20px;
  text-align: center;
}

.detail-image img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 5px;
}

.detail-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-row {
  display: flex;
}

.info-label {
  width: 120px;
  font-weight: 500;
  color: #666;
}

.info-value {
  flex: 1;
  color: #333;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-title {
    margin-bottom: 20px;
  }
  
  .tab-buttons {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .filter-row {
    flex-direction: column;
    gap: 10px;
  }
  
  .items-list {
    grid-template-columns: 1fr;
  }
  
  .info-row {
    flex-direction: column;
  }
  
  .info-label {
    margin-bottom: 5px;
  }
}
</style>