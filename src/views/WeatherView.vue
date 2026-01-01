<template>
  <div class="weather-section">
    <div class="container">
      <div class="weather-header">
        <h2>津南风语者 <i class="fas fa-wind"></i></h2>
        <p>“在津南，没有一处风是无辜的”</p>
      </div>

      <div class="weather-card">
        <div class="radar-container">
          <div class="radar-circle"></div>
          <div class="radar-beam"></div>
        </div>

        <div class="wind-display">
          <i class="fas fa-wind wind-icon-animate"></i>
          <div>
            <div class="wind-main-num">{{ weather.windScale }}</div>
            <div class="wind-unit">当前风力 (级)</div>
          </div>
        </div>
        <h3>{{ statusText }}</h3>
      </div>

      <div class="survival-section">
        <h3><i class="fas fa-shield-alt"></i> 实时生存建议</h3>
        <div class="survival-grid">
          <div v-for="(tip, key) in survivalTips" :key="key" class="survival-item">
            <i :class="tip.icon"></i>
            <h4>{{ tip.title }}</h4>
            <p>{{ tip.content }}</p>
          </div>
        </div>

        <div class="nankai-fun-facts" style="margin-top: 40px; padding: 20px; background: rgba(0,0,0,0.2);border-radius: var(--radius-md);">
          <h4><i class="fas fa-lightbulb"></i> 津南生存冷知识</h4>
          <ul style="text-align: left; font-size: 0.9rem; line-height: 1.8; margin-top: 10px;">
            <li><b>理科图书馆门口：</b> 这里的风速通常比操场高出 2 个等级。</li>
            <li><b>单车停放：</b> 建议逆风停放，否则你的车可能会被风“自动解锁”并顺移 5 米。</li>
            <li><b>发型管理：</b> 在津南，最保值的理财产品是一瓶超强力发胶。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import '@/assets/css/weather.css'
import { ref, reactive, onMounted, computed } from 'vue';

// 1. 响应式数据状态
const weather = reactive({
  windScale: '--',
  windDir: '',
  humidity: 0,
  isMock: true
});

const statusText = computed(() => {
  if (weather.windScale === '--') return '正在获取卫星数据...';
  return weather.isMock ? `(模拟) 津南标准风速: ${weather.windDir}` : `实时状态: ${weather.windDir}`;
});

// 2. 模拟数据定义
const MOCK_DATA = {
  windScale: "6",
  windDir: "西北风",
  humidity: "30",
  feelsLike: "12"
};

// 3. 计算生存建议 (替代原有的 renderWeather 逻辑)
const survivalTips = computed(() => {
  const ws = parseInt(weather.windScale) || 0;
  const hum = parseInt(weather.humidity) || 0;
  const getOutfitContent = () => {
    // 基础文案
    let tips = ["外层建议穿防风冲锋衣（拉链拉至顶端），袖口魔术贴收紧", "长发必须扎成紧实马尾或盘发，避免风中凌乱引发视线受阻"];

    // 湿度逻辑
    if (hum > 60) {
      tips.push("内搭选择速干面料（如运动T恤），避免棉质衣物吸汗后增加风阻");
    } else if (hum < 30) {
      tips.push("建议携带保湿喷雾和润唇膏，防风同时预防皮肤干裂");
    }

    // 风力补充逻辑
    if (ws > 5) {
      tips.push("必备防风口罩（推荐N95级别），防止沙尘入鼻", "可戴棒球帽并系紧下巴绳");
    }
    if (ws > 7) {
      tips.push("紧急建议：携带一次性雨衣罩住背包，防止物品被风吹湿");
    }

    return tips.join("；");
  };
  return {
    weight: {
      title: '建议体重',
      icon: 'fas fa-weight-hanging',
      content: ws > 7 ? "60kg以下建议组队出行，随身携带防风绳固定；75-90kg注意重心稳定；90kg以上可担任防风锚点职责" : 
               ws > 5 ? "75kg以下建议抱紧路边树干/栏杆，避免快速移动；穿防滑鞋防止被风拖拽" :
               ws > 3 ? "60kg以下走路时小步稳走，避免双手插兜；携带书本等重物增加下盘稳定性":"50kg以上安全无忧；轻体重者可正常活动，注意突然阵风"
    },
    
    outfit: {
      title: '穿衣指数',
      icon: 'fas fa-tshirt',
      content: getOutfitContent()
    },
    travel: {
      title: '出行预警',
      icon: 'fas fa-bicycle',
      content: ws >= 9 ?"⚠️ 极端风力警告：非必要不外出！必须出行时沿建筑物背风侧快速移动，远离塔吊、广告牌和玻璃幕墙；禁止使用雨伞（可能被吹翻导致受伤）": 
               ws > 7 ? "🚫 禁止骑行！步行选择有遮挡的路线（如理科楼连廊）；过路口时注意侧风突袭，等待3个绿灯周期确保安全再通过" : 
               ws > 5 ? "⚠️ 骑行危险：单车可能被吹偏车道，建议推行为主；路过图书馆门口时注意阵风漩涡，保持与行人距离":
               ws > 3 ? "骑行需双手紧握车把，遇路口提前减速；女生避免穿长裙（可能被卷入车轮）":
               "适宜出行，建议随身携带轻便外套应对局部阵风；共享单车记得逆风停放并锁好"
    },
    food: {
      title: '补给建议',
      icon: 'fas fa-utensils',
      content: ws > 7 ? "推荐：牛肉汤+烧饼组合（高热量抗寒）；备2-3块巧克力补充体力；保温杯装热水（风大时喝冷饮易引发肠胃不适）" :
      ws > 5 ? "热汤面（加辣椒增强抗风能量）；建议多带一份糕点，防止风大延误就餐时间":
      ws > 3 ? "麻辣烫（温热食物提升体感温度）；搭配热豆浆效果更佳":"正常就餐即可，可加一份烤红薯增强饱腹感；饭后建议喝温水暖身"
    },
    hydrate: {
      title: '补水建议',
      icon: 'fas fa-water',
      content: hum < 30 ? "💧 极度干燥警告：每小时需饮水200ml以上，建议携带500ml保温杯；可在宿舍放置加湿器（湿度调至40-50%）；睡前涂抹护手霜和面霜" : 
      hum > 60 ?"💧 湿润提示：适量补水（每日1500ml即可），避免过量导致水肿；可喝红豆薏米水帮助祛湿；衣物建议选择透气材质":
      "💧 正常补水节奏：每次100-150ml，间隔30分钟；推荐饮用温白开或淡茶水，少喝含糖饮料"
    }
  };
});

// 4. API 请求逻辑
const fetchWeather = async () => {
  const url = 'https://k96e4etd26.re.qweatherapi.com/v7/weather/now?location=101010100';
  const apiKey = '6bbab621dc324abe98c33b8dc857477e';

  try {
    const response = await fetch(url, {
      headers: { 'X-QW-Api-Key': apiKey }
    });
    const result = await response.json();
    if (result.code === "200") {
      Object.assign(weather, { ...result.now, isMock: false });
    } else {
      throw new Error('API Error');
    }
  } catch (err) {
    console.error("加载模拟数据", err);
    Object.assign(weather, { ...MOCK_DATA, isMock: true });
  }
};

onMounted(() => {
  fetchWeather();
});
</script>

