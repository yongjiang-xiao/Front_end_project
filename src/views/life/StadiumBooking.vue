<template>
  <div class="main-content">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">体育馆预约</h1>
        <p class="page-description">预约南开大学各校区体育馆场地</p>
      </div>

      <div class="stadium-booking-container">
        <!-- 1) 体育馆选择 -->
        <div class="stadium-selection">
          <h2>选择体育馆</h2>
          <div class="stadium-options">
            <div
              v-for="(s, stadiumId) in stadiumData"
              :key="stadiumId"
              class="stadium-card"
              :class="{ active: selectedStadiumId === stadiumId }"
              @click="selectStadium(stadiumId)"
            >
              <div class="stadium-icon">
                <i class="fas fa-basketball-ball"></i>
              </div>
              <h3>{{ s.name }}</h3>
              <p>开放时间：{{ s.openTime }} - {{ s.closeTime }}</p>
            </div>
          </div>
        </div>

        <!-- 2) 场馆类型选择 -->
        <div v-if="selectedStadiumId" class="venue-type-selection">
          <h2>选择场馆类型</h2>
          <div class="venue-type-options">
            <div
              v-for="(vt, venueTypeId) in venueTypesOfSelectedStadium"
              :key="venueTypeId"
              class="venue-type-card"
              :class="{ active: selectedVenueTypeId === venueTypeId }"
              @click="selectVenueType(venueTypeId)"
            >
              <h3>{{ vt.name }}</h3>
              <p>可预约场地：{{ vt.venues.length }} 个</p>
            </div>
          </div>
        </div>

        <!-- 3) 时间选择 -->
        <div v-if="selectedVenueTypeId" class="venue-selection">
          <h2>选择场地和时间</h2>

          <div class="date-selector">
            <label>选择日期：</label>
            <select v-model="selectedDate" @change="onDateChange">
              <option v-for="d in dateOptions" :key="d.value" :value="d.value">
                {{ d.label }}（{{ d.value }}）
              </option>
            </select>
          </div>

          <div class="time-matrix-container">
            <table class="time-matrix">
              <thead>
                <tr>
                  <th>时间</th>
                  <th v-for="v in venuesOfSelectedType" :key="v.id">{{ v.name }}</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="hour in hoursRange" :key="hour">
                  <td>{{ hour }}:00-{{ hour + 1 }}:00</td>

                  <td v-for="v in venuesOfSelectedType" :key="v.id">
                    <div
                      class="time-slot"
                      :class="slotClass(v.id, hour)"
                      @click="toggleSlot(v, hour)"
                    >
                      <template v-if="isSelected(v.id, hour)">已选择</template>
                      <template v-else>{{ v.price }}元</template>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="legend">
            <div class="legend-item">
              <div class="legend-color available"></div><span>空闲</span>
            </div>
            <div class="legend-item">
              <div class="legend-color occupied"></div><span>已占用</span>
            </div>
            <div class="legend-item">
              <div class="legend-color selected"></div><span>已选择</span>
            </div>
          </div>
        </div>

        <!-- 4) 预约表单 -->
        <div v-if="selectedSlots.length" class="booking-form">
          <h2>预约信息</h2>

          <div class="selected-slots-info">
            <h3>已选择的时间段</h3>

            <div>
              <div v-for="(group, idx) in groupedSlots" :key="idx" class="slot-item">
                <strong>{{ group.venueName }}</strong>：
                <span>{{ group.hoursText }}</span>
              </div>
            </div>

            <div class="total-price">
              <span>总价格：</span>
              <span>{{ totalPrice }}</span> 元
            </div>
          </div>

          <form @submit.prevent="submitBooking">
            <div class="form-row">
              <div class="form-group">
                <label>预约人姓名</label>
                <input v-model.trim="userForm.userName" required placeholder="请输入您的姓名" />
              </div>
              <div class="form-group">
                <label>联系电话</label>
                <input v-model.trim="userForm.userPhone" required placeholder="请输入您的联系电话" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>学号/工号</label>
                <input v-model.trim="userForm.userId" required placeholder="请输入您的学号/工号" />
              </div>
            </div>

            <div class="form-group">
              <label>备注</label>
              <textarea v-model.trim="userForm.remarks" rows="3" placeholder="如有特殊需求请在此说明"></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" @click="resetAll">
                <i class="fas fa-redo"></i> 重置
              </button>
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-check"></i> 确认预约
              </button>
            </div>
          </form>
        </div>

        <!-- 预约须知 -->
        <div class="booking-notice">
          <h2>预约须知</h2>
          <div class="notice-content">
            <ul>
              <li>预约系统仅提供未来四天内的场馆预约服务</li>
              <li>预约成功后，请在预约时间开始前15分钟到达场馆</li>
              <li>如需取消预约，请提前2小时联系场馆管理员</li>
              <li>请遵守场馆使用规定，爱护场馆设施</li>
              <li>逾期未使用且未取消的预约将被记录，可能影响后续预约</li>
              <li>场馆开放时间可能因特殊情况调整，请留意通知</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 成功模态框 -->
    <div class="booking-modal-overlay" :class="{ active: showModal }">
      <div class="booking-modal">
        <div class="modal-header">
          <h3>预约成功</h3>
          <button class="modal-close" @click="showModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <p>您已成功预约体育馆场地！</p>

          <div class="booking-details">
            <div class="booking-detail-item">
              <span class="booking-detail-label">体育馆：</span>
              <span class="booking-detail-value">{{ bookingResult.stadiumName }}</span>
            </div>
            <div class="booking-detail-item">
              <span class="booking-detail-label">类型：</span>
              <span class="booking-detail-value">{{ bookingResult.venueTypeName }}</span>
            </div>
            <div class="booking-detail-item">
              <span class="booking-detail-label">日期：</span>
              <span class="booking-detail-value">{{ bookingResult.date }}</span>
            </div>
            <div class="booking-detail-item">
              <span class="booking-detail-label">总价：</span>
              <span class="booking-detail-value">¥{{ bookingResult.totalPrice }}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary" @click="showModal = false">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stadiumData } from "@/assets/js/stadiumData";

