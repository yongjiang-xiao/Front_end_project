<template>
  <!-- 只保留原 HTML 的 main 内容（SPA 里 header/footer 通常在 App.vue 里统一做） -->
  <main class="main-content">
    <!-- service-title：来自原 HTML -->
    <div class="service-title">
      <h1>社团活动</h1>
      <p>探索南开大学丰富多彩的社团文化，发现志同道合的朋友，拓展兴趣爱好</p>
    </div>

    <!-- breadcrumb：结构照原来 -->
    <div class="breadcrumb">
      <div class="breadcrumb-container">
        <router-link class="breadcrumb-item" to="/">首页</router-link>
        <span class="breadcrumb-separator">/</span>
        <router-link class="breadcrumb-item" to="/life">生活服务</router-link>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">社团活动</span>
      </div>
    </div>

    <!-- filter-section：照原来“社团分类” -->
    <div class="filter-section">
      <div class="filter-container">
        <div class="filter-title">
          <i class="fas fa-filter"></i>
          <h2>社团分类</h2>
        </div>

        <div class="filter-buttons">
          <button
            v-for="c in categories"
            :key="c.key"
            class="filter-btn"
            :class="{ active: currentCategory === c.key }"
            @click="currentCategory = c.key"
          >
            {{ c.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- clubs-grid：使用 TransitionGroup 添加切换动画 -->
    <div class="clubs-container">
      <TransitionGroup
        name="club-fade"
        tag="div"
        class="clubs-grid"
        id="clubsGrid"
      >
        <div
          v-for="club in filteredClubs"
          :key="club.name"
          class="club-card"
          :data-category="club.category"
          @click="openModal(club)"
        >
          <h3 class="club-name">{{ club.name }}</h3>
          <p class="club-desc">{{ club.desc }}</p>
          <div class="club-tags">
            <span class="tag" v-for="t in club.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- modal：结构照原 HTML（id 也保留） -->
    <div
      class="modal"
      id="clubModal"
      :class="{ open: showModal }"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>

        <div class="modal-header">
          <div class="modal-icon">
            <i class="fas fa-users"></i>
          </div>
          <h2 id="modalClubName">{{ selectedClub?.name || "社团名称" }}</h2>
        </div>

        <div class="modal-body">
          <div class="club-detail">
            <h3>社团简介</h3>
            <p id="modalClubDesc">{{ selectedClub?.desc || "社团描述" }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { CLUBS, CLUB_CATEGORIES } from "@/assets/js/clubActivities";


export default {
  name: "ClubActivities",
  data() {
    return {
      clubs: CLUBS,
      categories: CLUB_CATEGORIES,
      currentCategory: "all",
      showModal: false,
      selectedClub: null,
      
    };
  },
  computed: {
    filteredClubs() {
      if (this.currentCategory === "all") return this.clubs;
      return this.clubs.filter((c) => c.category === this.currentCategory);
    },
  },
 methods: {
  openModal(club) {
    this.selectedClub = club;
    this.showModal = true;

    // 记住原来的 overflow，避免影响其他页面
    this._prevBodyOverflow = document.body.style.overflow;
    this._prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  },

  closeModal() {
    this.showModal = false;

    // 恢复原值（比直接 "" 更安全）
    document.body.style.overflow = this._prevBodyOverflow || "";
    document.documentElement.style.overflow = this._prevHtmlOverflow || "";

    // 可选：顺手清掉选中
    this.selectedClub = null;
  },

  onKeydown(e) {
    if (e.key === "Escape" && this.showModal) this.closeModal();
  },
},

  mounted() {
  window.addEventListener("keydown", this.onKeydown);
},

beforeUnmount() {
  window.removeEventListener("keydown", this.onKeydown);

  // 兜底：防止切路由时仍锁住滚动
  document.body.style.overflow = this._prevBodyOverflow || "";
  document.documentElement.style.overflow = this._prevHtmlOverflow || "";
},

deactivated() {
  // 如果你有 <keep-alive>，组件不会卸载，会走这里
  document.body.style.overflow = this._prevBodyOverflow || "";
  document.documentElement.style.overflow = this._prevHtmlOverflow || "";
},

};
</script>

<style scoped src="@/assets/css/club-activities.css"></style>

<style scoped>
/* 社团列表切换动画 */
.club-fade-enter-active,
.club-fade-leave-active {
  transition: all 0.3s ease;
}

.club-fade-enter-from,
.club-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* 分类按钮切换动画 */
.filter-btn {
  transition: all 0.2s ease;
}

.filter-btn.active {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

