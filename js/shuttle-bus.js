// 校车查询页面交互功能

// 校车时刻表数据
const busSchedules = {
    balitaiToJinnan: {
        weekday: {
            express: {
                route: '南开大学→天津图书馆→水上公园西路地铁站→天塔地铁站→南开大学新校西门→天南大新址公交站',
                price: '5元',
                times: ['7:50', '8:45', '9:00', '9:30', '10:00', '10:50', '11:30', '12:50', '13:10', '13:30', '13:50', '14:10', '14:50', '15:20', '15:50', '16:10', '16:50', '17:10', '17:30', '17:50', '18:20', '19:00', '19:20', '19:45', '20:00', '20:15', '20:30']
            },
            direct: {
                route: '南开大学→一食堂（津南校区）→梨树园（津南校区）',
                price: '5元',
                times: ['6:30', '6:45', '7:00', '7:15', '7:30', '7:45', '8:00', '8:10', '8:20', '8:30', '10:30', '12:20', '12:30', '12:40', '14:30', '16:30', '18:30', '21:20']
            }
        },
        weekend: {
            express: {
                route: '南开大学→天津图书馆→水上公园西路地铁站→天塔地铁站→南开大学新校西门→天南大新址公交',
                price: '5元',
                firstBus: '6:30',
                lastBus: '21:15',
                interval: '20-30分钟'
            }
        },
        holiday: {
            direct: {
                route: '南开大学→一食堂（津南校区）→梨树园（津南校区）',
                price: '5元',
                times: ['6:00', '12:30', '18:30', '21:15']
            }
        }
    },
    jinnanToBalitai: {
        weekday: {
            express: {
                route: '天南大新址公交站→南开大学新校西门→天塔地铁站→水上公园西路地铁站→天津图书馆→南开大学',
                price: '5元',
                times: ['6:30', '6:40', '6:50', '7:10', '7:40', '8:00', '8:30', '9:00', '9:40', '10:10', '10:30', '11:00', '11:20', '11:40', '12:10', '13:10', '14:00', '14:50', '15:10', '15:30', '15:50', '17:50', '18:30', '18:50', '19:10', '19:50', '20:10']
            },
            direct: {
                route: '梨树园（津南校区）→一食堂（津南校区）→天塔地铁站→水上公园西路地铁站→天津图书馆→南开大学',
                price: '5元',
                times: ['6:35', '9:20', '12:20', '12:30', '12:40', '14:30', '16:00', '16:10', '16:25', '16:40', '17:00', '17:10', '17:20', '17:30', '18:10', '19:30', '20:35', '21:15']
            }
        },
        weekend: {
            express: {
                route: '天南大新址公交站→南开大学新校西门→天塔地铁站→水上公园西路地铁站→天津图书馆→南开大学',
                price: '5元',
                firstBus: '6:30',
                lastBus: '21:15',
                interval: '20-30分钟'
            }
        },
        holiday: {
            direct: {
                route: '梨树园（津南校区）→一食堂（津南校区）→天塔地铁站→水上公园西路地铁站→天津图书馆→南开大学',
                price: '5元',
                times: ['8:00', '12:30', '18:00', '21:15']
            }
        }
    },
    balitaiToTeda: {
        weekday: {
            route: '西门二道岗西区公寓→游泳馆东侧停车场→泰达学院钟楼',
            price: '免费',
            times: [
                { departure: '6:25', location: '西门二道岗西区公寓前' },
                { departure: '6:30', location: '游泳馆东侧停车场' },
                { departure: '7:50', location: '西门二道岗西区公寓前' },
                { departure: '8:00', location: '游泳馆东侧停车场' },
                { departure: '10:00', location: '西门二道岗西区公寓前' },
                { departure: '10:10', location: '游泳馆东侧停车场' },
                { departure: '12:30', location: '西门二道岗西区公寓前' },
                { departure: '12:40', location: '游泳馆东侧停车场' },
                { departure: '17:20', location: '西门二道岗西区公寓前' },
                { departure: '17:30', location: '游泳馆东侧停车场' }
            ]
        },
        weekend: {
            route: '西门二道岗西区公寓→游泳馆东侧停车场→泰达学院钟楼',
            price: '免费',
            times: [
                { departure: '17:20', location: '西门二道岗西区公寓' },
                { departure: '17:30', location: '游泳馆东侧停车场' }
            ]
        }
    },
    tedaToBalitai: {
        weekday: {
            route: '泰达学院钟楼→八里台校区',
            price: '免费',
            times: ['6:30']
        },
        weekend: {
            route: '泰达学院钟楼→八里台校区',
            price: '免费',
            times: ['6:30']
        }
    },
    jinnanToTeda: {
        weekday: {
            route: '津南校区梨树园→泰达学院钟楼',
            price: '免费',
            times: ['6:30', '8:30', '12:30', '18:00']
        },
        weekend: {
            route: '津南校区梨树园→泰达学院钟楼',
            price: '免费',
            times: ['8:00', '11:00', '15:00', '18:00']
        }
    },
    tedaToJinnan: {
        weekday: {
            route: '泰达学院钟楼→津南校区梨树园',
            price: '免费',
            times: ['6:30', '8:30', '12:30', '17:00']
        },
        weekend: {
            route: '泰达学院钟楼→津南校区梨树园',
            price: '免费',
            times: ['8:00', '11:00', '15:00', '17:00']
        }
    }
};

