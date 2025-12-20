document.addEventListener("DOMContentLoaded", () => {
    // 1. 定义界面元素
    const ui = {
        level: document.getElementById('wind-level'),
        status: document.getElementById('wind-status'),
        tips: {
            weight: document.getElementById('tip-weight'),
            outfit: document.getElementById('tip-outfit'),
            travel: document.getElementById('tip-travel'),
            food: document.getElementById('tip-food'),
            hydrate: document.getElementById('tip-hydrate') // 新增补水建议元素
        },
        stats: {
            feels: document.getElementById('real-feels'),
            hum: document.getElementById('real-hum'),
            pcpn: document.getElementById('real-pcpn'),
            vis: document.getElementById('real-vis')
        }
    };
    // 2. 模拟数据（优化后更贴合津南场景）
    const MOCK_DATA = {
       now:{ windScale: "6",
        windDir: "西北风",
        feelsLike: "12",
        humidity: "30",
        precip: "0.0",
        vis: "15",
        temp: "14",
        text: "晴",
        obsTime: new Date().toISOString()},
         hourly: [
            { time: "现在", windScale: "6", temp: "14", text: "晴" },
            { time: "1小时后", windScale: "7", temp: "13", text: "晴" },
            { time: "2小时后", windScale: "6", temp: "12", text: "多云" },
            { time: "3小时后", windScale: "5", temp: "12", text: "多云" },
            { time: "4小时后", windScale: "4", temp: "11", text: "阴" },
            { time: "5小时后", windScale: "3", temp: "10", text: "阴" }],
            alert: {
            exists: true,
            title: "大风蓝色预警",
            desc: "未来24小时内可能出现6级以上大风，请师生注意防范"
        }
        
    };
    // 3. 获取天气图标
    function getWeatherIcon(text) {
        const iconMap = {
            "晴": "fas fa-sun",
            "多云": "fas fa-cloud-sun",
            "阴": "fas fa-cloud",
            "雨": "fas fa-cloud-rain",
            "雪": "fas fa-snowflake"
        };
        return iconMap[text] || "fas fa-cloud";
    }
    // 3. 渲染页面函数（优化建议逻辑）
    function renderWeather(data, isMock = false) {
        if (!ui.level) return;
        
        ui.level.innerText = data.windScale;
        ui.status.innerText = isMock ? `(模拟) 津南标准风速: ${data.windDir}` : `实时状态: ${data.windDir}`;
        
        // 详细指标
        const feelsLike = data.feelsLike || MOCK_DATA.feelsLike;
        const humidity = parseInt(data.humidity || MOCK_DATA.humidity);
        if(ui.stats.feels) ui.stats.feels.innerText = `${feelsLike}°C`;
        if(ui.stats.hum) ui.stats.hum.innerText = `${humidity}%`;
        
        // 核心优化：细化风力+湿度关联建议
        const windScale = parseInt(data.windScale || MOCK_DATA.windScale);
        // 体重建议
       if (windScale > 7) {
            ui.tips.weight.innerText = "60kg以下建议组队出行，随身携带防风绳固定；75-90kg注意重心稳定；90kg以上可担任防风锚点职责";
        } else if (windScale > 5) {
            ui.tips.weight.innerText = "75kg以下建议抱紧路边树干/栏杆，避免快速移动；穿防滑鞋防止被风拖拽";
        } else if (windScale > 3) {
            ui.tips.weight.innerText = "60kg以下走路时小步稳走，避免双手插兜；携带书本等重物增加下盘稳定性";
        } else {
            ui.tips.weight.innerText = "50kg以上安全无忧；轻体重者可正常活动，注意突然阵风";
        }
        // 穿衣建议（结合湿度）
        let outfitText = "外层建议穿防风冲锋衣（拉链拉至顶端），袖口魔术贴收紧；长发必须扎成紧实马尾或盘发，避免风中凌乱引发视线受阻";
        if (humidity > 60) {
            outfitText += "；内搭选择速干面料（如运动T恤），避免棉质衣物吸汗后增加风阻";
        } else if (humidity < 30) {
            outfitText += "；建议携带保湿喷雾和润唇膏，防风同时预防皮肤干裂";
        }
        if (windScale > 5) {
            outfitText += "；必备防风口罩（推荐N95级别），防止沙尘入鼻；可戴棒球帽并系紧下巴绳";
        }
        if (windScale > 7) {
            outfitText += "；紧急建议：携带一次性雨衣罩住背包，防止物品被风吹湿";
        }
        ui.tips.outfit.innerText = outfitText;
        // 出行建议
        if (windScale >= 9) {
            ui.tips.travel.innerText = "⚠️ 极端风力警告：非必要不外出！必须出行时沿建筑物背风侧快速移动，远离塔吊、广告牌和玻璃幕墙；禁止使用雨伞（可能被吹翻导致受伤）";
        } else if (windScale > 7) {
            ui.tips.travel.innerText = "🚫 禁止骑行！步行选择有遮挡的路线（如理科楼连廊）；过路口时注意侧风突袭，等待3个绿灯周期确保安全再通过";
        } else if (windScale > 5) {
            ui.tips.travel.innerText = "⚠️ 骑行危险：单车可能被吹偏车道，建议推行为主；路过图书馆门口时注意阵风漩涡，保持与行人距离";
        } else if (windScale > 3) {
            ui.tips.travel.innerText = "骑行需双手紧握车把，遇路口提前减速；女生避免穿长裙（可能被卷入车轮）";
        } else {
            ui.tips.travel.innerText = "适宜出行，建议随身携带轻便外套应对局部阵风；共享单车记得逆风停放并锁好";
        }
        // 补给建议
        if (windScale > 7) {
            ui.tips.food.innerText = "推荐：牛肉汤+烧饼组合（高热量抗寒）；备2-3块巧克力补充体力；保温杯装热水（风大时喝冷饮易引发肠胃不适）";
        } else if (windScale > 5) {
            ui.tips.food.innerText = "热汤面（加辣椒增强抗风能量）；建议多带一份糕点，防止风大延误就餐时间";
        } else if (windScale > 3) {
            ui.tips.food.innerText = "麻辣烫（温热食物提升体感温度）；搭配热豆浆效果更佳";
        } else {
            ui.tips.food.innerText = "正常就餐即可，可加一份烤红薯增强饱腹感；饭后建议喝温水暖身";
        }
        // 新增补水建议（根据湿度）
      if (ui.tips.hydrate) {
            if (humidity < 30) {
            ui.tips.hydrate.innerText = "💧 极度干燥警告：每小时需饮水200ml以上，建议携带500ml保温杯；可在宿舍放置加湿器（湿度调至40-50%）；睡前涂抹护手霜和面霜";
            } else if (humidity > 60) {
            ui.tips.hydrate.innerText = "💧 湿润提示：适量补水（每日1500ml即可），避免过量导致水肿；可喝红豆薏米水帮助祛湿；衣物建议选择透气材质";
            } else {
            ui.tips.hydrate.innerText = "💧 正常补水节奏：每次100-150ml，间隔30分钟；推荐饮用温白开或淡茶水，少喝含糖饮料";
            }
        }
        
        console.log(isMock ? "⚠️ API被拦截，已加载本地气象模型" : "✅ 成功挂载实时数据");
    }
    // 4. 发起请求（替换为API Key占位符，需自行填充有效Key）
    async function init() {
        const apiKey = "6bbab621dc324abe98c33b8dc857477e"; // 【必填】替换为和风天气开发者平台申请的有效Key
        const url = 'https://k96e4etd26.re.qweatherapi.com/v7/weather/now?location=101010100';
        const controller = new AbortController();
        try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-QW-Api-Key': '6bbab621dc324abe98c33b8dc857477e', // API Key单独放在请求头中
                        'Accept-Encoding': 'gzip, deflate' // 对应curl的--compressed（可选，fetch通常自动添加）
                    },
                    signal: controller.signal
                });
                
                const id = setTimeout(() => controller.abort(), 5000); // 超时时间延长至5秒
                
                if (!response.ok) throw new Error(`HTTP错误，状态码：${response.status}`);
                const result = await response.json();
                
                clearTimeout(id);
                if (result.code === "200") {
                    renderWeather(result.now, false);
                } else {
                    throw new Error(`API返回错误：${result.code}-${result.msg}`);
                }
        } catch (err) {
            console.error("天气数据获取失败：", err.message);
            renderWeather(MOCK_DATA, true);
        }
    }
    init();
});