// 校园卡充值表单验证和模拟支付功能

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
    
    const rechargeForm = document.getElementById('rechargeForm');
    const paymentModal = document.getElementById('paymentModal');
    const successModal = document.getElementById('successModal');
    const closeBtns = document.querySelectorAll('.close');
    const cancelPaymentBtn = document.getElementById('cancelPayment');
    const confirmPaymentBtn = document.getElementById('confirmPayment');
    const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
    
    let countdownInterval;
    let selectedAmount = 0;
    let selectedPaymentMethod = '';
    
    // 金额选项点击事件
    const amountOptions = document.querySelectorAll('.amount-option');
    amountOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有选中状态
            amountOptions.forEach(opt => opt.classList.remove('selected'));
            
            // 添加当前选中状态
            this.classList.add('selected');
            
            // 获取金额并设置到自定义金额输入框
            selectedAmount = parseFloat(this.dataset.amount);
            document.getElementById('rechargeAmount').value = '';
            
            // 更新汇总信息
            updateSummary();
        });
    });
    
    // 自定义金额输入事件
    const customAmountInput = document.getElementById('rechargeAmount');
    customAmountInput.addEventListener('input', function() {
        // 移除所有预设金额的选中状态
        amountOptions.forEach(opt => opt.classList.remove('selected'));
        
        // 获取自定义金额
        const value = parseFloat(this.value);
        if (!isNaN(value) && value >= 10 && value <= 500) {
            selectedAmount = value;
        } else {
            selectedAmount = 0;
        }
        
        // 更新汇总信息
        updateSummary();
    });
    
    // 支付方式选择事件
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有选中状态
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            opt.querySelector('input[type="radio"]').checked = false;
            
            // 添加当前选中状态
            this.classList.add('selected');
            this.querySelector('input[type="radio"]').checked = true;
            
            // 更新选中的支付方式
            selectedPaymentMethod = this.dataset.method;
            
            // 更新汇总信息
            updateSummary();
        });
    });
    
    // 表单提交事件
    rechargeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = {
            studentId: document.getElementById('studentId').value.trim(),
            rechargeAmount: selectedAmount,
            paymentMethod: selectedPaymentMethod
        };
        
        // 验证表单
        if (validateForm(formData)) {
            // 显示支付模态框
            showPaymentModal();
        }
    });
    
    // 关闭模态框事件
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            
            // 如果是支付模态框，清除倒计时
            if (modal === paymentModal && countdownInterval) {
                clearInterval(countdownInterval);
            }
        });
    });
    
    // 取消支付按钮事件
    cancelPaymentBtn.addEventListener('click', function() {
        paymentModal.style.display = 'none';
        
        // 清除倒计时
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    });
    
    // 确认支付按钮事件（模拟支付成功）
    confirmPaymentBtn.addEventListener('click', function() {
        // 模拟支付成功
        simulatePaymentSuccess();
    });
    
    // 关闭成功模态框按钮事件
    closeSuccessModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
            
            // 清除倒计时
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
        }
        
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    // 表单验证函数
    function validateForm(data) {
        let isValid = true;
        
        // 验证学号
        if (!data.studentId) {
            showError('studentIdError', '请输入学号');
            isValid = false;
        } else if (!/^\d{8,12}$/.test(data.studentId)) {
            showError('studentIdError', '学号格式不正确，应为8-12位数字');
            isValid = false;
        } else {
            hideError('studentIdError');
        }
        
        // 验证充值金额
        if (!data.rechargeAmount || data.rechargeAmount < 10 || data.rechargeAmount > 500) {
            showError('rechargeAmountError', '充值金额应在10-500元之间');
            isValid = false;
        } else {
            hideError('rechargeAmountError');
        }
        
        // 验证支付方式
        if (!data.paymentMethod) {
            showError('paymentMethodError', '请选择支付方式');
            isValid = false;
        } else {
            hideError('paymentMethodError');
        }
        
        return isValid;
    }
    
    // 显示错误信息
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // 给输入框添加错误样式
        const inputElement = errorElement.previousElementSibling;
        if (inputElement.tagName === 'INPUT') {
            inputElement.style.borderColor = '#e53935';
        }
    }
    
    // 隐藏错误信息
    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'none';
        
        // 移除输入框的错误样式
        const inputElement = errorElement.previousElementSibling;
        if (inputElement && inputElement.tagName === 'INPUT') {
            inputElement.style.borderColor = '#ddd';
        }
    }
    
    // 更新汇总信息
    function updateSummary() {
        // 更新金额
        document.getElementById('summaryAmount').textContent = selectedAmount.toFixed(2);
        document.getElementById('totalAmount').textContent = selectedAmount.toFixed(2);
        
        // 更新支付方式
        const paymentMethodMap = {
            'alipay': '支付宝',
            'wechat': '微信支付',
            'unionpay': '银联支付'
        };
        
        document.getElementById('summaryPayment').textContent = 
            selectedPaymentMethod ? paymentMethodMap[selectedPaymentMethod] : '未选择';
    }
    
    // 显示支付模态框
    function showPaymentModal() {
        // 设置支付信息
        document.getElementById('modalAmount').textContent = selectedAmount.toFixed(2);
        
        // 设置支付方式图标和名称
        const paymentMethodMap = {
            'alipay': {
                name: '支付宝',
                icon: 'fab fa-alipay',
                bgColor: '#1677ff'
            },
            'wechat': {
                name: '微信支付',
                icon: 'fab fa-weixin',
                bgColor: '#07c160'
            },
            'unionpay': {
                name: '银联支付',
                icon: 'fas fa-credit-card',
                bgColor: '#e1251b'
            }
        };
        
        const methodInfo = paymentMethodMap[selectedPaymentMethod];
        document.getElementById('modalPaymentName').textContent = methodInfo.name;
        document.getElementById('paymentApp').textContent = methodInfo.name;
        
        const modalIcon = document.getElementById('modalPaymentIcon');
        modalIcon.innerHTML = `<i class="${methodInfo.icon}"></i>`;
        modalIcon.style.backgroundColor = methodInfo.bgColor;
        modalIcon.style.color = 'white';
        
        // 显示模态框
        paymentModal.style.display = 'block';
        
        // 启动倒计时
        startCountdown();
    }
    
    // 启动倒计时
    function startCountdown() {
        let seconds = 120;
        const countdownElement = document.getElementById('countdown');
        
        countdownElement.textContent = seconds;
        
        countdownInterval = setInterval(function() {
            seconds--;
            countdownElement.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                paymentModal.style.display = 'none';
                showMessage('支付超时，请重新发起支付');
            }
        }, 1000);
    }
    
    // 模拟支付成功
    function simulatePaymentSuccess() {
        // 清除倒计时
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        // 关闭支付模态框
        paymentModal.style.display = 'none';
        
        // 生成交易编号
        const transactionId = generateTransactionId();
        
        // 更新余额
        const currentBalance = parseFloat(document.getElementById('currentBalance').textContent);
        const newBalance = currentBalance + selectedAmount;
        document.getElementById('currentBalance').textContent = newBalance.toFixed(2);
        
        // 设置成功模态框信息
        document.getElementById('successAmount').textContent = `¥${selectedAmount.toFixed(2)}`;
        document.getElementById('newBalance').textContent = `¥${newBalance.toFixed(2)}`;
        document.getElementById('transactionId').textContent = transactionId;
        
        // 显示成功模态框
        successModal.style.display = 'block';
        
        // 添加充值记录到表格
        addRechargeRecord(selectedAmount, selectedPaymentMethod);
        
        // 重置表单
        rechargeForm.reset();
        amountOptions.forEach(opt => opt.classList.remove('selected'));
        paymentOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('input[type="radio"]').checked = false;
        });
        selectedAmount = 0;
        selectedPaymentMethod = '';
        updateSummary();
    }
    
    // 生成交易编号
    function generateTransactionId() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        
        return `TX${year}${month}${day}${hours}${minutes}${seconds}${random}`;
    }
    
    // 添加充值记录到表格
    function addRechargeRecord(amount, paymentMethod) {
        const tbody = document.querySelector('.history-table tbody');
        const now = new Date();
        
        // 格式化时间
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        
        // 支付方式映射
        const paymentMethodMap = {
            'alipay': '支付宝',
            'wechat': '微信支付',
            'unionpay': '银联支付'
        };
        
        // 创建新行
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${formattedTime}</td>
            <td>¥${amount.toFixed(2)}</td>
            <td>${paymentMethodMap[paymentMethod]}</td>
            <td class="status-success">成功</td>
            <td><a href="#" class="detail-link">查看详情</a></td>
        `;
        
        // 插入到表格顶部
        tbody.insertBefore(newRow, tbody.firstChild);
    }
    
    // 显示消息提示
    function showMessage(message) {
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-toast';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            z-index: 2000;
            font-size: 14px;
        `;
        
        // 添加到页面
        document.body.appendChild(messageDiv);
        
        // 3秒后移除
        setTimeout(function() {
            document.body.removeChild(messageDiv);
        }, 3000);
    }
    
    // 输入框获得焦点时清除错误提示
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(element => {
        element.addEventListener('focus', function() {
            const errorElement = this.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            }
        });
    });
});