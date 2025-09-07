<template>
  <div id="content">
    <SearchBar @logo-clicked="toggleTab" />
    <LinkGrid />

    <!-- Iframe 容器 -->
    <div id="tab1" class="iframe-container" :class="{ active: isTab1Active }">
        <iframe src="https://chat.oaichat.cc" allowfullscreen></iframe>
    </div>
    <div id="tab2" class="iframe-container" :class="{ active: isTab2Active }">
        <iframe src="https://chat.voct.dev/?token=xiaocilebi" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import LinkGrid from './components/LinkGrid.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    LinkGrid,
  },
  data() {
    return {
      clickCount: 0,
      isTab1Active: false,
      isTab2Active: false,
    };
  },
  methods: {
    toggleTab() {
      this.clickCount++;
      if (this.clickCount % 3 === 1) {
        this.isTab1Active = true;
        this.isTab2Active = false;
      } else if (this.clickCount % 3 === 2) {
        this.isTab1Active = false;
        this.isTab2Active = true;
      } else {
        this.isTab1Active = false;
        this.isTab2Active = false;
      }
    },
  },
};
</script>

<style>
/* 
  全局样式：这些样式会应用到整个页面。
  我原封不动地从您的 homepage.css 中复制了这些规则。
*/
@font-face {
    font-family: 'ZhuziFont';
    src: url('/zhuzi-font.woff2') format('woff2'); /* 注意：路径可能需要调整 */
}

* {
    padding: 0;
    margin: 0;
}
body {
    text-align: center;
    background-color: #ffffff;
    font-family: 'ZhuziFont', sans-serif;
}

/* 
  #content 样式放在这里，因为它包裹了所有组件。
  原封不动地复制。
*/
#content {
    width: 100%;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
}

/*
  Iframe 样式也放在这里，因为它们由 App 组件直接控制。
  原封不动地复制。
*/
.iframe-container {
    height: 0;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.iframe-container.active {
    height: 50vh;
}
.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    overflow: auto;
}
</style>
