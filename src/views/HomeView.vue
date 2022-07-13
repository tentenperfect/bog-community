<template>
  <div class="home">
    <el-button type="primary">Primary</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <input type="text" placeholder="我是input输入框" v-focus>
    <span v-timeformatter>{{timestamp}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
  data() {
    return {
      direction: 'right',
      timestamp: 1624452193
    }
  },
  methods: {
  },
//   directives: {
//     focus: {
//       // 指令的定义
//       mounted(el) {
//         el.focus()
//       }
//     }
// }

})
</script>
<style lang="less">
</style>