export default {
  name: "StadiumBooking",
  data() {
    return {
      stadiumData,

      selectedStadiumId: null,
      selectedVenueTypeId: null,
      selectedDate: null,

      // key: `${stadiumId}__${venueTypeId}__${date}` -> { [venueId]: { [hour]: 'occupied'|'available' } }
      statusCache: {},

      selectedSlots: [], // {venueId, venueName, hour, price}
      userForm: {
        userName: "",
        userPhone: "",
        userId: "",
        remarks: "",
      },

      showModal: false,
      bookingResult: {
        stadiumName: "",
        venueTypeName: "",
        date: "",
        totalPrice: 0,
      },
    };
  },
  computed: {
    venueTypesOfSelectedStadium() {
      if (!this.selectedStadiumId) return {};
      return this.stadiumData[this.selectedStadiumId].venues || {};
    },
    venuesOfSelectedType() {
      if (!this.selectedStadiumId || !this.selectedVenueTypeId) return [];
      return this.stadiumData[this.selectedStadiumId].venues[this.selectedVenueTypeId].venues || [];
    },
    hoursRange() {
      if (!this.selectedStadiumId) return [];
      const s = this.stadiumData[this.selectedStadiumId];
      const openHour = parseInt(s.openTime.split(":")[0], 10);
      const closeHour = parseInt(s.closeTime.split(":")[0], 10);
      const arr = [];
      for (let h = openHour; h < closeHour; h++) arr.push(h);
      return arr;
    },
    dateOptions() {
      // 未来四天（含今天）——你原逻辑是“未来四天内”，这里给你 4 个选项
      const options = [];
      const today = new Date();
      for (let i = 0; i < 4; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const value = this.formatDate(d);
        options.push({ value, label: i === 0 ? "今天" : i === 1 ? "明天" : this.formatDateChinese(d) });
      }
      return options;
    },
    totalPrice() {
      return this.selectedSlots.reduce((sum, s) => sum + (Number(s.price) || 0), 0);
    },
    groupedSlots() {
      const map = new Map();
      for (const s of this.selectedSlots) {
        const key = s.venueName;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s.hour);
      }
      return Array.from(map.entries()).map(([venueName, hours]) => {
        hours.sort((a, b) => a - b);
        return {
          venueName,
          hoursText: hours.map((h) => `${h}:00-${h + 1}:00`).join(", "),
        };
      });
    },
  },
  methods: {
    selectStadium(stadiumId) {
      this.selectedStadiumId = stadiumId;
      this.selectedVenueTypeId = null;
      this.selectedSlots = [];
      this.userForm = { userName: "", userPhone: "", userId: "", remarks: "" };

      // 默认选第一个日期
      this.selectedDate = this.dateOptions[0]?.value || null;
    },
    selectVenueType(venueTypeId) {
      this.selectedVenueTypeId = venueTypeId;
      this.selectedSlots = [];
      this.ensureStatusGenerated();
    },
    onDateChange() {
      this.selectedSlots = [];
      this.ensureStatusGenerated();
    },

    // 生成/缓存随机占用
    ensureStatusGenerated() {
      if (!this.selectedStadiumId || !this.selectedVenueTypeId || !this.selectedDate) return;

      const cacheKey = `${this.selectedStadiumId}__${this.selectedVenueTypeId}__${this.selectedDate}`;
      if (this.statusCache[cacheKey]) return;

      const s = this.stadiumData[this.selectedStadiumId];
      const venues = s.venues[this.selectedVenueTypeId].venues;
      const openHour = parseInt(s.openTime.split(":")[0], 10);
      const closeHour = parseInt(s.closeTime.split(":")[0], 10);

      const dayStatus = {};
      for (const v of venues) {
        dayStatus[v.id] = {};
        for (let h = openHour; h < closeHour; h++) {
          dayStatus[v.id][h] = Math.random() < 0.3 ? "occupied" : "available";
        }
      }
      this.statusCache[cacheKey] = dayStatus;
    },

    getStatus(venueId, hour) {
      const cacheKey = `${this.selectedStadiumId}__${this.selectedVenueTypeId}__${this.selectedDate}`;
      const dayStatus = this.statusCache[cacheKey];
      if (!dayStatus) return "available";
      return dayStatus?.[venueId]?.[hour] || "available";
    },

    isSelected(venueId, hour) {
      return this.selectedSlots.some((s) => s.venueId === venueId && s.hour === hour);
    },

    slotClass(venueId, hour) {
      const base = this.getStatus(venueId, hour);
      return {
        [base]: true,
        selected: this.isSelected(venueId, hour),
      };
    },

    toggleSlot(venue, hour) {
      this.ensureStatusGenerated();
      const status = this.getStatus(venue.id, hour);
      if (status === "occupied") return;

      const idx = this.selectedSlots.findIndex((s) => s.venueId === venue.id && s.hour === hour);
      if (idx >= 0) {
        this.selectedSlots.splice(idx, 1);
      } else {
        this.selectedSlots.push({
          venueId: venue.id,
          venueName: venue.name,
          hour,
          price: venue.price,
        });
      }
    },

    submitBooking() {
      if (!this.selectedStadiumId || !this.selectedVenueTypeId || !this.selectedDate) return;
      if (!this.selectedSlots.length) return;

      const { userName, userPhone, userId } = this.userForm;
      if (!userName || !userPhone || !userId) return;

      this.bookingResult = {
        stadiumName: this.stadiumData[this.selectedStadiumId].name,
        venueTypeName: this.stadiumData[this.selectedStadiumId].venues[this.selectedVenueTypeId].name,
        date: this.selectedDate,
        totalPrice: this.totalPrice,
      };
      this.showModal = true;
    },

    resetAll() {
      this.selectedStadiumId = null;
      this.selectedVenueTypeId = null;
      this.selectedDate = null;
      this.selectedSlots = [];
      this.userForm = { userName: "", userPhone: "", userId: "", remarks: "" };
      this.showModal = false;
    },

    formatDate(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    },
    formatDateChinese(date) {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      return `${month}月${day}日 ${weekDays[date.getDay()]}`;
    },
  },
};
</script>

<!-- 样式：你可以继续用原来的 css/stadium-booking.css + style.css
     如果你已经在 main.js 全局引入了，就不用在这里写 -->
<style src="@/assets/css/stadium-booking.css"></style>

