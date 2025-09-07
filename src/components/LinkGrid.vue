<template>
  <div>
    <!-- 使用 v-for 循环 links 数组来动态生成前四个链接 -->
    <div class="box" v-for="link in topRowLinks" :key="link.name">
      <a :href="link.href" target="_self" class="click"></a>
      <p><img class="icon" :src="link.imgSrc" :alt="link.name"></p>
      <p class="url">{{ link.name }}</p>
    </div>
    <br>
    <!-- 动态生成后四个链接 -->
    <div class="box" v-for="link in bottomRowLinks" :key="link.name">
      <a :href="link.href" target="_self" class="click"></a>
      <p><img class="icon" :src="link.imgSrc" :alt="link.name"></p>
      <p class="url">{{ link.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkGrid',
  data() {
    return {
      links: [
        { href: 'https://g.co/kgs/3DGUEMA', imgSrc: '/tianqi.png', name: '天气' },
        { href: 'https://www.pornhub.com', imgSrc: '/dy.svg', name: '成人' },
        { href: 'https://www.twitter.com/', imgSrc: '/tt.png', name: '推特' },
        { href: 'https://theporndude.com/', imgSrc: '/zhihu.svg', name: '导航' },
        { href: 'https://translate.google.com/?source=osdd&sl=zh-CN&tl=en&op=translate', imgSrc: '/fanyi.svg', name: '翻译' },
        { href: 'https://m.bilibili.com/', imgSrc: '/bilibili.png', name: 'B站' },
        { href: 'https://linux.do/', imgSrc: '/LinuxDo.png', name: 'LinuxDo' },
        { href: 'https://lobe-chat-dahai913.vercel.app', imgSrc: '/LobeChat.png', name: 'LobeChat' },
      ],
    };
  },
  computed: {
    // 计算属性，用于分割链接到两行，以完美复刻原始的 <br> 换行
    topRowLinks() {
      return this.links.slice(0, 4);
    },
    bottomRowLinks() {
      return this.links.slice(4, 8);
    },
  },
};
</script>

<style scoped>
/* 
  链接网格专属样式：这些样式只作用于本组件内部。
  我原封不动地从您的 homepage.css 中复制了这些规则。
*/
.box {
    -webkit-animation: fadeInDown 1s;
    animation: fadeInDown 1s;
    position: relative;
    display: inline-block;
    width: 75px;
    border: 0;
}
.box a {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.url {
    color: #000;
    height: 1.5em;
    line-height: 1.5em;
    width: 72px;
    font-size: 0.75em;
    white-space: nowrap;
    overflow: hidden;
    margin: auto;
    -webkit-border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    padding-top: 3px;
    padding-bottom: 8px;
    font-family: 'ZhuziFont', sans-serif;
}
.icon {
    width: 3em;
    height: 3em;
    max-width: 72px;
}
</style>
