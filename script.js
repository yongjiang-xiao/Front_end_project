// ===== 开关：默认不允许拖拽，避免坐标被误改 =====
const EDIT_MODE_DRAG =  false;  // 想拖拽调坐标再改 true
const DEBUG_SHOW_HOTSPOTS = false;
if (DEBUG_SHOW_HOTSPOTS) document.body.classList.add("debug");

// ========== 1. 建筑数据（你给的 1–18 坐标全部原样保留） ==========
const HOTSPOT_DATA = [
 {
    id: 72,
    title: "主体育场",
    description: "位于南开大学津南校区体育部区域，是校园内主要的田径及大型体育活动场地之一。该体育场包括一个带看台的400米标准跑道和足球场，供校学生体质测试、田径比赛、足球赛、校运会等使用。",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 55.05, top: 28.93, width: 3.5, height: 3
  },
  {
    id: 71,
    title: "学生活动中心",
    description: "南开大学学生活动中心 通常指校内专为学生组织社团活动、文化交流、会议及各类文体活动的场所，具有丰富的校园生活功能。",
    images: [
      "assets/71.jpg",
      
    ],
    left: 58.28, top: 38.87, width: 3.5, height: 3
  },
  {
    id: 70,
    title: "东园",
    description: "一个公园，中间有个湖",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 63.66, top: 39.35, width: 3.5, height: 3
  },
  {
    id: 69,
    title: "学院组团",
    description: "许多学院楼的位置",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 65.09, top: 46.14, width: 3.5, height: 3
  },
  {
    id: 68,
    title: "学生四食堂",
    description: "师生用餐的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 63.12, top: 52.2, width: 3.5, height: 3
  },
  {
    id: 67,
    title: "学生宿舍",
    description: "学生休息的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 67.96, top: 58.02, width: 3.5, height: 3
  },
  {
    id: 66,
    title: "体育馆",
    description: "南开大学体育馆是南开大学体育部管理下的重要室内体育场馆之一，用于体育教学、日常运动训练、比赛和各类校园活动。",
    images: [
      "assets/66.jpg",
      
    ],
    left: 49.31, top: 29.67, width: 3.5, height: 3
  },
  {
    id: 65,
    title: "基础实验楼",
    description: "学生做实验的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 52.36, top: 35, width: 3.5, height: 3
  },
  {
    id: 64,
    title: "综合实验楼",
    description: "南开大学综合实验楼 是南开大学校园内用于科学实验教学与科研的重要实验建筑之一。它在校园实验资源与科研活动体系中承担着关键角色。",
    images: [
      "assets/64.jpg",
      
    ],
    left: 53.26, top: 42.27, width: 3.5, height: 3
  },
  {
    id: 63,
    title: "公共教学楼",
    description: "南开大学公共教学楼 是南开大学校园内主要的教学活动场所之一，承担大型公共课程、课堂教学、讲座活动等教学功能。南开大学在多个校区均设有教学楼，但“公共教学楼”通常指位于津南校区的主要综合教学建筑群。",
    images: [
      "assets/62.jpg",
      
    ],
    left: 45.91, top: 37.42, width: 3.5, height: 3
  },
  {
    id: 62,
    title: "公共教学楼",
    description: "南开大学公共教学楼 是南开大学校园内主要的教学活动场所之一，承担大型公共课程、课堂教学、讲座活动等教学功能。南开大学在多个校区均设有教学楼，但“公共教学楼”通常指位于津南校区的主要综合教学建筑群。",
    images: [
      "assets/62.jpg",
     
    ],
    left: 45.91, top: 42.02, width: 3.5, height: 3
  },
  {
    id: 59,
    title: "周恩来总理像",
    description: "周恩来总理的雕像",
    images: [
      "assets/59.jpg",
      
    ],
    left: 49.49, top: 54.14, width: 3.5, height: 3
  },
  {
    id: 61,
    title: "图书馆",
    description: "南开大学津南校区图书馆是南开大学图书馆体系中的中心馆，于津南校区建设阶段同步建设并于2015 年投入使用，是新校区核心学术与学习空间。 
南开大学图书馆


📌 建筑与规模

建筑面积约 46 500 平方米，地上共有多层，设计庄重大气、现代感强。 
南开大学图书馆

是南开大学图书馆整体服务格局中最主要的馆舍之一，与八里台校区的逸夫馆等共同形成“两地四馆”模式。 
信息公开网

📌 功能定位

提供阅览、借阅、电子资源访问等综合图书馆服务；

设有研读空间、自习区、多人研讨室和专题功能区等；

服务津南校区的教学和科研需求，同时也是学生学习与学术交流的重要空间。 
南开大学图书馆",
    images: [
      "assets/61.webp",
      
    ],
    left: 49.67, top: 46.87, width: 3.5, height: 3
  },
  {
    id: 60,
    title: "综合业务楼（东楼）",
    description: "师生处理各种业务的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 54.15, top: 50.02, width: 3.5, height: 3
  },
  {
    id: 58,
    title: "综合业务楼（西楼）",
    description: "师生处理各种业务的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 45.37, top: 50.5, width: 3.5, height: 3
  },
  {
    id: 57,
    title: "陶园",
    description: "一块绿化景观",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 57.74, top: 59.23, width: 3.5, height: 3
  },
  {
    id: 56,
    title: "铸园",
    description: "一块绿化景观，内有一块“我是爱南开的”纪念碑",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 40.35, top: 58.75, width: 3.5, height: 3
  },
  {
    id: 55,
    title: "文科学生宿舍（研究生）",
    description: "学生们休息的地方。",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 41.43,
    top: 26.52,
    width: 3.5,
    height: 3
  },
 
 
 
 {
  id: 1,
  title: "1：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 7.9,
  top: 48.8,
  width: 4,
  height: 5
},
{
  id: 2,
  title: "2：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 11.4,
  top: 45.6,
  width: 3.6,
  height: 3.6
},
{
  id: 3,
  title: "3：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 14,
  top: 43,
  width: 4,
  height: 3
},
 
 {
  id: 4,
  title: "4：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 15,
  top: 39.1,
  width: 3,
  height: 3
},
{
  id: 5,
  title: "5：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 12.2,
  top: 50,
  width: 4,
  height: 5.5
},


  {
  id: 6,
  title: "6：动物中心",
  description: `
<p> 
  南开大学津南校区实验动物中心建筑面积5500平方米，自2014年9月主体结构封顶以来，
经过屏障设施建设、实验室硬件建设及专业技术人员队伍建设，截至2019年初获批
天津市实验动物生产许可证、实验动物使用许可证。
</p>

<p>
现已基本能够满足承接全校各学院的实验动物饲养需求。
中心可容纳108笼普通豚鼠/兔、20头犬/猪，864笼SPF大鼠，
8160笼SPF小鼠的日常饲养及实验需求。
</p>

<p>
中心同时设有动物胚胎实验区、动物细胞实验区，并配备专业技术人员，
可提供胚胎净化、保种等多项技术服务。
</p>

<p>
中心屏障设施实行自动化、智能化监控，对包括温度、湿度、压力差、
净化水、净化空气、送风、排风、照明、紫外灯等参数指标实行在线监控，
配备三级智能门禁、安防系统，保证实验动物的生活环境稳定，
并给予动物人文关怀，注重实验动物福利，
保障动物实验的稳定性、准确性、科学性。
</p>

<p>
实验动物中心是一所综合性大学重要的公共技术服务平台，
是保障学校教学和科研全面均衡发展的重要支持机构。
我校医学、药学、生命科学、化学等相关学科发展迅猛，
教学和科研中越来越重视对实验动物的应用，
本中心能大力支持医学院、药学院、生命科学学院、
化学院和药物化学生物学国家重点实验室等相关学院
教学科研的持续发展。
</p>

<img src="assets/6 Laboratory Animal Center.jpg" alt="实验动物中心">
`,
  left: 15.19,
  top: 53.1,
  width: 3,
  height: 4
},

  {
  id: 7,
  title: "7：南开大学医学院",
  description: `
<p>
南开大学医学院是南开大学下设的二级学院，始建于1988年，1993年经原国家教委批准正式成立。
学院开设临床医学（含“5+3”一体化）、口腔医学、智能医学工程、眼视光医学4个本科专业，
拥有临床医学一级学科博士学位授权点，建有基础医学实验室、临床技能中心等教学设施。
</p>

<p>
截至2021年8月，学院有教授12人、副教授22人，讲师18人，实验技术人员19人，
其中包括973首席科学家1人，教育部新世纪人才3人；
在联合办学单位聘用博士生导师98人，硕士生导师150余人。
</p>

<p>
该院前身可追溯至1930年南开大学理学院设立的医学预科班。
1980年与天津医学院合作开展八年制医学教育试点，1989年招收首届临床医学七年制学生。
2007年起与中国人民解放军总医院联合办学，2014年停招七年制临床医学专业，
转为“5+3”一体化培养模式。
</p>

<p>
截至2022年4月，学院现有本、硕、博等各类在校学生837人；
已毕业七年制硕士研究生20届620人，三年制硕士研究生14届265人，博士研究生5届126人，
口腔医学本科生49人。
</p>

<img src="assets/School of Medicine.jpg" alt="南开大学医学院">
`,
  left: 15.61,
  top: 46.53,
  width: 3,
  height: 4
},
  {
  id: 8,
  title: "8：南开大学药学院",
  description: `
<p>
南开大学药学院是南开大学下属二级学院，成立于2007年3月15日，位于天津市津南校区，现任党委书记为魏占玲。
</p>

<p>
学院前身为2003年筹建的药学专业，2005年依托化学学院设立药学系，2007年独立建院，2011年联合共建药物化学生物学国家重点实验室，2015年整体迁入津南校区。
</p>

<p>
学院设有药学、药物化学等一流本科专业方向，拥有药学一级学科博士点及博士后流动站，开设多个学术型硕士专业和专业学位博士专业。
</p>

<p>
现有专任教师68人，其中教授34人、博士生导师22人，包括国家“973”项目首席科学家及国家级青年人才10余人。
学院承担国家“973”“863”计划、国家自然科学基金等项目，发表SCI论文，申请专利，并有新药获批临床批件。
</p>

<p>
学院建有药物化学生物学全国重点实验室、天津市分子药物研究重点实验室等科研平台，
并与英国伯明翰大学、美国佐治亚大学等开展合作；学生团队获得“互联网+”创新创业大赛金奖等多项国家级奖项。
</p>

<img src="assets/8 College of Pharmacy.jpg" alt="南开大学药学院">
`,
  left: 19.46,
  top: 44.43,
  width: 3,
  height: 3
},
  {
  id: 9,
  title: "9：环境科学与工程学院",
  description: `
<p>
南开大学环境科学与工程学院是中国综合性大学最早成立的环境科学系之一。1983年从南开大学化学院分离出来，戴树桂教授任系主任，并于1984年成为环境科学系。1998年成立环境科学与工程学院。现任院长为国家杰出青年科学基金获得者周启星教授。
</p>

<p>
学院已培养出千余名毕业生，他们大多从事国家环境保护的科研、教学和管理工作，并发挥了重要作用。在国外留学的学生中，有3人获得了美国环境化学优秀研究生称号。1995年6月，国家环保局、国家教委授予学院“环境教育先进集体”光荣称号。
</p>

<p>
学院2000年首批成为环境科学与工程一级学科博士/硕士学位授权点单位，并拥有环境科学与工程博士后流动站。在历次国家一级学科评估中名列前茅。2001年环境科学专业被教育部批准为国家重点学科，成为我国4个环境科学国家重点学科之一；2007年再次被评为环境科学国家重点学科。2006年环境科学与工程学科被天津市认定为一级重点学科，2012年再次被批准为天津市一级重点学科。
</p>

<p>
一直以来，南开大学环境学科不仅连续担任国务院学位委员会环境科学与工程学科评议组召集人或成员，也是教育部高等学校环境科学与工程教学指导委员会副主任或成员单位以及环境科学类专业教学指导分委员会主任或副主任单位，对我国环境学科的创建与发展发挥了重要作用。
</p>

<p>
在环境科学国家重点学科的带动下，学院学科建设取得显著进展，一批交叉和新型学科迅速成长并得到发展。生态学2011年成为经调整后首批一级学科博士学位授权点，2012年又被教育部批准设立生态学博士后首批流动站，并被天津市批准为首批一级重点学科。安全科学与工程目前是一级学科硕士学位授权点。资源循环科学与工程学科率先在国内进行建设，并于2011年开始招收本科生。
</p>

<img src="assets/9 College of Environmental Science and engineering.jpg" alt="南开大学环境科学与工程学院">
`,
  left: 19.77,
  top: 39.27,
  width: 3.5,
  height: 4
},
  {
  id: 10,
  title: "10：国际交流中心",
  description: `
<p>
国际交流中心相关事务由学校国际交流处统筹负责，主要承担境外学者来访接待、师生出国（境）访问交流以及涉外会议等工作的组织与安排。
</p>
`,
  left: 20.66,
  top: 31.57,
  width: 3,
  height: 3.5
},
 {
  id: 11,
  title: "11：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 23.79,
  top: 30.74,
  width: 3.6,
  height: 2.5
}
,
  {
  id: 12,
  title: "12：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 25.38,
  top: 28.54,
  width: 3,
  height: 1.6
},
  {
  id: 13,
  title: "13：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 27.37,
  top: 25.45,
  width: 3,
  height: 2.2
},
  {
  id: 14,
  title: "14：旅游与服务学院",
  description: `
<p>
1981年，国家旅游局和南开大学联合创建旅游学系，在教育部直属院校中第一个开创旅游专业，开中国旅游高等教育之先河。
三十多年来，南开大学为我国旅游业发展培养了大批杰出人才，贡献了丰富的研究成果，成为业界公认的中国旅游教育领军学府。
</p>

<p>
2010年5月14日，国家旅游局与南开大学签署了全面合作的框架协议，同时宣布中国旅游管理干部学院整建制划转南开大学，
南开大学旅游与服务学院正式成立。
</p>

<p>
南开大学旅游与服务学院现设有旅游管理本科、硕士（科学硕士与专业硕士）、博士教育项目。
此外，学院还面向旅游行政管理部门和旅游企业的中高层领导者开设高端继续教育（EDP）项目。
</p>

<p>
2015年9月，旅游与服务学院迁往南开大学津南校区。
</p>

<img src="assets/14 College of Tourism.jpg" alt="南开大学旅游与服务学院">
`,
  left: 23.81,
  top: 34.51,
  width: 2,
  height: 2
},
  {
  id: 15,
  title: "15：专家公寓",
  description: `
<p>
专家公寓位于津南校区西北方向的对外办学组团内，靠近学校西门，与文科组团隔路相望。
专家公寓含两栋客房楼，现有各类客房194间，其中套房21间，标准间149间，大床房22间，无障碍居室2间，
合计有各类床位353个。
</p>

<p>
专家公寓客房主要为外籍专家、来访学者、校友及学校的各类会议和重要活动提供住宿服务。
</p>
`,
  left: 26.94, top: 33.17,
  width: 2,
  height: 2
},
  {
  id: 16,
  title: "16：留学生公寓",
  description: `
<p>
南开大学校内建有外国留学生公寓和留学生餐厅。留学生公寓实行酒店式管理，房型有双人间、单人间。
</p>

<p>
每个房间配有独立卫生间、床、床头柜、写字桌椅、衣柜、电视、电话、冷暖空调、暖气、网络等配套设施。
</p>

<p>
公寓提供24小时热水、收费洗衣机等服务；公寓服务人员定期打扫卫生并更换床品。
</p>
`,
  left: 29.1,
  top: 30.69,
  width: 2.4,
  height: 2.5
},
  {
  id: 17,
  title: "17：留学生公寓",
  description: `
<p>
南开大学校内建有外国留学生公寓和留学生餐厅。留学生公寓实行酒店式管理，房型有双人间、单人间。
</p>

<p>
每个房间配有独立卫生间、床、床头柜、写字桌椅、衣柜、电视、电话、冷暖空调、暖气、网络等配套设施。
</p>

<p>
公寓提供24小时热水、收费洗衣机等服务；公寓服务人员定期打扫卫生并更换床品。
</p>
`,
  left: 32.38,
  top: 30.62,
  width: 2,
  height: 2
},
  {
  id: 18,
  title: "18：理科操场",
  description: `
<p>
理科组团体育场，面积为34700平方米，位于津南校区西南门附近，毗邻第二食堂。
设无看台400米田径场（含标准足球场）、5人制足球场、篮球场、网球场、排球场及器械区。
场地均可实现灯光分区控制。
</p>

<p>
理科组团体育场无需预约，课余时间向在校师生免费开放。
为规范管理，体育场皆设有门禁，在校师生应从理科体育场东侧正门通过身份验证后入场。
</p>

<img src="assets/18 south playground.jpg" alt="理科组团体育场（南门操场）">
`,
  left: 19.3,
  top: 51.7,
  width: 4.2,
  height: 5.8
},

{
    id: 19,
    title: "网球场",
    description: `
<p>此处为南开大学室外网球场，紧邻校园运动区与生活区，位置便捷，是师生开展网球运动的核心场地。</p>

<p>场地按国际标准铺设塑胶面层，配备专业球网、边界标识及夜间照明设备，兼顾运动专业性与安全性。</p>

<p>主要用于网球课程教学、校网球队训练，同时面向师生开放，满足课余休闲运动、朋友对打及小型友谊赛需求。</p>

<p>场地为校园网球文化提供了优质载体，丰富了师生体育选择，助力培养健康向上的运动习惯。</p>
`,
    // images: [
    //   "assets/buildings/tennis-1.jpg",
    //   "assets/buildings/tennis-2.jpg",
    // ],
    left: 22.25,
    top: 57.5446,
    width: 3.5,
    height: 3
  },
{
    id: 20,
    title: "篮球场",
    description: `
<p>此处为南开大学室外篮球场，位于校园核心运动区域，场地开阔、位置便利，是师生最受欢迎的运动场所之一。</p>

<p>设有多片标准塑胶球场，配备稳固球架、清晰场地标线及基础照明设施，适配不同规模的篮球活动。</p>

<p>核心用途包括篮球课程教学、班级联赛、学生篮球社团活动，课余时间更是师生日常锻炼、组队竞技的首选场地。</p>

<p>作为校园体育文化的重要载体，场地见证了师生的活力与协作，是凝聚集体氛围、释放青春能量的关键空间。</p>
`,
    left: 23.87,
    top: 54.0272,
    width: 3.6,
    height: 3.6
  },
  {
    id: 21,
    title: "排球场",
    description: `
<p>此处为南开大学室外排球场，紧邻学生生活区与教学区，位置便捷，是校园核心体育活动场地之一，为师生提供常态化排球运动空间。</p>

<p>场地设施规范，设有标准塑胶球场及齐全的球网、边界标识与照明设备，兼顾安全性与运动体验，可满足日常教学与活动需求。</p>

<p>场地不仅丰富了校园课余生活，更助力营造崇尚运动、团结协作的校园体育文化氛围。</p>
`,
    left: 24.8268,
    top: 50.9844,
    width: 4,
    height: 3
  },
  {
    id: 22,
    title: "理科学生宿舍",
    description: "理科学生住宿楼，为理科学院的本科生提供住宿生活空间。",
    left: 26.496,
    top: 59.5136,
    width: 3,
    height: 2.2,
  },
  {
    id: 23,
    title: "理科学生宿舍",
    description: "理科学生宿舍楼，与22号楼共同构成理科学生生活区。",
    left: 26.9581,
    top: 53.5464,
    width: 8.3,
    height: 6.7
  },
  {
    id: 24,
    title: "学生二食堂",
    description: "学生餐厅之一，提供多样化的餐饮服务，满足师生日常用餐需求。",
    left: 29.59,
    top: 50.3536,
    width: 4,
    height: 4.7
  },
  {
    id: 25,
    title: "商业街",
    description: "校内小型商业服务区，设有超市、文印、水果店等便利生活设施。",
    left: 32.54,
    top: 50.68,
    width: 1.8,
    height: 4
  },
  {
    id: 26,
    title: "后勤员工二宿舍",
    description: "为学校后勤服务人员提供的住宿公寓。",
    left: 29.96,
    top: 60.03,
    width: 3,
    height: 1.7
  },
    {
    id: 27,
    title: "理科学生宿舍（博士）",
    description: "主要为理科博士研究生提供的住宿楼。",
    left: 35.16,
    top: 55.7264,
    width: 4,
    height: 4.5
  },
  {
    id: 28,
    title: "理科学生宿舍（研究生）",
    description: "理科硕士研究生宿舍楼，靠近教学科研区，方便学习和生活。",
    left: 33.2534,
    top: 50.6364,
    width: 7,
    height: 4.9
  },
{
    id: 29,
    title: "计算机学院和密码与网络空间安全学院",
    description: `
<p>此处为南开大学计算机学院与密码与网络空间安全学院的合署教学科研办公楼，是信息领域人才培养与科研攻关的核心载体。计算机学科始于1958年（国内最早开展计算机研究的院校之一），2018年成立计算机学院，2024年网络空间安全学院更名为“密码与网络空间安全学院”，传承周恩来总理创建的“豪密”红色基因。</p>

<p>学院学科实力突出：计算机科学与技术是国家级一流本科专业（ESI全球前1%），密码科学与技术为全国首批开设专业；建有“数据与智能系统安全”教育部重点实验室，是计算机病毒防治技术国家工程实验室第二理事单位。</p>

<p>师资与成果兼具优势：教授全员为本科生授课，拥有国家级高层次人才20余人；科研成果包括密码技术服务华为高斯数据库、蚂蚁隐语平台，恶意代码智能分析系统部署国家重要部门，数据库安全防护技术应用于税务、金融等领域，获省部级以上奖励40余项。</p>

<p>人才培养特色鲜明：开设全国首个“信息安全—法学”双学位班，2024年培养出全国首届密码本科毕业生；毕业生广泛进入国家安全部门、百度/腾讯等企业，或赴顶尖高校深造，为我国信息安全标准制定等工作贡献力量。</p>

<img src="assets/29_计网.webp" alt="计密网学院">

`,
    left: 35.3,
    top: 46.66,
    width: 4,
    height: 4.2
  },
{
    id: 30,
    title: "材料科学与工程学院",
    description: `
<p>此处是南开大学材料科学与工程学院的教学科研基地，学院学科肇始于上世纪50年代，2015年正式组建，依托南开雄厚的化学、物理学科基础发展而来，是我国新材料领域科研与人才培养的重要阵地之一。</p>

<p>学科与平台优势显著：材料学科ESI排名全球第53位，拥有材料科学与工程一级学科博士点、博士后流动站，材料化学专业为国家级一流本科专业；建有先进能源材料化学教育部重点实验室、无机固体材料与能源化学高等学校学科创新引智基地等平台。</p>

<p>科研成果丰硕：聚焦新能源材料、光电转换材料等方向，在《Science》等顶刊发表论文700余篇，获国家自然科学二等奖2项、省部级奖励10余项，研究成果支撑清洁能源、信息存储等领域的产业升级。</p>

<p>人才培养体系完善：现有本科生、研究生千余人，构建了“本-硕-博”一体化培养模式，毕业生多进入中科院、新材料龙头企业，或赴国际顶尖高校深造，为我国材料领域的科技突破输送高端人才。</p>

<img src="assets/30_材料.jpg" alt="材料学院">

`,
    left: 36.4781,
    top: 43.13,
    width: 3.7,
    height: 3.8
  },
{
    id: 31,
    title: "软件学院",
    description: `
<p>此处是南开大学软件学院的教学与实验楼，学院2001年成立，是全国首批35所国家示范性软件学院之一，2020年软件工程专业入选国家级一流本科专业，是我国软件工程领域高层次人才培养的标杆院校之一。</p>

<p>科研平台与方向前沿：建有天津市软件体验与人机交互重点实验室、南开大学-vivo软件体验联合实验室等；聚焦人工智能平台软件、工业软件等方向，研发的“智能计算软件平台”破解了国产算力“卡脖子”难题，成果获天津市科技进步一等奖。</p>

<p>产学研融合特色突出：与华为、字节跳动等企业共建实训基地，“十四五”期间科研经费到账4800余万元，成果转化17项，其中与麒麟软件联合开发的多语言操作系统推广至近百个国家，产值超亿元。</p>

<p>人才培养成效显著：培养出字节跳动创始人张一鸣等行业领军人才，现有本科生、研究生500余人；毕业生多进入阿里、腾讯等头部企业担任架构师、工程师，或自主创业，是我国软件产业创新发展的核心人才来源之一。</p>

<img src="assets/31_软件.jpg" alt="软件学院">

`,
    left: 32.8481,
    top: 43.04,
    width: 3,
    height: 3
  },
  {
    id: 32,
    title: "电子信息和光学工程学院",
     description: `
<p>南开大学电子信息和光学工程学院（简称“电光学院”）的教学科研大楼，是学院开展学科建设、教学实践与科研创新的核心载体。学院于2013年7月正式组建，由原信息技术科学学院的电子信息科学与技术系、微电子学系、光电子薄膜器件与技术研究所等系所整合而成，其学科发展渊源可追溯至南开大学底蕴深厚的物理学科基础。</p>

<p>学院学科实力雄厚，拥有光学工程国家重点一级学科，电子科学与技术、信息与通信工程2个天津市重点学科，下设3个一级学科博士点与博士后科研流动站；同时建有弱光非线性光子学教育部重点实验室、天津市光电传感器与传感网络技术重点实验室等省部级科研平台，并参与建设国家级实验教学示范中心。</p>

<p>学院师资阵容强劲，现有中国科学院院士1人、双聘工程院院士1人，国家级高层次人才（长江学者、国家杰出青年科学基金获得者等）20余人，诺贝尔物理学奖得主杨振宁先生担任学院名誉教授。科研成果丰硕，曾研制中国第一颗硅单晶（奠定国内半导体产业基础）、我国首个在轨航天器有害气体检测装置（应用于“天宫”空间站），先后承担国家级项目300余项，获省部级以上奖励40余项。</p>

<p>在人才培养方面，学院现有本科生约1000人、研究生约600人，构建了完整的本-硕-博培养体系；毕业生广泛进入中科院、航天科技集团等科研院所，华为、字节跳动等龙头企业，或赴斯坦福、MIT等顶尖高校深造，是我国相关领域高端人才培养与科研攻关的重要阵地。</p>

<img src="assets/32_电光.png" alt="电光学院">
`,
    left: 31.15,
    top: 46.07,
    width: 4.5,
    height: 4.2
  },
  {
    id: 33,
    title: "马蹄湖",
    description: `
<p>马蹄湖位于天津市南开大学校园内，为该校现存最早的湖泊，现为天津市主要赏荷景点之一。校园最初建有南北对称的两个马蹄湖，其中南马蹄湖于1937年日寇轰炸后被填平，现仅存北马蹄湖。</p>

<p>该湖始建于20世纪20年代初，1937年日军轰炸南开导致南侧秀山堂损毁。抗战胜利后北马蹄湖恢复景观，1979年在湖心岛建成周恩来总理纪念碑，碑身镌刻其手迹"我是爱南开的"。杨石先、吴大任两位校长的骨灰分别撒于岛周松柏下及纪念碑旁。</p>

<p>北马蹄湖荷花经师生校友公开投票当选南开"校花"，与新开湖并称"南开的眼睛"。湖东侧紧邻海冰楼，共同构成校园历史景观轴线。原南马蹄湖旧址现立有严修、张伯苓铜像，形成南开精神纪念场所。</p>

<img src="assets/33_马蹄湖.png" alt="马蹄湖">
`,
    left: 24.31,
    top: 41.64,
    width: 8,
    height: 8
  },
  {
    id: 34,
    title: "秀山堂",
    description: `
<p>秀山堂是南开大学八里台校区首座建筑，由江苏督军李纯（字秀山）遗嘱捐资约50万银元兴建，1923年6月落成，设行政办公和文商科教室，并举办首届毕业典礼及李纯铜像奠基礼。建筑命名源自李纯表字，其弟李桂山于1921年将捐款转交南开大学。</p>
<p>1937年7月29日秀山堂遭侵华日军炮火炸毁，1971年在原址重建地上一层和部分二层作为南开大学幼儿园。2016年10月南开大学在津南校区启动复建工程，新秀山堂采用欧洲对称线形布局，位于校区主轴线上，规划用于校史陈列及研究。复建工程于2019年10月竣工，建筑外观延续砖红色主体与浅黄石材装饰</p>
<img src="assets/34_秀山堂.webp" alt="秀山堂">`,
    left: 28.43,
    top: 40.1,
    width: 2.7,
    height: 2.09
  },
  {
    id: 35,
    title: "木斋馆",
    description: `
<p>木斋馆，又名木斋图书馆，是南开大学校内标志性建筑，位于天津南开大学津南校区历史纪念区。该馆由前清学儒卢木斋于1927年捐资10万元兴建，1928年10月18日竣工投用，为南开大学首座图书馆大楼，初建时藏书20万卷。为纪念卢木斋，时任校长张伯苓主持命名典礼并亲授馆钥。1937年7月遭日军炸毁，1951年修复后继续使用，1958年改为办公楼 。2016年10月18日南开大学举行复建奠基仪式，2019年5月完工，复建建筑现成为校区历史文脉传承核心。</p>

<img src="assets/35_木斋馆.webp" alt="木斋馆">
`,
    left: 27.3619,
    top: 37.66,
    width: 2.4,
    height: 3
  },
  {
    id: 36,
    title: "思源堂",
    description: `
<p>思源堂（英文名：Siyuan Hall），又名第二教学楼，位于天津市南开区卫津路94号南开大学校园内，为第八批全国重点文物保护单位。该建筑始建于1923年，由美国洛克菲勒基金会与企业家袁述之（又名：袁世传）共同捐资兴建，邱宗岳设计督建，1925年作为理科教学楼投入使用，取"饮水思源"之意命名。建筑为三层混合结构，采用古典主义西洋风格，正立面设六根古罗马石柱门廊，现存清水红砖墙面特征。</p>
<p>这座象征着私立南开大学辉煌成就的建筑，在1937年日军轰炸南开时中弹起火，成为校园内唯一留存建筑。后被日寇用作天津日本中学校，后长期作为化学学科教学楼，现由医学院使用。2016年津南校区启动思源堂复建工程。2019年10月16日，该建筑被国务院列入第八批全国重点文物保护单位，既是南开百年风雨的见证，更是中华民族英勇抗战精神的具象化遗存。</p>
`,
    left: 30.03,
    top: 36.98,
    width: 2.5,
    height: 3
  }




  

];

