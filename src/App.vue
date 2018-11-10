<template>
  <div id="app">
     <div class="preview-img-list">
        <img class="preview-img-item" v-for="(item, index) in items"
            :src="item.src" @click="$photoswipe.open(index, items)">
    </div>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       items: [{
                    src: require ('./assets/Chrysanthemum.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Desert.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Hydrangeas.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Jellyfish.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Koala.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Lighthouse.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Penguins.jpg'),
                    w: 1024,
                    h: 768
                }, {
                    src: require('./assets/Tulips.jpg'),
                    w: 1024,
                    h: 768
                }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.preview-img-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.preview-img-item {
    margin: 5px;
    max-width: 100px;
    max-height: 100px;
}
</style>
