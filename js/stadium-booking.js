// 体育馆预约系统JavaScript

// 体育馆数据
const stadiumData = {
    jinnan: {
        name: '津南校区体育馆',
        openTime: '8:00',
        closeTime: '21:00',
        venues: {
            basketball: {
                name: '篮球馆',
                venues: [
                    { id: 'half1', name: '半篮1', price: 25 },
                    { id: 'half2', name: '半篮2', price: 25 }
                ]
            },
            volleyball: {
                name: '排球馆',
                venues: [
                    { id: 'vol1', name: '排1', price: 50 },
                    { id: 'vol2', name: '排2', price: 50 }
                ]
            },
            airVolleyball: {
                name: '气排球馆',
                venues: [
                    { id: 'air1', name: '气排球', price: 10 }
                ]
            },
            badminton: {
                name: '羽毛球馆',
                venues: [
                    { id: 'bad1', name: '羽1', price: 10 },
                    { id: 'bad2', name: '羽2', price: 10 },
                    { id: 'bad3', name: '羽3', price: 10 },
                    { id: 'bad4', name: '羽4', price: 10 },
                    { id: 'bad5', name: '羽5', price: 10 },
                    { id: 'bad6', name: '羽6', price: 10 },
                    { id: 'bad7', name: '羽7', price: 10 },
                    { id: 'bad8', name: '羽8', price: 10 },
                    { id: 'bad9', name: '羽9', price: 10 },
                    { id: 'bad10', name: '羽10', price: 10 },
                    { id: 'bad11', name: '羽11', price: 10 },
                    { id: 'bad12', name: '羽12', price: 10 },
                    { id: 'bad13', name: '羽13', price: 10 },
                    { id: 'bad14', name: '羽14', price: 10 }
                ]
            },
            dance: {
                name: '体育舞蹈教室',
                venues: [
                    { id: 'dance1', name: '舞蹈教室', price: 10 }
                ]
            }
        }
    },
    'balitai-old': {
        name: '八里台体育馆（老馆）',
        openTime: '6:30',
        closeTime: '21:00',
        venues: {
            volleyball: {
                name: '排球馆',
                venues: [
                    { id: 'vol1', name: '排1', price: 50 },
                    { id: 'vol2', name: '排2', price: 50 }
                ]
            },
            badminton: {
                name: '羽毛球馆',
                venues: [
                    { id: 'bad1', name: '羽1', price: 10 },
                    { id: 'bad2', name: '羽2', price: 10 },
                    { id: 'bad3', name: '羽3', price: 10 },
                    { id: 'bad4', name: '羽4', price: 10 },
                    { id: 'bad5', name: '羽5', price: 10 },
                    { id: 'bad6', name: '羽6', price: 10 }
                ]
            }
        }
    },
    'balitai-new': {
        name: '八里台体育中心（新馆）',
        openTime: '8:00',
        closeTime: '21:00',
        venues: {
            badminton: {
                name: '羽毛球馆',
                venues: [
                    { id: 'bad1', name: '羽1', price: 10 },
                    { id: 'bad2', name: '羽2', price: 10 },
                    { id: 'bad3', name: '羽3', price: 10 },
                    { id: 'bad4', name: '羽4', price: 10 },
                    { id: 'bad5', name: '羽5', price: 10 },
                    { id: 'bad6', name: '羽6', price: 10 },
                    { id: 'bad7', name: '羽7', price: 10 },
                    { id: 'bad8', name: '羽8', price: 10 },
                    { id: 'bad9', name: '羽9', price: 10 },
                    { id: 'bad10', name: '羽10', price: 10 },
                    { id: 'bad11', name: '羽11', price: 10 },
                    { id: 'bad12', name: '羽12', price: 10 },
                    { id: 'bad13', name: '羽13', price: 10 },
                    { id: 'bad14', name: '羽14', price: 10 }
                ]
            },
            airVolleyball: {
                name: '气排球馆',
                venues: [
                    { id: 'air1', name: '气排球1', price: 10 },
                    { id: 'air2', name: '气排球2', price: 10 },
                    { id: 'air3', name: '气排球3', price: 10 }
                ]
            },
            art: {
                name: '艺体室',
                venues: [
                    { id: 'art1', name: '艺体室', price: 10 }
                ]
            }
        }
    }
};

