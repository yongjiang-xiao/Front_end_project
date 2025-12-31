<template>
  <!-- ✅ 只加一个 ref，不改结构 -->
  <section id="map" class="section map-section active" ref="rootRef">
    <div class="container">
      <div class="page">
        <header class="page-header">
          <h1>南开大学交互地图</h1>
          <p>鼠标滑过某栋建筑会发光浮起，点击后高亮锁定并显示对应介绍，按 Esc 取消选择。</p>
        </header>

        <main class="layout">
          <!-- 左侧地图 -->
          <section class="map-panel">
            <div class="map-container">
             <img :src="mapImg" alt="南开大学手绘地图" class="campus-map" />
              <!-- 热点由原 map.js 动态生成 -->
            </div>
          </section>

          <!-- 右侧信息栏 -->
          <aside class="info-panel">
            <div class="info-box">
              <h2 class="info-title" id="info-title">操作提示</h2>
              <div class="info-image-container" id="info-image-container" style="display: none;"></div>
              <p class="info-body" id="info-body">
                鼠标移动到地图上某栋建筑区域，会看到该建筑发光浮起；
                点击后高亮会一直存在，并在右侧显示对应文字介绍。
                按 Esc 取消当前选择。
              </p>
            </div>

            <div class="hint-box">
              <p>操作说明：</p>
              <ul>
                <li>🖱️ 滑过建筑：黄色高亮 + 浮起效果</li>
                <li>🖱️ 左键点击：高亮锁定 + 文字介绍 + 图片</li>
                <li>⎋ Esc：取消高亮，恢复默认提示</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>

    <!-- ✅ 不要音效：不放 audio -->
  </section>
</template>

<script>
import mapImg from "@/assets/images/nk-map.jpg";

export default {
  name: "MapView",

  data() {
    return { mapImg };
  },

  async mounted() {
    const root = this.$refs.rootRef;
    const container = root?.querySelector?.(".map-container");

    // 清理旧热点
    if (container) {
      container.querySelectorAll(".hotspot").forEach((n) => n.remove());
    }

    // 加载原版 map.js
    await import("@/assets/js/map.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));

    // ✅ 关键：同步右侧高度 = 左侧地图高度
    this._mapRoot = root;
    this._syncInfoHeight = () => {
      const left = root.querySelector(".map-container");
      const right = root.querySelector(".info-box");
      if (!left || !right) return;

      const h = Math.round(left.getBoundingClientRect().height);
      if (h > 0) {
        right.style.height = h + "px";
        right.style.maxHeight = h + "px";
        right.style.overflowY = "auto"; // 内容多就在右侧滚动
      }
    };

    const img = root.querySelector(".campus-map");
    if (img) {
      // 图片加载完再同步一次（否则第一次高度可能不准）
      img.addEventListener("load", this._syncInfoHeight);
      if (img.complete) this._syncInfoHeight();
    }

    window.addEventListener("resize", this._syncInfoHeight);

    // 再补一次延迟同步，防止首次渲染/字体加载造成高度变化
    setTimeout(this._syncInfoHeight, 50);
    setTimeout(this._syncInfoHeight, 200);
  },

  beforeUnmount() {
    const root = this._mapRoot;
    const img = root?.querySelector?.(".campus-map");
    if (img && this._syncInfoHeight) img.removeEventListener("load", this._syncInfoHeight);
    if (this._syncInfoHeight) window.removeEventListener("resize", this._syncInfoHeight);
  },
};
</script>



<style src="@/assets/css/global.css"></style>
<style src="@/assets/css/map.css"></style>