// 校区名称映射
const campusNames = {
    balitai: '八里台校区',
    jinnan: '津南校区',
    teda: '泰达校区'
};

// DOM元素
let fromCampusSelect, toCampusSelect, queryBtn, exchangeIcon, routeTitle, scheduleType, currentDate;

// 初始化DOM元素
function initializeDOMElements() {
    fromCampusSelect = document.getElementById('fromCampus');
    toCampusSelect = document.getElementById('toCampus');
    queryBtn = document.getElementById('queryBtn');
    exchangeIcon = document.querySelector('.exchange-icon');
    routeTitle = document.getElementById('routeTitle');
    scheduleType = document.getElementById('scheduleType');
    currentDate = document.getElementById('currentDate');
}

// 当前选中的路线和日期类型
let currentRoute = 'balitaiToJinnan';
let currentScheduleType = 'weekday';

// 初始化页面
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
    
    // 初始化DOM元素
    initializeDOMElements();
    
    // 设置当前日期
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDate.textContent = today.toLocaleDateString('zh-CN', options);
    
    // 根据星期几设置默认的日期类型
    const dayOfWeek = today.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        currentScheduleType = 'weekend';
        scheduleType.textContent = '非工作日';
    }
    
    // 加载默认路线的时刻表
    updateSchedule();
    
    // 绑定事件监听器
    bindEventListeners();
});

// 绑定事件监听器
function bindEventListeners() {
    // 查询按钮点击事件
    queryBtn.addEventListener('click', function() {
        const fromCampus = fromCampusSelect.value;
        const toCampus = toCampusSelect.value;
        
        // 确保出发和目的校区不同
        if (fromCampus === toCampus) {
            showMessage('请选择不同的出发和目的校区', 'error');
            return;
        }
        
        // 更新路线
        currentRoute = `${fromCampus}To${toCampus.charAt(0).toUpperCase() + toCampus.slice(1)}`;
        updateSchedule();
        showMessage('已更新路线时刻表', 'success');
    });
    
    // 交换校区按钮点击事件
    exchangeIcon.addEventListener('click', function() {
        const fromCampus = fromCampusSelect.value;
        const toCampus = toCampusSelect.value;
        
        fromCampusSelect.value = toCampus;
        toCampusSelect.value = fromCampus;
        
        // 如果已选择了不同校区，自动更新时刻表
        if (fromCampus !== toCampus) {
            currentRoute = `${toCampus}To${fromCampus.charAt(0).toUpperCase() + fromCampus.slice(1)}`;
            updateSchedule();
        }
    });
    
    // 绑定标签点击事件
    bindTabEvents();
}

// 更新时刻表
function updateSchedule() {
    // 获取当前路线的时刻表数据
    const scheduleData = busSchedules[currentRoute];
    if (!scheduleData) return;
    
    // 更新路线标题
    const fromCampus = currentRoute.split('To')[0];
    const toCampus = currentRoute.split('To')[1].toLowerCase();
    routeTitle.textContent = `${campusNames[fromCampus]} → ${campusNames[toCampus]}`;
    
    // 更新所有日期类型的时刻表内容
    updateScheduleContent('weekday-schedule', scheduleData.weekday);
    updateScheduleContent('weekend-schedule', scheduleData.weekend);
    updateScheduleContent('holiday-schedule', scheduleData.holiday);
    
    // 显示所有可用的日期类型标签
    updateScheduleTabs(scheduleData);
}

