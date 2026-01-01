<template>
  <div class="card-loss-page">
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <div class="breadcrumb">
            <router-link to="/">首页</router-link>
            <span class="separator">/</span>
            <a href="#" @click.prevent="goToLifeSection">生活服务</a>
            <span class="separator">/</span>
            <span class="current">校园卡挂失</span>
          </div>
          <h1 class="page-title">校园卡挂失</h1>
          <p class="page-description">如果您的校园卡丢失或被盗，请立即进行挂失操作，以保护您的账户安全</p>
        </div>

        <div class="card-loss-container">
          <div class="card-loss-notice">
            <div class="notice-icon">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="notice-content">
              <h3>重要提示</h3>
              <ul>
                <li>校园卡挂失后，原卡将立即失效，无法继续使用</li>
                <li>挂失后24小时内如找回原卡，可持本人有效证件到校园卡服务中心办理解挂</li>
                <li>补办新卡需缴纳工本费15元</li>
                <li>挂失成功后，原卡内的余额将自动转入新卡</li>
              </ul>
            </div>
          </div>

          <div class="card-loss-form-container">
            <h2>挂失申请表</h2>
            <form @submit.prevent="handleSubmit" class="card-loss-form">
              <div class="form-row">
                <div class="form-group">
                  <label>学号 <span class="required">*</span></label>
                  <input 
                    v-model="form.studentId" 
                    type="text" 
                    placeholder="请输入您的学号"
                    :class="{ 'error-input': errors.studentId }"
                    @focus="clearError('studentId')"
                  >
                  <div class="error-message" v-if="errors.studentId">{{ errors.studentId }}</div>
                </div>
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input 
                    v-model="form.studentName" 
                    type="text" 
                    placeholder="请输入您的真实姓名"
                    :class="{ 'error-input': errors.studentName }"
                    @focus="clearError('studentName')"
                  >
                  <div class="error-message" v-if="errors.studentName">{{ errors.studentName }}</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>身份证号 <span class="required">*</span></label>
                  <input 
                    v-model="form.idCard" 
                    type="text" 
                    placeholder="请输入您的身份证号码"
                    :class="{ 'error-input': errors.idCard }"
                    @focus="clearError('idCard')"
                  >
                  <div class="error-message" v-if="errors.idCard">{{ errors.idCard }}</div>
                </div>
                <div class="form-group">
                  <label>校园卡号</label>
                  <input 
                    v-model="form.cardNumber" 
                    type="text" 
                    placeholder="请输入您的校园卡号（如不清楚可不填）"
                    :class="{ 'error-input': errors.cardNumber }"
                    @focus="clearError('cardNumber')"
                  >
                  <div class="error-message" v-if="errors.cardNumber">{{ errors.cardNumber }}</div>
                </div>
              </div>

              <div class="form-group">
                <label>联系电话 <span class="required">*</span></label>
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  placeholder="请输入您的手机号码"
                  :class="{ 'error-input': errors.phone }"
                  @focus="clearError('phone')"
                >
                <div class="error-message" v-if="errors.phone">{{ errors.phone }}</div>
              </div>

              <div class="form-group">
                <label>丢失原因 <span class="required">*</span></label>
                <select 
                  v-model="form.lossReason"
                  :class="{ 'error-input': errors.lossReason }"
                  @change="clearError('lossReason')"
                >
                  <option value="">请选择丢失原因</option>
                  <option value="丢失">不慎丢失</option>
                  <option value="被盗">被盗</option>
                  <option value="损坏">严重损坏</option>
                  <option value="其他">其他原因</option>
                </select>
                <div class="error-message" v-if="errors.lossReason">{{ errors.lossReason }}</div>
              </div>

              <div class="form-group">
                <label>丢失时间 <span class="required">*</span></label>
                <input 
                  v-model="form.lossTime" 
                  type="datetime-local"
                  :class="{ 'error-input': errors.lossTime }"
                  @focus="clearError('lossTime')"
                >
                <div class="error-message" v-if="errors.lossTime">{{ errors.lossTime }}</div>
              </div>

              <div class="form-group">
                <label>丢失地点</label>
                <input v-model="form.lossLocation" type="text" placeholder="请输入可能的丢失地点（如记得）">
              </div>

              <div class="form-group">
                <label>详细描述</label>
                <textarea v-model="form.description" rows="4" placeholder="请详细描述丢失情况（选填）"></textarea>
              </div>

              <div class="form-actions">
                <button type="submit" class="btn btn-primary">
                  <i class="fas fa-paper-plane"></i> 提交挂失申请
                </button>
                <button type="button" @click="resetForm" class="btn btn-secondary">
                  <i class="fas fa-redo"></i> 重置表单
                </button>
              </div>
            </form>
          </div>

          <div class="card-loss-steps">
            <h2>挂失后处理流程</h2>
            <div class="steps-container">
              <div v-for="(step, index) in steps" :key="index" class="step-item">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-info">
            <h2>联系方式</h2>
            <div class="contact-items">
              <div v-for="(contact, index) in contacts" :key="index" class="contact-item">
                <div class="contact-icon">
                  <i :class="contact.icon"></i>
                </div>
                <div class="contact-details">
                  <h4>{{ contact.title }}</h4>
                  <p>{{ contact.info }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <div class="modal-content">
        <div class="modal-header">
          <h3>挂失申请提交成功</h3>
          <span class="close" @click="showModal = false">&times;</span>
        </div>
        <div class="modal-body">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <p>您的校园卡挂失申请已成功提交！</p>
          <p class="report-number">挂失编号：<span>{{ generatedLossNumber }}</span></p>
          <p>请妥善保存此编号，以便后续查询和补办校园卡时使用。</p>
        </div>
        <div class="modal-footer">
          <button @click="showModal = false" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const getNow = () => new Date()

import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// 表单数据
const form = reactive({
  studentId: '',
  studentName: '',
  idCard: '',
  cardNumber: '',
  phone: '',
  lossReason: '',
  lossTime: '',
  lossLocation: '',
  description: ''
});

// 错误信息
const errors = reactive({
  studentId: '',
  studentName: '',
  idCard: '',
  cardNumber: '',
  phone: '',
  lossReason: '',
  lossTime: ''
});

// 状态控制
const showModal = ref(false);
const generatedLossNumber = ref('');

// 静态内容
const steps = [
  { title: '提交挂失申请', desc: '填写并提交挂失申请表单' },
  { title: '系统验证', desc: '系统验证您的身份信息' },
  { title: '挂失成功', desc: '原卡立即失效，收到挂失成功通知' },
  { title: '补办新卡', desc: '持本人有效证件到校园卡服务中心补办新卡' }
];

const contacts = [
  { icon: 'fas fa-phone', title: '校园卡服务中心', info: '022-23501234' },
  { icon: 'fas fa-map-marker-alt', title: '服务地址', info: '学生活动中心一楼大厅' },
  { icon: 'fas fa-clock', title: '服务时间', info: '周一至周五 8:30-17:00' }
];

// 初始化时间
onMounted(() => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  const localISOTime = new Date(now - offset).toISOString().slice(0, 16);
  form.lossTime = localISOTime;
});