// 全局变量
let selectedStadium = null;
let selectedVenueType = null;
let selectedDate = null;
let selectedSlots = []; // 存储用户选择的时间段
let venueStatusData = {}; // 存储场地状态数据（空闲/已占用）

// 初始化场地状态数据
function initVenueStatusData() {
    // 为每个场馆类型初始化场地状态
    Object.keys(stadiumData).forEach(stadiumId => {
        venueStatusData[stadiumId] = {};
        Object.keys(stadiumData[stadiumId].venues).forEach(venueTypeId => {
            venueStatusData[stadiumId][venueTypeId] = {};
            const venues = stadiumData[stadiumId].venues[venueTypeId].venues;
            venues.forEach(venue => {
                venueStatusData[stadiumId][venueTypeId][venue.id] = {};
            });
        });
    });
}

// 生成随机场地状态（模拟已占用/空闲）
function generateRandomVenueStatus(stadiumId, venueTypeId, date) {
    if (!venueStatusData[stadiumId][venueTypeId][date]) {
        venueStatusData[stadiumId][venueTypeId][date] = {};
        const venues = stadiumData[stadiumId].venues[venueTypeId].venues;
        
        venues.forEach(venue => {
            venueStatusData[stadiumId][venueTypeId][date][venue.id] = {};
            // 为每个小时生成状态（随机占用一些时间段）
            const openHour = parseInt(stadiumData[stadiumId].openTime.split(':')[0]);
            const closeHour = parseInt(stadiumData[stadiumId].closeTime.split(':')[0]);
            
            for (let hour = openHour; hour < closeHour; hour++) {
                // 随机决定是否占用（30%概率被占用）
                venueStatusData[stadiumId][venueTypeId][date][venue.id][hour] = 
                    Math.random() < 0.3 ? 'occupied' : 'available';
            }
        });
    }
    return venueStatusData[stadiumId][venueTypeId][date];
}


// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化场地状态数据
    initVenueStatusData();
    
    // 初始化事件监听器
    initEventListeners();
});

// 初始化事件监听器
function initEventListeners() {
    // 体育馆选择
    document.querySelectorAll('.stadium-card').forEach(option => {
        option.addEventListener('click', function() {
            selectStadium(this.dataset.stadium);
        });
    });
    
    // 场馆类型选择
    document.addEventListener('click', function(e) {
        // 检查点击的是否是场馆类型卡片或其内部元素
        const venueCard = e.target.closest('.venue-type-card');
        if (venueCard) {
            selectVenueType(venueCard.dataset.venueType);
        }
        
        // 如果点击的是时间槽，处理时间槽点击
        const timeSlot = e.target.closest('.time-slot');
        if (timeSlot) {
            // 从时间槽的dataset中获取信息
            const venueId = timeSlot.dataset.venueId;
            const venueName = timeSlot.dataset.venueName;
            const hour = parseInt(timeSlot.dataset.hour);
            const price = parseInt(timeSlot.dataset.price);
            const status = timeSlot.dataset.status;
            
            console.log('Time slot clicked via delegation:', { venueId, venueName, hour, price, status });
            toggleTimeSlot(venueId, venueName, hour, price, status);
            return;
        }
    });
    
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
    
    // 预约表单提交
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitBooking();
    });
    
    // 模态框关闭按钮
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('successModal').classList.remove('active');
    });
    
    // 模态框确定按钮
    document.getElementById('confirmBtn').addEventListener('click', function() {
        document.getElementById('successModal').classList.remove('active');
    });
}