// ========== 2. 生成热点 ==========
const mapContainer = document.getElementById("map-container");
const mapImg = document.getElementById("map-img");
const infoBox = document.getElementById("info-box");
const infoTitle = document.getElementById("info-title");
const infoBody = document.getElementById("info-body");
const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById("click-sound");

let activeHotspot = null;

function playSound(audioEl) {
  if (!audioEl) return;
  try {
    audioEl.currentTime = 0;
    audioEl.play();
  } catch (_) {}
}

function renderDescription(desc) {
  if (!desc) return "<p>这个建筑暂时还没有详细介绍。</p>";
  if (desc.includes("<")) return desc; // 已是 HTML
  const safe = desc
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\n", "<br/>");
  return `<p>${safe}</p>`;
}

/** ✅ 核心：把右侧 infoBox 高度锁定为地图实际高度（像素） */
function syncInfoHeightToMap() {
  const rect = mapContainer.getBoundingClientRect();
  // 避免拿到 0（图片未加载）
  if (rect.height > 0) {
    infoBox.style.height = `${rect.height}px`;
  }
}

// 用 ResizeObserver 自动跟随地图高度变化（窗口缩放/图片加载/响应式）
const ro = new ResizeObserver(() => syncInfoHeightToMap());
ro.observe(mapContainer);

