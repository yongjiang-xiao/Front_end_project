export default {
  name: 'ShuttleBus',
  data() {
    return {
      // 校区选择
      fromCampus: 'balitai',
      toCampus: 'jinnan',
      
      // 日期类型
      scheduleType: 'weekday', // weekday, weekend, holiday
      
      // 当前日期
      currentDate: new Date(),
      
      // 校车时刻表数据
      busSchedules: {
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
          },
          holiday: {
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
            route: '泰达学院钟楼→游泳馆东侧停车场→西门二道岗西区公寓',
            price: '免费',
            times: [
              { departure: '7:00', location: '泰达学院钟楼' },
              { departure: '8:30', location: '泰达学院钟楼' },
              { departure: '10:30', location: '泰达学院钟楼' },
              { departure: '12:00', location: '泰达学院钟楼' },
              { departure: '13:30', location: '泰达学院钟楼' },
              { departure: '15:00', location: '泰达学院钟楼' },
              { departure: '16:30', location: '泰达学院钟楼' },
              { departure: '18:00', location: '泰达学院钟楼' },
              { departure: '19:30', location: '泰达学院钟楼' },
              { departure: '21:00', location: '泰达学院钟楼' }
            ]
          },
          weekend: {
            route: '泰达学院钟楼→游泳馆东侧停车场→西门二道岗西区公寓',
            price: '免费',
            times: [
              { departure: '8:30', location: '泰达学院钟楼' },
              { departure: '21:00', location: '泰达学院钟楼' }
            ]
          },
          holiday: {
            route: '泰达学院钟楼→游泳馆东侧停车场→西门二道岗西区公寓',
            price: '免费',
            times: [
              { departure: '8:30', location: '泰达学院钟楼' },
              { departure: '21:00', location: '泰达学院钟楼' }
            ]
          }
        },
        jinnanToTeda: {
          weekday: {
            route: '津南校区东门→泰达学院',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          },
          weekend: {
            route: '津南校区东门→泰达学院',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          },
          holiday: {
            route: '津南校区东门→泰达学院',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          }
        },
        tedaToJinnan: {
          weekday: {
            route: '泰达学院→津南校区东门',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          },
          weekend: {
            route: '泰达学院→津南校区东门',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          },
          holiday: {
            route: '泰达学院→津南校区东门',
            price: '免费',
            times: ['7:00', '12:30', '17:30']
          }
        }
      },
      
      // 校区名称映射
      campusNames: {
        balitai: '八里台校区',
        jinnan: '津南校区',
        teda: '泰达校区'
      },
      
      // 消息提示
      message: {
        show: false,
        text: '',
        type: 'info' // info, success, error
      }
    }
  },
  computed: {
    // 当前路线
    currentRoute() {
      return `${this.fromCampus}To${this.toCampus.charAt(0).toUpperCase() + this.toCampus.slice(1)}`;
    },
    
    // 路线标题
    routeTitle() {
      return `${this.campusNames[this.fromCampus]} → ${this.campusNames[this.toCampus]}`;
    },
    
    // 当前日期类型文本
    scheduleTypeText() {
      switch (this.scheduleType) {
        case 'weekday':
          return '工作日';
        case 'weekend':
          return '非工作日';
        case 'holiday':
          return '节假日';
        default:
          return '工作日';
      }
    },
    
    // 当前日期文本
    currentDateText() {
      const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
      return this.currentDate.toLocaleDateString('zh-CN', options);
    },
    
    // 当前时刻表数据
    currentScheduleData() {
      const routeData = this.busSchedules[this.currentRoute];
      if (!routeData) return null;
      
      // 默认返回第一个可用的时刻表类型（express优先于direct）
      return routeData[this.scheduleType]?.express || routeData[this.scheduleType]?.direct || routeData[this.scheduleType] || null;
    },
    
    // 判断是否需要显示地点列
    needLocationColumn() {
      const data = this.currentScheduleData;
      if (!data || !data.times) return false;
      
      // 检查times数组中的元素是否是包含departure属性的对象
      return data.times.length > 0 && typeof data.times[0] === 'object' && Object.prototype.hasOwnProperty.call(data.times[0], 'departure');
    }
  },
  mounted() {
    // 根据星期几设置默认的日期类型
    const dayOfWeek = this.currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      this.scheduleType = 'weekend';
    }
    
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
  },
  methods: {
    // 交换校区
    exchangeCampus() {
      const temp = this.fromCampus;
      this.fromCampus = this.toCampus;
      this.toCampus = temp;
    },
    
    // 查询班次
    querySchedule() {
      if (this.fromCampus === this.toCampus) {
        this.showMessage('请选择不同的出发和目的校区', 'error');
        return;
      }
      this.showMessage('已更新路线时刻表', 'success');
    },
    
    // 显示消息提示
    showMessage(text, type = 'info') {
      this.message.text = text;
      this.message.type = type;
      this.message.show = true;
      
      // 3秒后自动隐藏
      setTimeout(() => {
        this.message.show = false;
      }, 3000);
    },
    
    // 改变日期类型
    changeScheduleType(type) {
      this.scheduleType = type;
    },
    
    // 获取状态样式类
    getStatusClass(index, total) {
      if (index === total - 1) {
        return 'status-last';
      }
      return 'status-available';
    },
    
    // 获取状态文本
    getStatusText(index, total) {
      if (index === total - 1) {
        return '末班车';
      }
      return '正常';
    }
  }
}