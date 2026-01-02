<template>
  <div class="page">

    <main class="main">
        <div class="breadcrumb">
            <a href="index.html">首页</a> &gt; <a href="#" id="lifeServiceLink2">生活服务</a> &gt; <span>宿舍报修</span>
        </div>

        <section class="dorm-repair-section">
            <div class="section-header">
                <h2>宿舍报修</h2>
                <p>请填写以下信息提交报修申请</p>
            </div>

            <div class="repair-form-container">
                <form id="repair-form" class="repair-form">
                    <div class="form-group">
                        <label for="student-id">学号 <span class="required">*</span></label>
                        <input type="text" id="student-id" name="student-id" placeholder="请输入您的学号" required>
                    </div>

                    <div class="form-group">
                        <label for="dorm-building">宿舍楼 <span class="required">*</span></label>
                        <select id="dorm-building" name="dorm-building" required>
                            <option value="">请选择宿舍楼</option>
                            <option value="1">1号楼</option>
                            <option value="2">2号楼</option>
                            <option value="3">3号楼</option>
                            <option value="4">4号楼</option>
                            <option value="5">5号楼</option>
                            <option value="6">6号楼</option>
                            <option value="7">7号楼</option>
                            <option value="8">8号楼</option>
                            <option value="9">9号楼</option>
                            <option value="10">10号楼</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="dorm-room">宿舍号 <span class="required">*</span></label>
                        <input type="text" id="dorm-room" name="dorm-room" placeholder="请输入宿舍号，如：301" required>
                    </div>

                    <div class="form-group">
                        <label for="problem-type">问题类型 <span class="required">*</span></label>
                        <select id="problem-type" name="problem-type" required>
                            <option value="">请选择问题类型</option>
                            <option value="water">水管问题</option>
                            <option value="electric">电路问题</option>
                            <option value="furniture">家具损坏</option>
                            <option value="appliance">电器故障</option>
                            <option value="network">网络问题</option>
                            <option value="door">门窗问题</option>
                            <option value="other">其他问题</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="problem-desc">问题描述 <span class="required">*</span></label>
                        <textarea id="problem-desc" name="problem-desc" rows="5" placeholder="请详细描述您遇到的问题" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="contact-phone">联系电话 <span class="required">*</span></label>
                        <input type="tel" id="contact-phone" name="contact-phone" placeholder="请输入您的联系电话" required>
                    </div>

                    <div class="form-group">
                        <label for="available-time">方便维修时间</label>
                        <input type="text" id="available-time" name="available-time" placeholder="例如：工作日下午、周末全天">
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="submit-btn">提交报修</button>
                        <button type="reset" class="reset-btn">重置表单</button>
                    </div>
                </form>
            </div>

            <div class="repair-info">
                <h3>报修须知</h3>
                <ul>
                    <li>请准确填写宿舍信息，以便维修人员快速定位</li>
                    <li>问题描述请尽可能详细，可附上照片说明</li>
                    <li>紧急情况请直接拨打宿舍管理处电话：022-2350xxxx</li>
                    <li>提交报修后，工作人员将在24小时内与您联系</li>
                </ul>
            </div>
        </section>
    </main>
    
    <div id="success-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>报修提交成功</h3>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <p>您的报修申请已成功提交，工作人员将在24小时内与您联系。</p>
                <p>报修编号：<span id="repair-id"></span></p>
            </div>
            <div class="modal-footer">
                <button class="modal-btn">确定</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
/* 宿舍报修页面样式 */
.breadcrumb {
  padding: 15px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #8B0000;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.dorm-repair-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #8B0000;
}

.section-header h2 {
  color: #8B0000;
  font-size: 28px;
  margin-bottom: 10px;
}

.section-header p {
  color: #666;
  font-size: 16px;
}

.repair-form-container {
  margin-bottom: 40px;
}

.repair-form {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.required {
  color: #e74c3c;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #8B0000;
  outline: none;
  box-shadow: 0 0 0 2px rgba(139, 0, 0, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.submit-btn,
.reset-btn {
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn {
  background-color: #8B0000;
  color: white;
}

.submit-btn:hover {
  background-color: #a00000;
}

.reset-btn {
  background-color: #f1f1f1;
  color: #333;
}

.reset-btn:hover {
  background-color: #e1e1e1;
}

.repair-info {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #8B0000;
}

.repair-info h3 {
  color: #8B0000;
  margin-bottom: 15px;
  font-size: 18px;
}

.repair-info ul {
  padding-left: 20px;
}

.repair-info li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* 模态框样式 */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 0;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: modalopen 0.4s;
}

@keyframes modalopen {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  color: #8B0000;
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  line-height: 20px;
}

.close:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

.modal-btn {
  background-color: #8B0000;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.modal-btn:hover {
  background-color: #a00000;
}

/* 服务项链接样式 */
.service-action {
  margin-top: 10px;
  text-align: center;
}

.service-link {
  display: inline-block;
  background-color: #8B0000;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s;
}

.service-link:hover {
  background-color: #a00000;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dorm-repair-section {
    padding: 20px 15px;
  }
  
  .repair-form {
    padding: 15px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .submit-btn,
  .reset-btn {
    width: 100%;
  }
}
</style>
<script>
export default {
  name: 'DormRepair',

  data() {
    return {
      form: {
        studentId: '',
        dormBuilding: '',
        dormRoom: '',
        problemType: '',
        problemDesc: '',
        contactPhone: '',
        availableTime: ''
      },
      showModal: false,
      repairId: '',
      toast: {
        show: false,
        message: ''
      }
    }
  },

  methods: {
    /** 跳转生活服务 */
    goLife() {
      this.$router.push({ path: '/', hash: '#life' })
    },

    /** 表单提交 */
    submitForm() {
      if (!this.validateForm()) return

      this.repairId = this.generateRepairId()
      this.showModal = true

      console.log('报修信息：', {
        ...this.form,
        repairId: this.repairId,
        submitTime: new Date().toISOString()
      })
    },

    /** 校验 */
    validateForm() {
      const f = this.form

      if (!f.studentId) return this.showMessage('请输入学号')
      if (!/^\d{8,12}$/.test(f.studentId))
        return this.showMessage('学号格式应为8-12位数字')

      if (!f.dormBuilding) return this.showMessage('请选择宿舍楼')
      if (!f.dormRoom) return this.showMessage('请输入宿舍号')
      if (!f.problemType) return this.showMessage('请选择问题类型')
      if (!f.problemDesc || f.problemDesc.length < 10)
        return this.showMessage('问题描述至少10个字符')

      if (!f.contactPhone) return this.showMessage('请输入联系电话')
      if (!/^1[3-9]\d{9}$/.test(f.contactPhone))
        return this.showMessage('手机号格式不正确')

      return true
    },

    /** 生成报修编号 */
    generateRepairId() {
      const d = new Date()
      const y = d.getFullYear()
      const m = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      const r = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      return `WX${y}${m}${day}${r}`
    },

    /** 关闭模态框 */
    closeModal() {
      this.showModal = false
      this.resetForm()
    },

    resetForm() {
      Object.keys(this.form).forEach(k => (this.form[k] = ''))
    },

    /** Toast */
    showMessage(msg) {
      this.toast.message = msg
      this.toast.show = true
      setTimeout(() => (this.toast.show = false), 3000)
      return false
    }
  }
}
</script>
