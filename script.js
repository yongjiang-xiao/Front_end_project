// ===== 开关：默认不允许拖拽，避免坐标被误改 =====
const EDIT_MODE_DRAG =  false;  // 想拖拽调坐标再改 true
const DEBUG_SHOW_HOTSPOTS = false;
if (DEBUG_SHOW_HOTSPOTS) document.body.classList.add("debug");

// ========== 1. 建筑数据（你给的 1–18 坐标全部原样保留） ==========
const HOTSPOT_DATA = [
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
}
,
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
}
,
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
}
,
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
}
,
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
}
,
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
}
,
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
}
,
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
}
,
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
