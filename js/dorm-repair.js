// 宿舍报修页面JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
  // 处理生活服务链接点击
    const lifeServiceLinks = ['lifeServiceLink', 'lifeServiceLink2', 'lifeServiceLink3'];
    lifeServiceLinks.forEach(linkId => {
        const link = document.getElementById(linkId);
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // 跳转到首页的生活服务部分
                window.location.replace('index.html#life');
            });
        }
    });
  
  // 获取表单元素
  const repairForm = document.getElementById('repair-form');
  const modal = document.getElementById('success-modal');
  const closeModal = document.querySelector('.close');
  const modalBtn = document.querySelector('.modal-btn');
  const repairIdElement = document.getElementById('repair-id');
  
  // 表单提交事件
  repairForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(repairForm);
    const studentId = formData.get('student-id');
    const dormBuilding = formData.get('dorm-building');
    const dormRoom = formData.get('dorm-room');
    const problemType = formData.get('problem-type');
    const problemDesc = formData.get('problem-desc');
    const contactPhone = formData.get('contact-phone');
    const availableTime = formData.get('available-time');
    
    // 验证表单数据
    if (!validateForm(studentId, dormBuilding, dormRoom, problemType, problemDesc, contactPhone)) {
      return;
    }
    
    // 生成报修编号
    const repairId = generateRepairId();
    
    // 显示成功模态框
    showSuccessModal(repairId);
    
    // 在实际应用中，这里应该发送数据到服务器
    console.log('报修信息：', {
      repairId,
      studentId,
      dormBuilding,
      dormRoom,
      problemType,
      problemDesc,
      contactPhone,
      availableTime,
      submitTime: new Date().toISOString()
    });
  });
  
  // 关闭模态框事件
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    repairForm.reset();
  });
  
  modalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    repairForm.reset();
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      repairForm.reset();
    }
  });
  
  // 表单验证函数
  function validateForm(studentId, dormBuilding, dormRoom, problemType, problemDesc, contactPhone) {
    // 验证学号
    if (!studentId || studentId.trim() === '') {
      showMessage('请输入学号');
      return false;
    }
    
    // 验证学号格式（假设学号是8-12位数字）
    if (!/^\d{8,12}$/.test(studentId)) {
      showMessage('学号格式不正确，应为8-12位数字');
      return false;
    }
    
    // 验证宿舍楼
    if (!dormBuilding) {
      showMessage('请选择宿舍楼');
      return false;
    }
    
    // 验证宿舍号
    if (!dormRoom || dormRoom.trim() === '') {
      showMessage('请输入宿舍号');
      return false;
    }
    
    // 验证问题类型
    if (!problemType) {
      showMessage('请选择问题类型');
      return false;
    }
    
    // 验证问题描述
    if (!problemDesc || problemDesc.trim() === '') {
      showMessage('请输入问题描述');
      return false;
    }
    
    if (problemDesc.length < 10) {
      showMessage('问题描述至少需要10个字符');
      return false;
    }
    
    // 验证联系电话
    if (!contactPhone || contactPhone.trim() === '') {
      showMessage('请输入联系电话');
      return false;
    }
    
    // 验证手机号格式
    if (!/^1[3-9]\d{9}$/.test(contactPhone)) {
      showMessage('手机号格式不正确');
      return false;
    }
    
    return true;
  }
  
  // 生成报修编号
  function generateRepairId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `WX${year}${month}${day}${random}`;
  }
  
  // 显示成功模态框
  function showSuccessModal(repairId) {
    repairIdElement.textContent = repairId;
    modal.style.display = 'block';
  }
  
  // 显示消息提示
  function showMessage(message) {
    // 创建消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-toast';
    messageDiv.textContent = message;
    
    // 添加样式
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.backgroundColor = '#f44336';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '12px 24px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = 'opacity 0.3s';
    
    // 添加到页面
    document.body.appendChild(messageDiv);
    
    // 显示动画
    setTimeout(() => {
      messageDiv.style.opacity = '1';
    }, 10);
    
    // 3秒后移除
    setTimeout(() => {
      messageDiv.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(messageDiv);
      }, 300);
    }, 3000);
  }
  
  // 获取问题类型的中文名称
  function getProblemTypeName(type) {
    const types = {
      'water': '水管问题',
      'electric': '电路问题',
      'furniture': '家具损坏',
      'appliance': '电器故障',
      'network': '网络问题',
      'door': '门窗问题',
      'other': '其他问题'
    };
    return types[type] || type;
  }
  
  // 获取宿舍楼名称
  function getDormBuildingName(building) {
    return building + '号楼';
  }
});