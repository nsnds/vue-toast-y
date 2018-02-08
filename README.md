# vue-toast-y

### Usage
Install:
```
npm i vue-toast-y
```
Import:
```
import "vue-toast-y"

new Vue({
  el: "#app",
  mounted() {
  	this.$toast.show("hello world!");
  }
})
```
Global:
```
<script src="node_modules/vue-toast-y/dist/vue-toast-y.min.js"></script>
it available in window.VueToastY.default
```

### API
* show(string, {}, cb)

### Settings
Function show(string, {}, cb)

* position {String} 显示的位置 | default: 'center' | possible 'top, bottom'
* direction {String} 动画趋势 | default: 'down' | possible 'up'
* duration {Number} 关闭时间 | default： 2500
* cb {Function} 关闭后回调 | default: null