// 图片加载完也同步一次（首次最关键）
mapImg.addEventListener("load", () => syncInfoHeightToMap());
window.addEventListener("resize", () => syncInfoHeightToMap());

// ===== 拖拽（默认关闭）=====
let dragging = null;
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const { hotspot, item, startX, startY, startLeft, startTop, mapRect } = dragging;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  const dxPercent = (dx / mapRect.width) * 100;
  const dyPercent = (dy / mapRect.height) * 100;

  const newLeft = startLeft + dxPercent;
  const newTop = startTop + dyPercent;

  hotspot.style.left = newLeft + "%";
  hotspot.style.top = newTop + "%";

  item.left = Number(newLeft.toFixed(2));
  item.top = Number(newTop.toFixed(2));
});
document.addEventListener("mouseup", () => {
  if (!dragging) return;
  dragging.hotspot.classList.remove("dragging");
  console.log(`📌 建筑 ${dragging.item.id} 新位置：`, {
    id: dragging.item.id,
    left: dragging.item.left,
    top: dragging.item.top,
    width: dragging.item.width,
    height: dragging.item.height,
  });
  dragging = null;
});

function createHotspots() {
  HOTSPOT_DATA.forEach((item) => {
    const hotspot = document.createElement("div");
    hotspot.className = "hotspot";

    hotspot.style.left = item.left + "%";
    hotspot.style.top = item.top + "%";
    hotspot.style.width = item.width + "%";
    hotspot.style.height = item.height + "%";

    hotspot.addEventListener("mouseenter", () => playSound(hoverSound));

    hotspot.addEventListener("click", (event) => {
      event.preventDefault();

      if (activeHotspot && activeHotspot !== hotspot) {
        activeHotspot.classList.remove("active");
      }
      activeHotspot = hotspot;
      hotspot.classList.add("active");

      infoTitle.textContent = item.title || `编号 ${item.id}`;
      infoBody.innerHTML = renderDescription(item.description);

      // ✅ 右侧滚动回顶部（滚动容器是 infoBox）
      infoBox.scrollTop = 0;

      playSound(clickSound);
    });

    if (EDIT_MODE_DRAG) {
      hotspot.addEventListener("mousedown", (e) => {
        e.preventDefault();
        hotspot.classList.add("dragging");
        dragging = {
          hotspot,
          item,
          startX: e.clientX,
          startY: e.clientY,
          startLeft: item.left,
          startTop: item.top,
          mapRect: mapContainer.getBoundingClientRect(),
        };
      });
    }

    mapContainer.appendChild(hotspot);
  });
}

createHotspots();
// 首次同步一次（以防图片已缓存，load 不触发）
syncInfoHeightToMap();

// ========== 3. Esc 取消选择 ==========
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    if (activeHotspot) {
      activeHotspot.classList.remove("active");
      activeHotspot = null;
    }
    infoTitle.textContent = "操作提示";
    infoBody.innerHTML =
      "<p>鼠标移动到地图上的建筑区域会高亮；点击后高亮锁定并显示介绍。按 Esc 取消选择。</p>";
    infoBox.scrollTop = 0;
  }
});



