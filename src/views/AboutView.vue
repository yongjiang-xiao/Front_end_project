<template>
  <div class="about-container">
    <!-- 导航栏：仅保留about，避免无对应板块的问题 -->
    

    <!-- 学校介绍板块：移除v-if，确保默认显示 -->
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-header">
          <h2 class="section-title">南开大学介绍</h2>
          <p class="about-tagline">百年南开，薪火相传 | 中国近代教育史上的璀璨明珠</p>
        </div>

        <!-- 学校概况 -->
        <div id="about-overview" class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-landmark"></i>
            </div>
            <h3 class="about-section-title">学校概况</h3>
          </div>
          <div class="about-content-row">
            <div class="about-image-column">
              <div class="about-image-gallery">
                <img :src="mainImage" :alt="mainImageAlt" class="main-image" style="transition: opacity 0.15s ease;" />
                <div class="thumbnail-images">
                  <!-- 改用图片key，避免直接传路径 -->
                  <img src="@/assets/images/八里台.jpg" alt="八里台校区" class="thumbnail" @click="switchImage('八里台')" />
                  <img src="@/assets/images/泰达校区.jpg" alt="泰达校区" class="thumbnail" @click="switchImage('泰达')" />
                </div>
              </div>
            </div>
            <div class="about-text-column">
              <p class="about-paragraph">南开大学（Nankai University），简称“南开”，始建于1919年，是由著名爱国教育家严修、张伯苓秉承教育救国理念创办的综合性大学。学校是国家“211工程”和“985工程”重点建设高校，也是国家“双一流”建设高校（A类）。</p>
              <p class="about-paragraph">南开大学设有卫津路校区、津南校区、泰达校区三个校区，占地面积443.12万平方米，建筑面积195.09万平方米。学校始终坚持“允公允能，日新月异”的校训，形成了“爱国、敬业、创新、乐群”的光荣传统和“文以治国、理以强国、商以富国”的办学理念。</p>
              <div class="about-highlights">
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>教育部直属全国重点大学</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>国家“双一流”建设高校（A类）</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>985工程、211工程重点建设高校</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-check-circle"></i>
                  <span>中国高等教育学会副会长单位</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 历史沿革 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-history"></i>
            </div>
            <h3 class="about-section-title">历史沿革</h3>
          </div>
          <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in history" :key="index">
              <div class="timeline-date">{{ item.year }}</div>
              <div class="timeline-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.event }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 学科实力 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-flask"></i>
            </div>
            <h3 class="about-section-title">学科实力</h3>
          </div>
          <div class="disciplines-content">
            <div class="disciplines-intro">
              <p class="about-paragraph">南开大学学科门类齐全，涵盖文、史、哲、经、管、法、理、工、农、医、教、艺等12个学科门类。学校现有26个学院，3个直属系，100个本科专业，硕士点117个，博士点98个，博士后科研流动站28个。</p>
              <p class="about-paragraph">在全国第四轮学科评估中，南开大学有5个学科进入A类，14个学科进入B类，多个学科在国内外享有盛誉。学校在理论经济学、应用经济学、数学、化学、统计学、历史学、中国语言文学、哲学、物理学等领域具有深厚的学术积淀和较强的科研实力。</p>
            </div>
            <div class="disciplines-grid">
              <div class="discipline-card" v-for="(item, index) in disciplines" :key="index">
                <div class="discipline-icon">
                  <i :class="item.icon"></i>
                </div>
                <h4 class="discipline-title">{{ item.title }}</h4>
                <p class="discipline-desc">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 校园文化 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="about-section-title">校园文化</h3>
          </div>
          <div class="culture-content">
            <div class="culture-item" v-for="(item, index) in culture" :key="index">
              <div class="culture-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="culture-info">
                <h4 class="culture-title">{{ item.title }}</h4>
                <p class="culture-desc"><strong>{{ item.desc }}</strong></p>
                <p class="culture-explainer">{{ item.explainer }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 校园设施 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3 class="about-section-title">校园设施</h3>
          </div>
          <div class="facilities-grid">
            <div class="facility-card" v-for="(item, index) in facilities" :key="index">
              <img :src="item.image" :alt="item.title" class="facility-image" />
              <h4 class="facility-title">{{ item.title }}</h4>
              <p class="facility-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- 历史名人：新增板块 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="about-section-title">南开历史名人</h3>
          </div>
          <div class="celebrities-grid">
            <div class="celebrity-card" v-for="(person, index) in celebrities" :key="index">
              <div class="celebrity-image-container">
                <img :src="person.image" :alt="person.name" class="celebrity-image" />
              </div>
              <div class="celebrity-info">
                <h3 class="celebrity-name">{{ person.name }}</h3>
                <p class="celebrity-role">{{ person.role }}</p>
                <div class="celebrity-bio">
                  <p>{{ person.bio }}</p>
                </div>
                <div class="celebrity-achievements">
                  <h4>主要成就：</h4>
                  <ul>
                    <li v-for="(achievement, i) in person.achievements" :key="i">{{ achievement }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 数据统计：修复样式 -->
        <div class="about-section-block">
          <div class="about-section-header">
            <div class="section-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <h3 class="about-section-title">南开数据</h3>
          </div>
          <div class="statistics-intro">
            <p class="about-paragraph">南开大学经过百余年的发展，已成为一所学科门类齐全、学术实力雄厚、师资力量强大、办学特色鲜明的综合性研究型大学。以下数据从多个维度展示南开大学的发展现状和办学实力。</p>
          </div>
          <div class="statistics-grid">
            <div class="stat-card" v-for="(item, index) in statistics" :key="index">
              <div class="stat-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="stat-number">{{ item.number }}</div>
              <div class="stat-label">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      // 修正：初始主图路径改为assets/images/
      mainImage: require('@/assets/images/津南校区.jpg'),
      mainImageAlt: '津南校区',
      // 图片映射表，避免动态require错误（全部改为images路径）
      imageMap: {
        八里台: { src: require('@/assets/images/八里台.jpg'), alt: '八里台校区' },
        泰达: { src: require('@/assets/images/泰达校区.jpg'), alt: '泰达校区' },
        津南: { src: require('@/assets/images/津南校区.jpg'), alt: '津南校区' }
      },
      // 历史沿革数据
      history: [
        {
          year: '1919年',
          title: '南开大学正式成立',
          event: '由严修、张伯苓创办，设文、理、商三科，周恩来为第一期学生'
        },
        {
          year: '1937年',
          title: '南迁昆明',
          event: '抗日战争爆发，南开大学与北京大学、清华大学南迁昆明，组成西南联合大学'
        },
        {
          year: '1946年',
          title: '迁回天津',
          event: '抗战胜利后，南开大学迁回天津原址复校'
        },
        {
          year: '1952年',
          title: '院系调整',
          event: '成为文理并重的综合性大学，奠定了今日学科布局的基础'
        },
        {
          year: '1995年',
          title: '进入211工程',
          event: '被列入国家"211工程"重点建设高校名单'
        },
        {
          year: '2000年',
          title: '进入985工程',
          event: '成为国家"985工程"重点建设高校'
        },
        {
          year: '2015年',
          title: '津南校区启用',
          event: '津南新校区正式启用，成为学校发展的新引擎'
        },
        {
          year: '2017年',
          title: '入选双一流',
          event: '入选国家"双一流"建设高校（A类）名单'
        }
      ],
      // 学科实力数据
      disciplines: [
        {
          icon: 'fas fa-chart-line',
          title: '经济学类',
          description: '理论经济学、应用经济学为国家重点学科，在全国处于领先地位'
        },
        {
          icon: 'fas fa-atom',
          title: '理学类',
          description: '数学、化学、物理学、生物学等学科实力雄厚，科研成果丰硕'
        },
        {
          icon: 'fas fa-book',
          title: '人文社科类',
          description: '历史学、中国语言文学、哲学等学科具有深厚的学术传统'
        },
        {
          icon: 'fas fa-laptop-code',
          title: '工学类',
          description: '计算机科学与技术、环境科学与工程、材料科学与工程等发展迅速'
        },
        {
          icon: 'fas fa-briefcase',
          title: '管理学类',
          description: '工商管理、公共管理、图书情报与档案管理等学科特色鲜明'
        },
        {
          icon: 'fas fa-balance-scale',
          title: '法学类',
          description: '法学、政治学、社会学等学科在国内外具有重要影响'
        }
      ],
      // 校园文化数据
      culture: [
        {
          icon: 'fas fa-quote-left',
          title: '校训精神',
          desc: '允公允能，日新月异',
          explainer: '允公：大公无私，爱国奉献；允能：培养能力，服务社会；日新月异：与时俱进，开拓创新'
        },
        {
          icon: 'fas fa-star',
          title: '南开精神',
          desc: '爱国、敬业、创新、乐群',
          explainer: '爱国是南开精神的核心，敬业是南开人的职业操守，创新是南开发展的动力，乐群是南开人的处世之道'
        },
        {
          icon: 'fas fa-theater-masks',
          title: '校园活动',
          desc: '"南开之春"文化艺术节、"挑战杯"等各类竞赛活动',
          explainer: '学校拥有200多个学生社团，涵盖学术科技、文化艺术、体育健身、公益服务等多个领域'
        }
      ],
      // 校园设施数据（全部图片路径改为images/，并修复笔误）
      facilities: [
        {
          title: '图书馆',
          image: require('@/assets/images/图书馆.jpg'),
          description: '总建筑面积达7.8万平方米，藏书400余万册，拥有丰富的电子资源和古籍文献'
        },
        {
          title: '实验室',
          image: require('@/assets/images/实验室.jpg'), // 修正：补充缺失的/
          description: '拥有国家重点实验室4个，省部级重点实验室30余个，科研设备先进齐全'
        },
        {
          title: '体育场馆',
          image: require('@/assets/images/体育场.jpg'),
          description: '建有体育馆、游泳馆、足球场、篮球场、网球场等各类体育设施，满足师生健身需求'
        },
        {
          title: '学生宿舍',
          image: require('@/assets/images/宿舍.jpg'),
          description: '标准化学生公寓，配备空调、独立卫浴、24小时热水，环境舒适安全'
        },
        {
          title: '学生食堂',
          image: require('@/assets/images/三食堂.jpg'),
          description: '多个学生食堂，提供全国各地风味美食，满足不同口味需求'
        },
        {
          title: '科技馆',
          image: require('@/assets/images/科技馆.jpg'),
          description: '馆内展品丰富，包括机器人、3D 打印机、天文望远镜等先进设备，是师生开展科普教育和科技创新的重要平台。'
        }
      ],
      // 仅新增：张伯苓、曹禺两位名人（其余4位保留）
      celebrities: [
        {
          name: '于敏',
          role: '核物理学家、"两弹一星"功勋科学家',
          image: require('@/assets/images/于敏.jpg'),
          bio: '于敏（1926-2019），河北宁河人，中国著名核物理学家，"两弹一星"功勋科学家，国家最高科技奖获得者。他在氢弹原理突破中解决了一系列基础问题，为中国氢弹研制做出了卓越贡献，被誉为"中国氢弹之父"。',
          achievements: [
            '主导突破氢弹原理，完成氢弹理论设计',
            '获"两弹一星"功勋奖章、国家最高科技奖',
            '提出"于敏构型"，为中国核武器发展奠定重要基础',
            '长期领导核武器理论研究和设计工作'
          ]
        },
        {
          name: '周恩来',
          role: '无产阶级革命家、政治家、外交家',
          image: require('@/assets/images/周恩来.png'),
          bio: '周恩来（1898-1976），字翔宇，原籍浙江绍兴，生于江苏淮安。1913年考入天津南开学校，1917年毕业，是南开大学第一期学生。中国共产党和中华人民共和国的主要领导人之一。',
          achievements: [
            '中华人民共和国首任总理',
            '杰出的无产阶级革命家、政治家、军事家、外交家',
            '为中国革命和建设事业作出卓越贡献',
            '南开学校时期即表现出强烈的爱国精神和领导才能'
          ]
        },
        {
          name: '王选',
          role: '计算机科学家、汉字激光照排系统创始人',
          image: require('@/assets/images/王选.jpg'),
          bio: '王选（1937-2006），江苏无锡人，中国著名计算机科学家，汉字激光照排系统创始人，被誉为"当代毕昇"。他所领导的科研团队研制出的汉字激光照排系统，彻底改变了中国印刷业的落后面貌。',
          achievements: [
            '发明汉字激光照排系统，推动中国印刷业现代化',
            '获国家最高科技奖、毕昇奖等多项荣誉',
            '提出"顶天立地"的科研理念，注重成果转化',
            '培养了一批计算机领域优秀人才'
          ]
        },
        {
          name: '陈景润',
          role: '数学家、哥德巴赫猜想研究专家',
          image: require('@/assets/images/陈景润.jpg'),
          bio: '陈景润（1933-1996），福建福州人，中国著名数学家，主要从事解析数论研究。他在哥德巴赫猜想研究方面取得重大突破，其成果被国际数学界称为"陈氏定理"，是中国数学界的杰出代表。',
          achievements: [
            '证明哥德巴赫猜想中的"1+2"命题，即"陈氏定理"',
            '获国家自然科学奖一等奖',
            '在解析数论领域作出多项重要贡献',
            '其事迹激励了一代中国青年投身科学研究'
          ]
        },
        // 仅新增这两条数据 ↓↓↓
        {
          name: '张伯苓',
          role: '南开大学创始人、近代著名教育家',
          image: require('@/assets/images/张伯苓.jpg'),
          bio: '张伯苓（1876-1951），天津人，中国近代著名教育家，南开大学、南开中学等南开系列学校的创始人。他以"教育救国"为己任，提出"允公允能，日新月异"的校训，为中国近代教育事业发展作出了不可磨灭的贡献。',
          achievements: [
            '创办南开大学，奠定南开教育体系的根基',
            '提出"教育救国"理念，践行爱国主义教育',
            '主导西南联合大学办学，保存中国高等教育火种',
            '培养了周恩来等大批杰出人才'
          ]
        },
        {
          name: '曹禺',
          role: '中国现代话剧奠基人、著名剧作家',
          image: require('@/assets/images/曹禺.jpg'),
          bio: '曹禺（1910-1996），原名万家宝，湖北潜江人，1925年考入南开中学，后就读于南开大学政治系。他是中国现代话剧的开拓者和奠基人，其创作的《雷雨》《日出》等作品成为中国话剧史上的经典。',
          achievements: [
            '创作《雷雨》《日出》《原野》等经典话剧',
            '奠定中国现代话剧的艺术体系和创作范式',
            '曾任北京人民艺术剧院院长，推动话剧普及',
            '为中国戏剧教育培养了大批专业人才'
          ]
        }
        // 仅新增这两条数据 ↑↑↑
      ],
      // 统计数据：补充icon字段（仅此处为之前修复样式的必要修改，其余未动）
      statistics: [
        { number: '1919', label: '建校年份', icon: 'fas fa-calendar-alt' },
        { number: '3', label: '校区数量', icon: 'fas fa-map-marker-alt' },
        { number: '26', label: '学院数量', icon: 'fas fa-university' },
        { number: '100+', label: '本科专业', icon: 'fas fa-graduation-cap' },
        { number: '40k+', label: '在校师生', icon: 'fas fa-users' },
        { number: '28', label: '博士后流动站', icon: 'fas fa-flask' },
        { number: '98', label: '博士点', icon: 'fas fa-award' },
        { number: '117', label: '硕士点', icon: 'fas fa-certificate' },
        { number: '400万+', label: '图书馆藏书', icon: 'fas fa-book' },
        { number: '1000+', label: '年度科研项目', icon: 'fas fa-project-diagram' },
        { number: '200+', label: '学生社团', icon: 'fas fa-users' },
        { number: '95%+', label: '毕业生就业率', icon: 'fas fa-chart-line' }
      ]
    };
  },
  methods: {
    // 修复图片切换逻辑（仅此处为之前修复功能的必要修改，其余未动）
    switchImage(key) {
      const imgInfo = this.imageMap[key];
      if (!imgInfo) return;
      
      // 用Vue的$el替代document.querySelector，避免scoped问题
      const mainImg = this.$el.querySelector('.main-image');
      if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
          this.mainImage = imgInfo.src;
          this.mainImageAlt = imgInfo.alt;
          mainImg.style.opacity = '1';
        }, 150);
      }
    }
  }
};
</script>

