# vue-photoswipe-preview

> A vue-photoswipe-preview on phtotswipe

## Build Setup

``` 
# npm install vue-photoswipe-preview -s 
```
<template>
  <div id="app">
    <div class="preview-img-list">
        <img class="preview-img-item" v-for="(item, index) in items"
            :src="item.src" @click="$photoswipe.open(index, items)">
    </div>
  </div>
</template>
## data () {
    return {
       items: [{
                    src: require('./assets/Chrysanthemum.jpg') ,
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
##  图片格式如上 , w , h 必须  
## 在需要预览的图片上添加点击事件 @click="$photoswipe.open(index, items)
params : index 图片的索引 ，items 全部图片的列表 ， 
$photoswipe.close()
在调用组件销毁时 this.$photoswipe.close()   方法为关闭预览弹窗的方法。
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
