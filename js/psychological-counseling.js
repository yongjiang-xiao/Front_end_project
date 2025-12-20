// 心理咨询页面JavaScript功能

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

    // 添加页面加载动画
    animatePageElements();

    // 添加滚动效果
    setupScrollEffects();

    // 添加卡片点击效果
    setupCardInteractions();
});

// 页面元素动画
function animatePageElements() {
    const elements = document.querySelectorAll('.service-info-card, .location-card, .helpline-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 滚动效果设置
function setupScrollEffects() {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// 卡片交互设置
function setupCardInteractions() {
    // 为校区卡片添加点击效果
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach(card => {
        card.addEventListener('click', function() {
            // 获取校区名称
            const campusName = this.querySelector('.campus-name').textContent;
            showCampusDetails(campusName);
        });
    });

    // 为热线卡片添加点击复制功能
    const helplineNumbers = document.querySelectorAll('.helpline-number');
    helplineNumbers.forEach(number => {
        number.style.cursor = 'pointer';
        number.addEventListener('click', function() {
            const phoneNumber = this.querySelector('span').textContent;
            copyToClipboard(phoneNumber);
            showToast('电话号码已复制: ' + phoneNumber);
        });
    });
}

// 显示校区详情
function showCampusDetails(campusName) {
    // 这里可以扩展为显示更详细的校区信息
    console.log('查看校区详情:', campusName);
}

// 复制到剪贴板
function copyToClipboard(text) {
    // 创建一个临时的文本区域
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('无法复制文本: ', err);
    }
    
    document.body.removeChild(textArea);
}

// 显示提示消息
function showToast(message) {
    // 检查是否已存在提示框
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#333';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '4px';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.opacity = '1';
    
    // 3秒后隐藏
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 添加打印功能
function printPage() {
    window.print();
}

// 添加分享功能
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: '南开大学心理咨询服务中心',
            text: '南开大学心理咨询服务中心为您提供专业的心理健康服务',
            url: window.location.href
        }).then(() => {
            console.log('分享成功');
        }).catch((error) => {
            console.log('分享失败:', error);
        });
    } else {
        // 如果不支持Web Share API，复制链接到剪贴板
        copyToClipboard(window.location.href);
        showToast('链接已复制，可以分享给朋友');
    }
}