<!-- 拆分样式：全局样式移到非scoped，组件样式保留scoped -->
<style>
/* 全局样式：不添加scoped，确保body/:root生效 */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --nk-blue: #1a5397;
  --nk-blue-light: #3b82f6;
  --nk-blue-dark: #0f3460;
  --nk-gray: #f5f7fa;
  --nk-gray-dark: #4b5563;
  --nk-white: #ffffff;
  --nk-accent: #ffc107;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --transition: all 0.3s ease;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  background-color: var(--nk-gray);
  color: #333;
  line-height: 1.6;
  scroll-behavior: smooth;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>

<style scoped>
/* 组件私有样式：保留scoped，避免污染全局 */
/* 导航栏样式 */
.header {
  background-color: var(--nk-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  height: 50px;
  width: auto;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--nk-blue);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: var(--nk-gray-dark);
  font-size: 16px;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--nk-blue);
}

.nav-link.active {
  color: var(--nk-blue);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--nk-blue);
  border-radius: 3px;
}

/* 学校介绍页面样式 */
.about-section {
  background-color: var(--nk-white);
  padding: 80px 0;
  display: block !important; /* 强制显示 */
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.about-tagline {
  font-size: 18px;
  color: var(--nk-gray-dark);
  margin-top: 8px;
  font-style: italic;
}

/* 每个区块样式 */
.about-section-block {
  background-color: var(--nk-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 30px;
  margin-bottom: 40px;
  transition: var(--transition);
}

.about-section-block:hover {
  box-shadow: var(--shadow-md);
}

/* 区块标题栏 */
.about-section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.section-icon {
  width: 40px;
  height: 40px;
  background-color: var(--nk-blue-light);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.about-section-title {
  font-size: 26px;
  color: var(--nk-blue-dark);
  font-weight: 600;
  margin-bottom: 0;
}

/* 内容行布局 */
.about-content-row {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.about-image-column {
  flex: 1;
}

.about-text-column {
  flex: 1.5;
}

/* 图片画廊 */
.about-image-gallery {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.15s ease;
}

.thumbnail-images {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.thumbnail {
  flex: 1;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.7;
  transition: var(--transition);
}

.thumbnail:hover {
  opacity: 1;
  transform: scale(1.05);
}

/* 高亮项 */
.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f0f7ff;
  color: var(--nk-blue);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.highlight-item i {
  font-size: 12px;
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding-left: 140px;
  margin: 0;
  width: 100%;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--nk-blue-light);
  z-index: 1;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  width: 100%;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-date {
  position: absolute;
  left: -140px;
  top: 0;
  width: 120px;
  text-align: left;
  background-color: var(--nk-blue);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
  box-sizing: border-box;
}

.timeline-content {
  background-color: #f8f9fa;
  padding: 15px 20px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

.timeline-content h4 {
  color: var(--nk-blue-dark);
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
}

.timeline-content p {
  color: var(--nk-gray-dark);
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
}

/* 学科卡片样式 */
.disciplines-content {
  margin-bottom: 30px;
}

.disciplines-intro {
  margin-bottom: 30px;
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.discipline-card {
  background-color: #f8f9fa;
  border-radius: var(--radius-md);
  padding: 25px;
  transition: var(--transition);
  border-left: 4px solid var(--nk-blue-light);
}

.discipline-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
  background-color: white;
}

.discipline-icon {
  font-size: 32px;
  color: var(--nk-blue);
  margin-bottom: 15px;
}

.discipline-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  margin-bottom: 10px;
}

.discipline-desc {
  font-size: 14px;
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

/* 校园文化样式 */
.culture-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.culture-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.culture-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-sm);
}

.culture-icon {
  font-size: 36px;
  color: var(--nk-blue);
  margin-top: 5px;
}

.culture-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  margin-bottom: 8px;
}

.culture-desc {
  font-weight: 500;
  margin-bottom: 8px;
}

.culture-explainer {
  font-size: 14px;
  color: var(--nk-gray-dark);
  line-height: 1.6;
}

/* 校园设施样式 */
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.facility-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  background-color: white;
}

.facility-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

.facility-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: var(--transition);
}

.facility-card:hover .facility-image {
  transform: scale(1.05);
}

.facility-title {
  font-size: 18px;
  color: var(--nk-blue-dark);
  padding: 15px 20px 5px;
  margin-bottom: 5px;
}

.facility-desc {
  font-size: 14px;
  color: var(--nk-gray-dark);
  padding: 0 20px 20px;
  line-height: 1.6;
}

/* 历史名人样式（仅此处为新增板块的必要样式，其余未动） */
.celebrities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.celebrity-card {
  background-color: #f8f9fa;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.celebrity-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.celebrity-image-container {
  height: 250px;
  overflow: hidden;
}

.celebrity-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.celebrity-card:hover .celebrity-image {
  transform: scale(1.05);
}

.celebrity-info {
  padding: 20px;
}

.celebrity-name {
  font-size: 20px;
  color: var(--nk-blue-dark);
  margin-bottom: 8px;
  border-bottom: 2px solid var(--nk-blue-light);
  padding-bottom: 8px;
}

.celebrity-role {
  font-size: 14px;
  color: var(--nk-gray-dark);
  font-style: italic;
  margin-bottom: 15px;
}

.celebrity-bio {
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 15px;
  color: var(--nk-gray-dark);
}

.celebrity-achievements h4 {
  font-size: 16px;
  color: var(--nk-blue);
  margin-bottom: 10px;
}

.celebrity-achievements ul {
  padding-left: 20px;
}

.celebrity-achievements li {
  font-size: 14px;
  color: var(--nk-gray-dark);
  margin-bottom: 5px;
  line-height: 1.6;
}

/* 南开数据样式（仅此处为修复样式的必要修改，其余未动） */
.statistics-intro {
  margin-bottom: 30px;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.stat-card {
  background-color: var(--nk-blue-light);
  color: var(--nk-white);
  padding: 25px 15px;
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-5px);
  background-color: var(--nk-blue);
}

.stat-icon {
  font-size: 24px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

/* 通用文本样式 */
.about-paragraph {
  margin-bottom: 16px;
  line-height: 1.8;
  font-size: 16px;
}

.section-title {
  font-size: 36px;
  color: var(--nk-blue-dark);
  text-align: center;
  margin-bottom: 16px;
  position: relative;
  font-weight: 700;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--nk-accent);
  border-radius: 2px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .about-content-row {
    flex-direction: column;
  }
  
  .timeline {
    padding-left: 80px;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .timeline-date {
    left: -80px;
    width: 70px;
    font-size: 12px;
  }
  
  .disciplines-grid,
  .facilities-grid,
  .celebrities-grid,
  .statistics-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-links {
    gap: 15px;
  }
  
  .logo-text {
    font-size: 18px;
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>