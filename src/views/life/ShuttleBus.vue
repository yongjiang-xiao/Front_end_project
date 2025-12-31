<template>
  <div class="shuttle-bus">
    <!-- 消息提示 -->
    <transition name="message">
      <div v-if="message.show" class="message" :class="`message-${message.type}`">
        {{ message.text }}
      </div>
    </transition>
    
    <div class="container">
      <div class="page-header">
        <div class="breadcrumb">
          <router-link to="/life">生活服务</router-link>
          <span class="separator">/</span>
          <span class="current">校车查询</span>
        </div>
        <h1 class="page-title">校车查询</h1>
        <p class="page-description">查询南开大学三个校区之间的校车班次和时间安排</p>
      </div>

      <div class="shuttle-bus-container">
      <!-- 校区选择和路线查询 -->
      <div class="route-query-section">
        <div class="campus-selection">
          <h2>选择校区路线</h2>
          <div class="campus-selector">
            <div class="campus-from">
              <label for="fromCampus">出发校区</label>
              <select id="fromCampus" class="campus-select" v-model="fromCampus">
                <option value="balitai">八里台校区</option>
                <option value="jinnan">津南校区</option>
                <option value="teda">泰达校区</option>
              </select>
            </div>
            <div class="exchange-icon" @click="exchangeCampus">
              <i class="fas fa-arrow-right-arrow-left"></i>
            </div>
            <div class="campus-to">
              <label for="toCampus">目的校区</label>
              <select id="toCampus" class="campus-select" v-model="toCampus">
                <option value="jinnan">津南校区</option>
                <option value="balitai">八里台校区</option>
                <option value="teda">泰达校区</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary" @click="querySchedule">
            <i class="fas fa-search"></i> 查询班次
          </button>
        </div>

        <!-- 校车信息提示 -->
        <div class="bus-info-tips">
          <div class="tips-header">
            <i class="fas fa-info-circle"></i>
            <h3>校车服务提示</h3>
          </div>
          <div class="tips-content">
            <ul>
              <li>校车服务时间：6:00-21:30（不同路线时间不同）</li>
              <li>八里台校区与津南校区之间票价5元，其他路线免费</li>
              <li>八里台校区至泰达校区有两个上车地点：西门二道岗西区公寓前和游泳馆东侧停车场</li>
              <li>工作日、周末和节假日班次时间不同，请选择正确的日期类型</li>
              <li>非工作日八里台-津南快线发车间隔为20-30分钟</li>
              <li>校车可能会因天气或特殊情况调整，请留意实时通知</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 日期类型选择 -->
      <div class="schedule-type-section">
        <div class="schedule-tabs">
          <div 
            class="tab-btn" 
            :class="{ active: scheduleType === 'weekday' }" 
            @click="changeScheduleType('weekday')"
          >
            <i class="fas fa-calendar-day"></i>
            <span>工作日排班</span>
          </div>
          <div 
            class="tab-btn" 
            :class="{ active: scheduleType === 'weekend' }" 
            @click="changeScheduleType('weekend')"
          >
            <i class="fas fa-calendar-week"></i>
            <span>非工作日排班</span>
          </div>
          <div 
            class="tab-btn" 
            :class="{ active: scheduleType === 'holiday' }" 
            @click="changeScheduleType('holiday')"
          >
            <i class="fas fa-calendar-star"></i>
            <span>节假日排班</span>
          </div>
        </div>
      </div>

      <!-- 校车时刻表 -->
      <div class="schedule-section">
        <div class="schedule-header">
          <h2>{{ routeTitle }}</h2>
          <div class="schedule-info">
            <span class="schedule-type">{{ scheduleTypeText }}</span>
            <span class="schedule-date">{{ currentDateText }}</span>
          </div>
        </div>

        <div class="schedule-tabs-content">
          <!-- 时刻表内容 -->
          <div class="tab-content active">
            <div v-if="currentScheduleData">
              <!-- 复杂时刻表（包含快线和点对点） -->
              <div v-if="currentScheduleData.express || currentScheduleData.direct">
                <!-- 快线时刻表 -->
                <div v-if="currentScheduleData.express" class="schedule-subsection">
                  <h4 class="route-type-title">快线</h4>
                  <div class="route-info">
                    <div class="route-path">{{ currentScheduleData.express.route }}</div>
                    <div class="route-price">票价：{{ currentScheduleData.express.price }}</div>
                  </div>
                  <div class="time-table">
                    <div class="table-header">
                      <div class="header-cell">发车时间</div>
                      <div class="header-cell">备注</div>
                    </div>
                    <div class="table-body">
                      <div v-if="currentScheduleData.express.times && Array.isArray(currentScheduleData.express.times) && currentScheduleData.express.times.length > 0">
                        <div 
                          v-for="(time, index) in currentScheduleData.express.times" 
                          :key="index" 
                          class="table-row"
                        >
                          <div class="cell time-cell">{{ time }}</div>
                          <div class="cell status-cell">
                            <span class="status" :class="getStatusClass(index, currentScheduleData.express.times.length)">
                              {{ getStatusText(index, currentScheduleData.express.times.length) }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div v-else-if="currentScheduleData.express.firstBus && currentScheduleData.express.lastBus">
                        <div class="table-row">
                          <div class="cell time-cell">{{ currentScheduleData.express.firstBus }} - {{ currentScheduleData.express.lastBus }}</div>
                          <div class="cell status-cell">
                            <span class="status status-available">发车间隔：{{ currentScheduleData.express.interval }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 点对点时刻表 -->
                <div v-if="currentScheduleData.direct" class="schedule-subsection">
                  <h4 class="route-type-title">点对点</h4>
                  <div class="route-info">
                    <div class="route-path">{{ currentScheduleData.direct.route }}</div>
                    <div class="route-price">票价：{{ currentScheduleData.direct.price }}</div>
                  </div>
                  <div class="time-table">
                    <div class="table-header">
                      <div class="header-cell">发车时间</div>
                      <div class="header-cell">备注</div>
                    </div>
                    <div class="table-body">
                      <div 
                        v-for="(time, index) in currentScheduleData.direct.times" 
                        :key="index" 
                        class="table-row"
                      >
                        <div class="cell time-cell">{{ time }}</div>
                        <div class="cell status-cell">
                          <span class="status" :class="getStatusClass(index, currentScheduleData.direct.times.length)">
                            {{ getStatusText(index, currentScheduleData.direct.times.length) }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 单一路线时刻表 -->
              <div v-else class="schedule-subsection">
                <div class="route-info">
                  <div class="route-path">{{ currentScheduleData.route }}</div>
                  <div class="route-price">票价：{{ currentScheduleData.price }}</div>
                </div>
                <div class="time-table">
                  <div class="table-header">
                    <div v-if="currentScheduleData.times && Array.isArray(currentScheduleData.times) && currentScheduleData.times.length > 0 && needLocationColumn">
                      <div class="header-cell">发车时间</div>
                      <div class="header-cell">上车地点</div>
                    </div>
                    <div v-else class="header-cell">发车时间</div>
                    <div class="header-cell">备注</div>
                  </div>
                  <div class="table-body">
                    <div v-if="currentScheduleData.times && Array.isArray(currentScheduleData.times) && currentScheduleData.times.length > 0 && needLocationColumn">
                      <!-- 带地点信息的时刻表 -->
                      <div 
                        v-for="(timeInfo, index) in currentScheduleData.times" 
                        :key="index" 
                        class="table-row"
                      >
                        <div class="cell time-cell">{{ timeInfo.departure }}</div>
                        <div class="cell">{{ timeInfo.location }}</div>
                        <div class="cell status-cell">
                          <span class="status" :class="getStatusClass(index, currentScheduleData.times.length)">
                            {{ getStatusText(index, currentScheduleData.times.length) }}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="currentScheduleData.times && Array.isArray(currentScheduleData.times) && currentScheduleData.times.length > 0">
                      <!-- 普通时刻表 -->
                      <div 
                        v-for="(time, index) in currentScheduleData.times" 
                        :key="index" 
                        class="table-row"
                      >
                        <div class="cell time-cell">{{ time }}</div>
                        <div class="cell status-cell">
                          <span class="status" :class="getStatusClass(index, currentScheduleData.times.length)">
                            {{ getStatusText(index, currentScheduleData.times.length) }}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="currentScheduleData.firstBus && currentScheduleData.lastBus">
                      <!-- 间隔班次时刻表 -->
                      <div class="table-row">
                        <div class="cell time-cell">{{ currentScheduleData.firstBus }} - {{ currentScheduleData.lastBus }}</div>
                        <div class="cell status-cell">
                          <span class="status status-available">发车间隔：{{ currentScheduleData.interval }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="no-data">
              <p>该日期类型暂无班车信息</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import shuttleBusScript from '@/assets/js/ShuttleBus.js';

export default shuttleBusScript;
</script>

<style scoped src="@/assets/css/shuttle-bus.css"></style>