// 更新时刻表内容
function updateScheduleContent(tableId, scheduleData) {
    const scheduleContainer = document.getElementById(tableId);
    if (!scheduleContainer) return;
    
    // 清空现有内容
    scheduleContainer.innerHTML = '';
    
    // 如果没有数据，显示提示信息
    if (!scheduleData) {
        scheduleContainer.innerHTML = '<p class="no-data">该日期类型暂无班车信息</p>';
        return;
    }
    
    // 处理不同的数据结构
    if (scheduleData.times && Array.isArray(scheduleData.times)) {
        // 简单的时间数组结构
        createSimpleSchedule(scheduleContainer, scheduleData);
    } else if (scheduleData.express || scheduleData.direct) {
        // 包含快线和点对点的复杂结构
        createComplexSchedule(scheduleContainer, scheduleData);
    } else if (scheduleData.route && scheduleData.times) {
        // 单一路线结构
        createSingleRouteSchedule(scheduleContainer, scheduleData);
    }
}

// 创建简单时刻表
function createSimpleSchedule(container, scheduleData) {
    const scheduleSection = document.createElement('div');
    scheduleSection.className = 'schedule-section';
    
    // 添加路线信息
    if (scheduleData.route) {
        const routeInfo = document.createElement('div');
        routeInfo.className = 'route-info';
        routeInfo.innerHTML = `
            <div class="route-path">${scheduleData.route}</div>
            <div class="route-price">票价：${scheduleData.price}</div>
        `;
        scheduleSection.appendChild(routeInfo);
    }
    
    // 检查是否需要显示上车地点
    const needLocation = scheduleData.times && 
                        Array.isArray(scheduleData.times) && 
                        scheduleData.times.length > 0 && 
                        typeof scheduleData.times[0] === 'object' && 
                        scheduleData.times[0].departure;
    
    // 创建时刻表
    const table = document.createElement('div');
    table.className = 'time-table';
    
    // 表头
    const tableHeader = document.createElement('div');
    tableHeader.className = 'table-header';
    
    if (needLocation) {
        tableHeader.innerHTML = `
            <div class="header-cell">发车时间</div>
            <div class="header-cell">上车地点</div>
            <div class="header-cell">备注</div>
        `;
    } else {
        tableHeader.innerHTML = `
            <div class="header-cell">发车时间</div>
            <div class="header-cell">备注</div>
        `;
    }
    
    table.appendChild(tableHeader);
    
    // 表格内容
    const tableBody = document.createElement('div');
    tableBody.className = 'table-body';
    
    // 检查是否有时间数据
    if (scheduleData.times && Array.isArray(scheduleData.times)) {
        // 检查是否是对象数组（包含departure和location）
        if (needLocation) {
            // 处理对象数组格式
            scheduleData.times.forEach((timeInfo, index) => {
                const row = document.createElement('div');
                row.className = 'table-row';
                
                // 判断是否为末班车
                const isLast = index === scheduleData.times.length - 1;
                const statusClass = isLast ? 'status-last' : 'status-available';
                const statusText = isLast ? '末班车' : '正常';
                
                row.innerHTML = `
                    <div class="cell time-cell">${timeInfo.departure}</div>
                    <div class="cell">${timeInfo.location}</div>
                    <div class="cell status-cell">
                        <span class="status ${statusClass}">${statusText}</span>
                    </div>
                `;
                
                tableBody.appendChild(row);
            });
        } else {
            // 处理简单字符串数组格式
            scheduleData.times.forEach((time, index) => {
                const row = document.createElement('div');
                row.className = 'table-row';
                
                // 判断是否为末班车
                const isLast = index === scheduleData.times.length - 1;
                const statusClass = isLast ? 'status-last' : 'status-available';
                const statusText = isLast ? '末班车' : '正常';
                
                row.innerHTML = `
                    <div class="cell time-cell">${time}</div>
                    <div class="cell status-cell">
                        <span class="status ${statusClass}">${statusText}</span>
                    </div>
                `;
                
                tableBody.appendChild(row);
            });
        }
    } else if (scheduleData.firstBus && scheduleData.lastBus && scheduleData.interval) {
        // 处理使用首末班车和间隔的数据结构
        const row = document.createElement('div');
        row.className = 'table-row';
        row.innerHTML = `
            <div class="cell time-cell">${scheduleData.firstBus} - ${scheduleData.lastBus}</div>
            <div class="cell status-cell">
                <span class="status status-available">发车间隔：${scheduleData.interval}</span>
            </div>
        `;
        tableBody.appendChild(row);
    } else {
        // 如果没有时间数据，显示提示信息
        const noDataRow = document.createElement('div');
        noDataRow.className = 'table-row';
        const colspan = needLocation ? 3 : 2;
        noDataRow.innerHTML = `
            <div class="cell" colspan="${colspan}">暂无班次信息</div>
        `;
        tableBody.appendChild(noDataRow);
    }
    
    table.appendChild(tableBody);
    scheduleSection.appendChild(table);
    container.appendChild(scheduleSection);
}

