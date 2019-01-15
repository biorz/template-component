<script>
  export default {
    data() {
      return {
        url: require('../assets/images/figure-2.png'),
        url2: require('../assets/images/compo-1.png'),
        url3: [require('../assets/images/figure-1.png'),require('../assets/images/figure-2.png')]
      };
    },

    methods:{
      previewList() {
        this.$imageview({images: [this.url, this.url2], index: 1})
      }
    }
  }
</script>

## image-view 图片预览

预览图片

### 使用方法

通过指令```v-imageview```调用

:::demo
```html
<template>
  <img :src="url" v-imageview>
</template>
<script>
  import ImageView from 'ymm-design/packages-biz/image-view/index.js';
  import Vue from 'vue'

  ImageView.install(Vue)

  export default {
    name: 'imageview'
  }
</script>
```
:::

通过指令```v-imageview```传入数组和索引
:::demo
```html
<template>
  <div>
    <img v-for="(it, i) in url3" :src="it" v-imageview="{images: url3, index: i}"/>
  </div>
</template>
<script>
  import ImageView from 'ymm-design/packages-biz/image-view/index.js';
  import Vue from 'vue'

  ImageView.install(Vue)

  export default {
    name: 'imageview',
    data() {
      return {
        url3: [require('../assets/images/figure-1.png'),require('../assets/images/figure-2.png')]
      }
    }
  }
</script>
```
:::


通过`this.$imageview({images: list, index: index})` 调用，```images```为图片url的数组，从```index```位置开始

:::demo
```html
<template>
  <el-button @click="previewList">查看</el-button>
</template>
<script>
  export default {
    name: 'imageview',
    data() {
      return {
        url: require('../assets/images/figure-2.png'),
        url2: require('../assets/images/compo-1.png')
      };
    },

    methods:{
      previewList() {
        this.$imageview({images: [this.url, this.url2], index: 1}) // index从0开始
      }
    }
  }
</script>
```
:::

