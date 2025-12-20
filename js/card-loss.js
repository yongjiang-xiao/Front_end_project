// 校园卡挂失表单验证和提交功能

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
    
    const cardLossForm = document.getElementById('cardLossForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    const closeBtn = document.querySelector('.close');
    
    // 表单提交事件
    cardLossForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = {
            studentId: document.getElementById('studentId').value.trim(),
            studentName: document.getElementById('studentName').value.trim(),
            idCard: document.getElementById('idCard').value.trim(),
            cardNumber: document.getElementById('cardNumber').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            lossReason: document.getElementById('lossReason').value,
            lossTime: document.getElementById('lossTime').value,
            lossLocation: document.getElementById('lossLocation').value.trim(),
            description: document.getElementById('description').value.trim()
        };
        
        // 验证表单
        if (validateForm(formData)) {
            // 生成挂失编号
            const lossNumber = generateLossNumber();
            
            // 显示成功模态框
            showSuccessModal(lossNumber);
            
            // 重置表单
            cardLossForm.reset();
        }
    });
    
    // 关闭模态框事件
    closeModalBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    closeBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
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
        
        // 验证姓名
        if (!data.studentName) {
            showError('studentNameError', '请输入姓名');
            isValid = false;
        } else if (!/^[\u4e00-\u9fa5]{2,10}$/.test(data.studentName)) {
            showError('studentNameError', '姓名格式不正确，应为2-10个中文字符');
            isValid = false;
        } else {
            hideError('studentNameError');
        }
        
        // 验证身份证号
        if (!data.idCard) {
            showError('idCardError', '请输入身份证号');
            isValid = false;
        } else if (!/^\d{17}[\dXx]$/.test(data.idCard)) {
            showError('idCardError', '身份证号格式不正确');
            isValid = false;
        } else {
            hideError('idCardError');
        }
        
        // 校园卡号为选填，如果填写了则验证
        if (data.cardNumber && !/^\d{10,16}$/.test(data.cardNumber)) {
            showError('cardNumberError', '校园卡号格式不正确，应为10-16位数字');
            isValid = false;
        } else {
            hideError('cardNumberError');
        }
        
        // 验证手机号
        if (!data.phone) {
            showError('phoneError', '请输入手机号');
            isValid = false;
        } else if (!/^1[3-9]\d{9}$/.test(data.phone)) {
            showError('phoneError', '手机号格式不正确');
            isValid = false;
        } else {
            hideError('phoneError');
        }
        
        // 验证丢失原因
        if (!data.lossReason) {
            showError('lossReasonError', '请选择丢失原因');
            isValid = false;
        } else {
            hideError('lossReasonError');
        }
        
        // 验证丢失时间
        if (!data.lossTime) {
            showError('lossTimeError', '请选择丢失时间');
            isValid = false;
        } else {
            const lossDateTime = new Date(data.lossTime);
            const now = new Date();
            
            // 检查丢失时间是否在未来
            if (lossDateTime > now) {
                showError('lossTimeError', '丢失时间不能是未来时间');
                isValid = false;
            } else {
                // 检查丢失时间是否过早（比如一年前）
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
                
                if (lossDateTime < oneYearAgo) {
                    showError('lossTimeError', '丢失时间过于久远，请确认时间是否正确');
                    isValid = false;
                } else {
                    hideError('lossTimeError');
                }
            }
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
        inputElement.style.borderColor = '#e53935';
    }
    
    // 隐藏错误信息
    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'none';
        
        // 移除输入框的错误样式
        const inputElement = errorElement.previousElementSibling;
        inputElement.style.borderColor = '#ddd';
    }
    
    // 生成挂失编号
    function generateLossNumber() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        
        return `LS${year}${month}${day}${hours}${minutes}${seconds}${random}`;
    }
    
    // 显示成功模态框
    function showSuccessModal(lossNumber) {
        document.getElementById('lossNumber').textContent = lossNumber;
        successModal.style.display = 'block';
    }
    
    // 输入框获得焦点时清除错误提示
    const inputElements = document.querySelectorAll('input, select, textarea');
    inputElements.forEach(element => {
        element.addEventListener('focus', function() {
            const errorElement = this.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.style.display = 'none';
                this.style.borderColor = '#ddd';
            }
        });
    });
    
    // 设置默认丢失时间为当前时间
    const lossTimeInput = document.getElementById('lossTime');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    lossTimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
});