// 创建复杂时刻表（包含快线和点对点）
function createComplexSchedule(container, scheduleData) {
    // 创建快线时刻表
    if (scheduleData.express) {
        const expressSection = document.createElement('div');
        expressSection.className = 'schedule-section';
        
        const expressTitle = document.createElement('h4');
        expressTitle.className = 'route-type-title';
        expressTitle.textContent = '快线';
        expressSection.appendChild(expressTitle);
        
        createSimpleSchedule(expressSection, scheduleData.express);
        container.appendChild(expressSection);
    }
    
    // 创建点对点时刻表
    if (scheduleData.direct) {
        const directSection = document.createElement('div');
        directSection.className = 'schedule-section';
        
        const directTitle = document.createElement('h4');
        directTitle.className = 'route-type-title';
        directTitle.textContent = '点对点';
        directSection.appendChild(directTitle);
        
        createSimpleSchedule(directSection, scheduleData.direct);
        container.appendChild(directSection);
    }
}

// 创建单一路线时刻表
function createSingleRouteSchedule(container, scheduleData) {
    const scheduleSection = document.createElement('div');
    scheduleSection.className = 'schedule-section';
    
    // 添加路线信息
    const routeInfo = document.createElement('div');
    routeInfo.className = 'route-info';
    routeInfo.innerHTML = `
        <div class="route-path">${scheduleData.route}</div>
        <div class="route-price">票价：${scheduleData.price}</div>
    `;
    scheduleSection.appendChild(routeInfo);
    
    // 创建时刻表
    const table = document.createElement('div');
    table.className = 'time-table';
    
    // 表头
    const tableHeader = document.createElement('div');
    tableHeader.className = 'table-header';
    tableHeader.innerHTML = `
        <div class="header-cell">发车时间</div>
        <div class="header-cell">上车地点</div>
        <div class="header-cell">备注</div>
    `;
    table.appendChild(tableHeader);
    
    // 表格内容
    const tableBody = document.createElement('div');
    tableBody.className = 'table-body';
    
    // 检查是否有时间数据
    if (scheduleData.times && Array.isArray(scheduleData.times)) {
        scheduleData.times.forEach((timeInfo, index) => {
            const row = document.createElement('div');
            row.className = 'table-row';
            
            // 判断是否为末班车
            const isLast = index === scheduleData.times.length - 1;
            const statusClass = isLast ? 'status-last' : 'status-available';
            const statusText = isLast ? '末班车' : '正常';
            
            // 处理不同的时间数据格式
            let departureTime, location;
            if (typeof timeInfo === 'string') {
                departureTime = timeInfo;
                location = scheduleData.route.split('→')[0].trim();
            } else if (typeof timeInfo === 'object' && timeInfo !== null) {
                departureTime = timeInfo.departure || '';
                location = timeInfo.location || scheduleData.route.split('→')[0].trim();
            }
            
            row.innerHTML = `
                <div class="cell time-cell">${departureTime}</div>
                <div class="cell">${location}</div>
                <div class="cell status-cell">
                    <span class="status ${statusClass}">${statusText}</span>
                </div>
            `;
            
            tableBody.appendChild(row);
        });
    } else {
        // 如果没有时间数据，显示提示信息
        const noDataRow = document.createElement('div');
        noDataRow.className = 'table-row';
        noDataRow.innerHTML = `
            <div class="cell" colspan="3">暂无班次信息</div>
        `;
        tableBody.appendChild(noDataRow);
    }
    
    table.appendChild(tableBody);
    scheduleSection.appendChild(table);
    container.appendChild(scheduleSection);
}