// 验证逻辑
const validateForm = () => {
  let isValid = true;

  // 先清空旧错误
  Object.keys(errors).forEach(k => (errors[k] = ''));

  // 为了方便演示，只校验必填项“不为空”
  if (!form.studentId) {
    errors.studentId = '请输入学号';
    isValid = false;
  }

  if (!form.studentName) {
    errors.studentName = '请输入姓名';
    isValid = false;
  }

  if (!form.idCard) {
    errors.idCard = '请输入身份证号';
    isValid = false;
  }

  if (!form.phone) {
    errors.phone = '请输入联系电话';
    isValid = false;
  }

  if (!form.lossReason) {
    errors.lossReason = '请选择丢失原因';
    isValid = false;
  }

  if (!form.lossTime) {
    errors.lossTime = '请选择丢失时间';
    isValid = false;
  }

  // ✅ 不再限制未来时间、不再限制格式
  return isValid;
};


// 提交处理
const handleSubmit = () => {
  if (validateForm()) {
    generatedLossNumber.value = generateLossNumber();
    showModal.value = true;
    // resetForm(); // 提交后是否重置视需求而定
  }
};

// 辅助函数
const generateLossNumber = () => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-T:Z.]/g, '').slice(0, 14);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `LS${timestamp}${random}`;
};

const clearError = (field) => {
  errors[field] = '';
};

const resetForm = () => {
  Object.keys(form).forEach(key => form[key] = '');
  Object.keys(errors).forEach(key => errors[key] = '');
};

const goToLifeSection = () => {
  // Vue Router 导航或 window.location
  router.push('/life');
};
</script>

<style src="@/assets/css/cardloss.css"></style>