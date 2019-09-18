<template>
  <transition name="fade">
    <div v-show="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: ''
    }
  }
}
</script>

<style scoped>
div {
  padding: 18px 20px;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  text-align: center;
  position: fixed;
  top: 30%;
  left: 50%;
  border-radius: 6px;;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size:24px;
  line-height:28px;
}
/* vue动画过渡效果设置 */

</style>