// 更新日期类型标签显示状态
function updateScheduleTabs(scheduleData) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // 隐藏所有标签内容
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签的活动状态
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 根据当前日期类型显示对应的标签和内容
    if (currentScheduleType === 'weekday' && scheduleData.weekday) {
        const weekdayTab = document.querySelector('.tab-btn[data-type="weekday"]');
        const weekdayContent = document.getElementById('weekday-schedule');
        if (weekdayTab) weekdayTab.classList.add('active');
        if (weekdayContent) weekdayContent.classList.add('active');
    } else if (currentScheduleType === 'weekend' && scheduleData.weekend) {
        const weekendTab = document.querySelector('.tab-btn[data-type="weekend"]');
        const weekendContent = document.getElementById('weekend-schedule');
        if (weekendTab) weekendTab.classList.add('active');
        if (weekendContent) weekendContent.classList.add('active');
    } else if (currentScheduleType === 'holiday' && scheduleData.holiday) {
        const holidayTab = document.querySelector('.tab-btn[data-type="holiday"]');
        const holidayContent = document.getElementById('holiday-schedule');
        if (holidayTab) holidayTab.classList.add('active');
        if (holidayContent) holidayContent.classList.add('active');
    } else {
        // 如果当前日期类型没有数据，显示第一个有数据的日期类型
        if (scheduleData.weekday) {
            currentScheduleType = 'weekday';
            scheduleType.textContent = '工作日';
            const weekdayTab = document.querySelector('.tab-btn[data-type="weekday"]');
            const weekdayContent = document.getElementById('weekday-schedule');
            if (weekdayTab) weekdayTab.classList.add('active');
            if (weekdayContent) weekdayContent.classList.add('active');
        } else if (scheduleData.weekend) {
            currentScheduleType = 'weekend';
            scheduleType.textContent = '非工作日';
            const weekendTab = document.querySelector('.tab-btn[data-type="weekend"]');
            const weekendContent = document.getElementById('weekend-schedule');
            if (weekendTab) weekendTab.classList.add('active');
            if (weekendContent) weekendContent.classList.add('active');
        } else if (scheduleData.holiday) {
            currentScheduleType = 'holiday';
            scheduleType.textContent = '节假日';
            const holidayTab = document.querySelector('.tab-btn[data-type="holiday"]');
            const holidayContent = document.getElementById('holiday-schedule');
            if (holidayTab) holidayTab.classList.add('active');
            if (holidayContent) holidayContent.classList.add('active');
        }
    }
}

// 绑定标签点击事件
function bindTabEvents() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 获取点击的标签类型
            const tabType = this.getAttribute('data-type');
            
            // 确保当前路线已设置
            if (!currentRoute) {
                currentRoute = 'balitaiToJinnan';
            }
            
            const scheduleData = busSchedules[currentRoute];
            
            // 检查该类型是否有数据
            if (!scheduleData || !scheduleData[tabType]) {
                showMessage('该日期类型暂无班车信息', 'error');
                return;
            }
            
            // 更新活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 隐藏所有标签内容
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // 显示对应的标签内容
            const targetContent = document.getElementById(`${tabType}-schedule`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // 更新当前日期类型
            currentScheduleType = tabType;
            scheduleType.textContent = currentScheduleType === 'weekday' ? '工作日' : 
                                     currentScheduleType === 'weekend' ? '非工作日' : '节假日';
            
            // 更新时刻表内容
            updateScheduleContent(`${tabType}-schedule`, scheduleData[tabType]);
        });
    });
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    
    // 添加样式
    messageEl.style.position = 'fixed';
    messageEl.style.top = '20px';
    messageEl.style.right = '20px';
    messageEl.style.padding = '12px 20px';
    messageEl.style.borderRadius = '4px';
    messageEl.style.color = 'white';
    messageEl.style.zIndex = '1000';
    messageEl.style.opacity = '0';
    messageEl.style.transform = 'translateY(-20px)';
    messageEl.style.transition = 'all 0.3s ease';
    
    // 根据类型设置背景色
    switch (type) {
        case 'success':
            messageEl.style.backgroundColor = '#4caf50';
            break;
        case 'error':
            messageEl.style.backgroundColor = '#f44336';
            break;
        default:
            messageEl.style.backgroundColor = '#2196f3';
    }
    
    // 添加到页面
    document.body.appendChild(messageEl);
    
    // 显示动画
    setTimeout(() => {
        messageEl.style.opacity = '1';
        messageEl.style.transform = 'translateY(0)';
    }, 10);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}