// 选择体育馆
function selectStadium(stadiumId) {
    selectedStadium = stadiumId;
    selectedVenueType = null;
    selectedVenue = null;
    
    // 更新体育馆选择UI
    document.querySelectorAll('.stadium-card').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`[data-stadium="${stadiumId}"]`).classList.add('active');
    
    // 显示场馆类型选择
    loadVenueTypes(stadiumId);
    
    // 重置其他步骤
    document.getElementById('venueSelection').style.display = 'none';
    document.getElementById('timeSlotSelection').style.display = 'none';
    document.getElementById('userInfoSection').style.display = 'none';
    
    // 清除之前的选择
    document.querySelectorAll('.venue-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // 更新时间矩阵显示
function updateTimeMatrixDisplay() {
    // 遍历所有时间槽元素，更新它们的选中状态
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        const venueId = slot.dataset.venueId;
        const hour = parseInt(slot.dataset.hour);
        
        // 检查这个时间段是否被选中
        const isSelected = selectedSlots.some(s => 
            s.venueId === venueId && s.hour === hour
        );
        
        // 更新样式
        if (isSelected) {
            slot.classList.add('selected');
        } else {
            slot.classList.remove('selected');
        }
    });
}

// 更新预约信息
    updateBookingInfo();
}

// 显示预约成功模态框（新版本，支持多时间段）
function showBookingSuccessModal(bookingInfo) {
    // 生成预约编号
    const bookingId = generateBookingId();
    
    // 格式化日期
    const date = new Date(bookingInfo.date);
    const dateStr = `${date.getMonth() + 1}月${date.getDate()}日`;
    
    // 生成时间段详情
    const slotsDetails = bookingInfo.slots.map(slot => {
        return `${slot.venueName}: ${slot.hour}:00-${slot.hour + 1}:00`;
    }).join('<br>');
    
    // 生成预约详情HTML
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约编号：</span>
            <span class="booking-detail-value">${bookingId}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">体育馆：</span>
            <span class="booking-detail-value">${bookingInfo.stadium}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">场馆类型：</span>
            <span class="booking-detail-value">${bookingInfo.venueType}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">日期：</span>
            <span class="booking-detail-value">${dateStr}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约时段：</span>
            <span class="booking-detail-value">${slotsDetails}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约人：</span>
            <span class="booking-detail-value">${bookingInfo.userName}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">联系电话：</span>
            <span class="booking-detail-value">${bookingInfo.userPhone}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">学号/工号：</span>
            <span class="booking-detail-value">${bookingInfo.userId}</span>
        </div>
        ${bookingInfo.remarks ? `
        <div class="booking-detail-item">
            <span class="booking-detail-label">备注：</span>
            <span class="booking-detail-value">${bookingInfo.remarks}</span>
        </div>
        ` : ''}
        <div class="booking-detail-item">
            <span class="booking-detail-label">总费用：</span>
            <span class="booking-detail-value">¥${bookingInfo.totalPrice}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约时间：</span>
            <span class="booking-detail-value">${bookingInfo.bookingTime}</span>
        </div>
    `;
    
    // 更新场地状态为已占用
    updateVenueStatusAfterBooking(bookingInfo);
    
    // 显示成功模态框
    document.getElementById('successModal').classList.add('active');
    
    // 重置预约状态
    resetBookingWithMatrix();
}

// 更新预约后的场地状态
function updateVenueStatusAfterBooking(bookingInfo) {
    // 获取当前选择的体育馆和场馆类型ID
    const stadiumId = Object.keys(stadiumData).find(key => 
        stadiumData[key].name === bookingInfo.stadium
    );
    
    const venueTypeId = Object.keys(stadiumData[stadiumId].venues).find(key => 
        stadiumData[stadiumId].venues[key].name === bookingInfo.venueType
    );
    
    // 确保场地状态数据存在
    if (!venueStatusData[stadiumId][venueTypeId][bookingInfo.date]) {
        venueStatusData[stadiumId][venueTypeId][bookingInfo.date] = {};
    }
    
    // 更新每个已预约时间段的状态为已占用
    bookingInfo.slots.forEach(slot => {
        venueStatusData[stadiumId][venueTypeId][bookingInfo.date][slot.venueId][slot.hour] = 'occupied';
    });
}

// 重置预约（新版本，支持时间矩阵）
function resetBookingWithMatrix() {
    selectedStadium = null;
    selectedVenueType = null;
    selectedDate = null;
    selectedSlots = [];
    
    // 重置UI
    document.querySelectorAll('.stadium-option').forEach(option => {
        option.classList.remove('active');
    });
    
    document.querySelectorAll('.venue-type-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // 隐藏所有选择区域
    document.getElementById('venueTypeSelection').style.display = 'none';
    document.getElementById('venueSelection').style.display = 'none';
    document.getElementById('bookingFormSection').style.display = 'none';
    
    // 重置表单
    document.getElementById('userName').value = '';
    document.getElementById('userPhone').value = '';
    document.getElementById('userId').value = '';
    document.getElementById('remarks').value = '';
    
    // 重置已选择时间段列表
    document.getElementById('selectedSlotsList').innerHTML = '';
    document.getElementById('totalPrice').textContent = '0';
}

// 加载场馆类型
function loadVenueTypes(stadiumId) {
    const stadium = stadiumData[stadiumId];
    const venueTypeOptions = document.getElementById('venueTypeOptions');
    venueTypeOptions.innerHTML = '';
    
    // 遍历场馆类型
    for (const [venueTypeId, venueType] of Object.entries(stadium.venues)) {
        const venueTypeCard = document.createElement('div');
        venueTypeCard.className = 'venue-type-card';
        venueTypeCard.dataset.venueType = venueTypeId;
        
        venueTypeCard.innerHTML = `
            <div class="venue-type-icon">${getVenueTypeIcon(venueTypeId)}</div>
            <div class="venue-type-name">${venueType.name}</div>
            <div class="venue-type-count">${venueType.venues.length}个场地</div>
        `;
        
        venueTypeOptions.appendChild(venueTypeCard);
    }
    
    // 显示场馆类型选择
    document.getElementById('venueTypeSelection').style.display = 'block';
}

// 获取场馆类型图标
function getVenueTypeIcon(venueTypeId) {
    const icons = {
        basketball: '🏀',
        volleyball: '🏐',
        airVolleyball: '🏐',
        badminton: '🏸',
        dance: '💃',
        art: '🎨'
    };
    return icons[venueTypeId] || '🏟️';
}

// 选择场馆类型
function selectVenueType(venueTypeId) {
    selectedVenueType = venueTypeId;
    selectedDate = null;
    selectedSlots = [];
    
    // 更新场馆类型选择UI
    document.querySelectorAll('.venue-type-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`.venue-type-card[data-venue-type="${venueTypeId}"]`).classList.add('active');
    
    // 显示场地选择区域
    document.getElementById('venueSelection').style.display = 'block';
    
    // 加载场地信息
    loadVenueInfo(selectedStadium, venueTypeId);
    
    // 加载日期选项和时间矩阵
    loadDateOptions();
    
    // 隐藏预约表单
    document.getElementById('bookingFormSection').style.display = 'none';
}

// 加载场地信息
function loadVenueInfo(stadiumId, venueTypeId) {
    const stadium = stadiumData[stadiumId];
    const venueType = stadium.venues[venueTypeId];
    const venueInfo = document.getElementById('venueInfo');
    
    venueInfo.innerHTML = `
        <h3>${venueType.name}</h3>
        <p>开放时间：${stadium.openTime} - ${stadium.closeTime}</p>
        <p>场地数量：${venueType.venues.length}个</p>
    `;
}

// 加载日期选项
function loadDateOptions() {
    const bookingDate = document.getElementById('bookingDate');
    bookingDate.innerHTML = '';
    
    // 生成未来4天的日期选项
    for (let i = 0; i < 4; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        
        const option = document.createElement('option');
        option.value = formatDate(date);
        option.textContent = formatDateChinese(date);
        
        if (i === 0) {
            option.selected = true;
            selectedDate = formatDate(date);
        }
        
        bookingDate.appendChild(option);
    }
    
    // 添加日期变化事件监听
    bookingDate.addEventListener('change', function() {
        selectedDate = this.value;
        selectedSlots = [];
        loadTimeMatrix();
        updateSelectedSlotsList();
    });
    
    // 加载时间矩阵
    loadTimeMatrix();
}

// 格式化日期为YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 格式化日期为中文显示
function formatDateChinese(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
        return '今天';
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return '明天';
    } else {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const weekDay = weekDays[date.getDay()];
        return `${month}月${day}日 ${weekDay}`;
    }
}

// 加载时间矩阵
function loadTimeMatrix() {
    if (!selectedStadium || !selectedVenueType || !selectedDate) return;
    
    const timeMatrix = document.getElementById('timeMatrix');
    timeMatrix.innerHTML = '';
    
    // 获取场地和状态数据
    const stadium = stadiumData[selectedStadium];
    const venueType = stadium.venues[selectedVenueType];
    const venues = venueType.venues;
    const venueStatus = generateRandomVenueStatus(selectedStadium, selectedVenueType, selectedDate);
    
    // 获取开放时间
    const openHour = parseInt(stadium.openTime.split(':')[0]);
    const closeHour = parseInt(stadium.closeTime.split(':')[0]);
    
    // 创建表头
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>时间</th>';
    
    venues.forEach(venue => {
        const th = document.createElement('th');
        th.textContent = venue.name;
        headerRow.appendChild(th);
    });
    
    timeMatrix.appendChild(headerRow);
    
    // 创建时间行
    for (let hour = openHour; hour < closeHour; hour++) {
        const row = document.createElement('tr');
        
        // 时间列
        const timeCell = document.createElement('td');
        timeCell.textContent = `${hour}:00-${hour+1}:00`;
        row.appendChild(timeCell);
        
        // 每个场地的时间格
        venues.forEach(venue => {
            const slotCell = document.createElement('td');
            const slotDiv = document.createElement('div');
            
            // 获取场地状态
            const status = venueStatus[venue.id][hour];
            slotDiv.className = `time-slot ${status}`;
            
            // 将信息存储在dataset中
            slotDiv.dataset.venueId = venue.id;
            slotDiv.dataset.venueName = venue.name;
            slotDiv.dataset.hour = hour;
            slotDiv.dataset.price = venue.price;
            slotDiv.dataset.status = status;
            
            // 检查是否已被用户选择
            const isSelected = selectedSlots.some(slot => 
                slot.venueId === venue.id && slot.hour === hour
            );
            
            if (isSelected) {
                slotDiv.classList.add('selected');
                slotDiv.textContent = '已选择';
            } else {
                slotDiv.textContent = `${venue.price}元`;
            }
            
            slotCell.appendChild(slotDiv);
            row.appendChild(slotCell);
        });
        
        timeMatrix.appendChild(row);
    }
}

// 切换时间段选择状态
function toggleTimeSlot(venueId, venueName, hour, price, status) {
    console.log('toggleTimeSlot called with:', { venueId, venueName, hour, price, status });
    
    if (status === 'occupied') {
        console.log('Slot is occupied, returning');
        return; // 已占用的时间段不能选择
    }
    
    console.log('Current selectedSlots:', selectedSlots);
    
    // 查找是否已选择该时间段
    const existingIndex = selectedSlots.findIndex(slot => 
        slot.venueId === venueId && slot.hour === hour
    );
    
    if (existingIndex >= 0) {
        // 如果已选择，则取消选择
        console.log('Removing existing selection at index:', existingIndex);
        selectedSlots.splice(existingIndex, 1);
    } else {
        // 如果未选择，则添加到选择列表
        console.log('Adding new selection');
        selectedSlots.push({
            venueId,
            venueName,
            hour,
            price,
            date: selectedDate
        });
    }
    
    console.log('Updated selectedSlots:', selectedSlots);
    
    // 更新时间矩阵显示
    loadTimeMatrix();
    
    // 更新已选择时间段列表
    updateSelectedSlotsList();
    
    // 更新预约摘要（包括预约信息确认部分）
    updateBookingSummary();
    
    // 如果有选择，显示预约表单
    if (selectedSlots.length > 0) {
        console.log('Showing booking form section');
        document.getElementById('bookingFormSection').style.display = 'block';
    } else {
        console.log('Hiding booking form section');
        document.getElementById('bookingFormSection').style.display = 'none';
    }
}

// 更新已选择时间段列表
function updateSelectedSlotsList() {
    const selectedSlotsList = document.getElementById('selectedSlotsList');
    const totalPriceElement = document.getElementById('totalPrice');
    
    selectedSlotsList.innerHTML = '';
    let totalPrice = 0;
    
    if (selectedSlots.length === 0) {
        selectedSlotsList.innerHTML = '<p>尚未选择任何时间段</p>';
        totalPriceElement.textContent = '0';
        return;
    }
    
    // 按场地和时间排序
    selectedSlots.sort((a, b) => {
        if (a.venueName !== b.venueName) {
            return a.venueName.localeCompare(b.venueName);
        }
        return a.hour - b.hour;
    });
    
    selectedSlots.forEach(slot => {
        const slotItem = document.createElement('div');
        slotItem.className = 'selected-slot-item';
        
        slotItem.innerHTML = `
            <div class="selected-slot-info">
                <div class="selected-slot-venue">${slot.venueName}</div>
                <div class="selected-slot-time">${formatDateChinese(new Date(slot.date))} ${slot.hour}:00-${slot.hour+1}:00</div>
            </div>
            <div class="selected-slot-price">${slot.price}元</div>
            <button class="remove-slot" data-venue-id="${slot.venueId}" data-hour="${slot.hour}">×</button>
        `;
        
        selectedSlotsList.appendChild(slotItem);
        totalPrice += slot.price;
    });
    
    totalPriceElement.textContent = totalPrice;
    
    // 添加移除按钮事件
    document.querySelectorAll('.remove-slot').forEach(button => {
        button.addEventListener('click', function() {
            const venueId = this.getAttribute('data-venue-id');
            const hour = parseInt(this.getAttribute('data-hour'));
            
            const index = selectedSlots.findIndex(slot => 
                slot.venueId === venueId && slot.hour === hour
            );
            
            if (index >= 0) {
                selectedSlots.splice(index, 1);
                loadTimeMatrix();
                updateSelectedSlotsList();
                updateBookingSummary();
                
                if (selectedSlots.length === 0) {
                    document.getElementById('bookingFormSection').style.display = 'none';
                }
            }
        });
    });
}

// 选择场地
function selectVenue(venueId) {
    selectedVenue = venueId;
    
    // 更新场地选择UI
    document.querySelectorAll('.venue-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`[data-venue="${venueId}"]`).classList.add('active');
    
    // 显示日期时间选择
    document.getElementById('timeSlotSelection').style.display = 'block';
    
    // 生成时间段
    if (selectedDate) {
        generateTimeSlots();
    }
    
    // 更新预约信息
    updateBookingInfo();
}

// 生成可选日期
function generateDateOptions() {
    const dateSelect = document.getElementById('dateSelect');
    dateSelect.innerHTML = '<option value="">请选择日期</option>';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 生成未来4天的日期选项
    for (let i = 0; i <= 4; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dateStr = date.toISOString().split('T')[0];
        const displayStr = `${date.getMonth() + 1}月${date.getDate()}日`;
        
        const option = document.createElement('option');
        option.value = dateStr;
        option.textContent = displayStr;
        
        dateSelect.appendChild(option);
    }
}

// 生成时间段
function generateTimeSlots() {
    if (!selectedStadium || !selectedVenueType || !selectedVenue || !selectedDate) {
        document.getElementById('timeSlotOptions').innerHTML = '<p>请先选择场地和日期</p>';
        return;
    }
    
    const stadium = stadiumData[selectedStadium];
    const openTime = stadium.openTime;
    const closeTime = stadium.closeTime;
    
    const timeSlotOptions = document.getElementById('timeSlotOptions');
    timeSlotOptions.innerHTML = '';
    
    // 生成时间段选项
    const openHour = parseInt(openTime.split(':')[0]);
    const closeHour = parseInt(closeTime.split(':')[0]);
    
    for (let hour = openHour; hour < closeHour; hour++) {
        const timeSlot = document.createElement('div');
        timeSlot.className = 'time-slot';
        timeSlot.dataset.time = `${hour}:00-${hour+1}:00`;
        
        timeSlot.innerHTML = `
            <div class="time">${hour}:00-${hour+1}:00</div>
        `;
        
        timeSlotOptions.appendChild(timeSlot);
    }
    
    // 添加时间段选择事件
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', function() {
            toggleTimeSlot(this);
        });
    });
}

// 此函数已被上面的 toggleTimeSlot 函数替代，删除重复函数
// 事件委托现在直接调用上面的函数

// 更新预约信息
function updateBookingInfo() {
    const bookingInfo = document.getElementById('bookingInfo');
    
    if (!selectedStadium) {
        bookingInfo.innerHTML = '<p>请选择体育馆</p>';
        return;
    }
    
    const stadium = stadiumData[selectedStadium];
    let infoHTML = `
        <div class="info-item">
            <span class="info-label">体育馆：</span>
            <span class="info-value">${stadium.name}</span>
        </div>
    `;
    
    if (selectedVenueType) {
        const venueType = stadium.venues[selectedVenueType];
        infoHTML += `
            <div class="info-item">
                <span class="info-label">场馆类型：</span>
                <span class="info-value">${venueType.name}</span>
            </div>
        `;
    }
    
    if (selectedDate) {
        const date = new Date(selectedDate);
        const dateStr = `${date.getMonth() + 1}月${date.getDate()}日`;
        infoHTML += `
            <div class="info-item">
                <span class="info-label">日期：</span>
                <span class="info-value">${dateStr}</span>
            </div>
        `;
    }
    
    if (selectedSlots.length > 0) {
        const totalHours = selectedSlots.length;
        let totalPrice = selectedSlots.reduce((sum, slot) => sum + slot.price, 0);
        
        // 按场地分组显示
        const slotsByVenue = {};
        selectedSlots.forEach(slot => {
            if (!slotsByVenue[slot.venueName]) {
                slotsByVenue[slot.venueName] = [];
            }
            slotsByVenue[slot.venueName].push(slot.hour);
        });
        
        infoHTML += `
            <div class="info-item">
                <span class="info-label">时段：</span>
                <span class="info-value">
                    ${Object.entries(slotsByVenue).map(([venueName, hours]) => 
                        `${venueName}: ${hours.map(h => `${h}:00-${h+1}:00`).join(', ')}`
                    ).join('<br>')}
                </span>
            </div>
            <div class="info-item">
                <span class="info-label">总计：</span>
                <span class="info-value">¥${totalPrice} (${totalHours}小时)</span>
            </div>
        `;
    }
    
    bookingInfo.innerHTML = infoHTML;
}

// 更新预约摘要（用于预约表单）
function updateBookingSummary() {
    console.log('updateBookingSummary called');
    try {
        // 更新预约信息显示
        updateBookingInfo();
        
        // 如果有选中的时间段，启用提交按钮
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.disabled = selectedSlots.length === 0;
        }
    } catch (error) {
        console.error('Error in updateBookingSummary:', error);
    }
}

// 更新预约信息确认部分
// 提交预约
function submitBooking() {
    // 验证是否完成所有必要选择
    if (!selectedStadium || !selectedVenueType) {
        alert('请完成场馆选择');
        return;
    }
    
    if (!selectedDate) {
        alert('请选择预约日期');
        return;
    }
    
    if (selectedSlots.length === 0) {
        alert('请选择预约时间段');
        return;
    }
    
    // 获取用户信息
    const userName = document.getElementById('userName').value.trim();
    const userPhone = document.getElementById('userPhone').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const remarks = document.getElementById('remarks').value.trim();
    
    // 验证用户信息
    if (!userName) {
        alert('请输入预约人姓名');
        return;
    }
    
    if (!userPhone) {
        alert('请输入联系电话');
        return;
    }
    
    if (!userId) {
        alert('请输入学号/工号');
        return;
    }
    
    // 计算总价格
    let totalPrice = 0;
    selectedSlots.forEach(slot => {
        totalPrice += slot.price;
    });
    
    // 创建预约信息对象
    const bookingInfo = {
        stadium: stadiumData[selectedStadium].name,
        venueType: stadiumData[selectedStadium].venues[selectedVenueType].name,
        date: selectedDate,
        slots: selectedSlots,
        totalPrice: totalPrice,
        userName: userName,
        userPhone: userPhone,
        userId: userId,
        remarks: remarks,
        bookingTime: new Date().toLocaleString()
    };
    
    // 显示预约成功模态框
    showBookingSuccessModal(bookingInfo);
}

// 生成预约编号
function generateBookingId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    
    return `NK${year}${month}${day}${hours}${minutes}${seconds}${random}`;
}

// 显示预约成功
function showBookingSuccess(bookingData) {
    // 格式化日期
    const date = new Date(bookingData.date);
    const dateStr = `${date.getMonth() + 1}月${date.getDate()}日`;
    
    // 生成预约详情HTML
    const bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约编号：</span>
            <span class="booking-detail-value">${bookingData.bookingId}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">体育馆：</span>
            <span class="booking-detail-value">${bookingData.stadium}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">场馆类型：</span>
            <span class="booking-detail-value">${bookingData.venueType}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">场地：</span>
            <span class="booking-detail-value">${bookingData.venue}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">日期：</span>
            <span class="booking-detail-value">${dateStr}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">时段：</span>
            <span class="booking-detail-value">${bookingData.timeSlots.join(', ')}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">预约人：</span>
            <span class="booking-detail-value">${bookingData.userInfo.name}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">联系电话：</span>
            <span class="booking-detail-value">${bookingData.userInfo.phone}</span>
        </div>
        <div class="booking-detail-item">
            <span class="booking-detail-label">费用：</span>
            <span class="booking-detail-value">¥${bookingData.totalPrice}</span>
        </div>
    `;
    
    // 显示成功模态框
    document.getElementById('successModal').classList.add('active');
    
    // 重置表单
    resetBooking();
}

// 重置预约
function resetBooking() {
    selectedStadium = null;
    selectedVenueType = null;
    selectedVenue = null;
    selectedDate = null;
    
    // 重置UI
    document.querySelectorAll('.stadium-option').forEach(option => {
        option.classList.remove('active');
    });
    
    document.querySelectorAll('.venue-type-card').forEach(card => {
        card.classList.remove('active');
    });
    
    document.querySelectorAll('.venue-option').forEach(option => {
        option.classList.remove('active');
    });
    
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    document.getElementById('venueTypeSelection').style.display = 'none';
    document.getElementById('venueSelection').style.display = 'none';
    document.getElementById('timeSlotSelection').style.display = 'none';
    document.getElementById('userInfoSection').style.display = 'none';
    
    // 重置表单
    document.getElementById('dateSelect').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('userPhone').value = '';
    document.getElementById('userId').value = '';
    document.getElementById('remarks').value = '';
    
    // 更新预约信息
    updateBookingInfo();
}