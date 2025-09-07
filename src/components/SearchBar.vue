<template>
  <div>
    <br>
    <div class="search_part">
      <a class="logo" href="#" @click.prevent="$emit('logo-clicked')">
        <img class="smaller" src="/logo.gif" alt="Logo">
      </a>
      <br>
      <form @submit.prevent="performSearch" class="search_bar">
        <span><input class="search" type="text" v-model="searchText" autocomplete="off" id="search_input"></span>
      </form>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['logo-clicked'],
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    performSearch() {
      if (this.searchText.trim() !== "") {
        window.location.href = "https://www.google.com/search?q=" + this.searchText;
        this.searchText = "";
      }
    },
  },
};
</script>

<style scoped>
/* 
  搜索框专属样式：这些样式只作用于本组件内部。
  我原封不动地从您的 homepage.css 中复制了这些规则。
*/
img.smaller {
    width: 198px;
    height: 94px;
    max-width: 250px;
    animation: flipInX 4s;
    -webkit-animation: flipInX 4s;
}
.logo {
    font-size: 2em;
    white-space: normal;
    word-wrap: break-word;
    text-decoration: none;
    color: #232323;
    cursor: pointer;
    font-family: 'ZhuziFont', sans-serif;
}
#search_input {
    width: 90%;
    height: 45px;
    background-color: transparent;
    border: none;
    outline: 0;
    font-size: 18px;
    color: #426ab3;
    padding: 0 20px;
    border-radius: 50px;
    font-family: 'ZhuziFont', sans-serif;
}
.search_part {
    margin-bottom: 30px;
    margin-top: 20px;
}
span {
    display: block;
    overflow: hidden;
    padding-left: 5px;
    vertical-align: middle;
}
.search_bar {
    box-shadow: 0 0 18px rgba(70, 70, 40, .255);
    -webkit-animation: fadeIn 2.5s;
    animation: fadeIn 2.5s;
    background-color: rgba(255, 255, 255, .100);
    border-radius: 25px;
    display: table;
    vertical-align: middle;
    width: 80%;
    height: 40px;
    max-width: 400px;
    margin: 10px auto;
}
</style>
