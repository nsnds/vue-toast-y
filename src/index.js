import vueToastPlugin from "./vue-toast-y.vue";

var VueToastY = {};
let showToast = false,     //toast状态
    toastVM = null;     //toast vm

VueToastY.install = function (Vue, options) {
  // 默认配置
  let opt = {
    duration: 2500,		//关闭时间
    position: "center",    //显示位置
    direction: "down"    //过渡方向
  }

  // 处理用户传入的配置
  if (typeof options === "object") {
  	for (let key in options) {
  	  opt[key] = options[key]
  	}
  }

  // 插件基础业务逻辑
  Vue.prototype.$toast = function(msg, option, cb) {
    // 处理用户传入的配置
    if (typeof option === "object") {
      for (let key in option) {
        opt[key] = option[key]
      }
    }

    // toast显示时不再执行
    if (showToast) {
      return;
    }

    // toastVM不存在时
    if (!toastVM) {
      // 创建vue构造器
      const ToastController = Vue.extend(vueToastPlugin);

      // 创建vue实例
      toastVM = new ToastController().$mount(document.createElement("div"));
      // 插入DOM
      document.body.appendChild(toastVM.$el);
    }

  	toastVM.msg = msg;
  	toastVM.visible = showToast = true;
    toastVM.position = opt.position;
    toastVM.direction = opt.direction;

  	setTimeout(() => {
  	  toastVM.visible = showToast = false;

      if (cb && typeof cb === "function") {
        setTimeout(() => {
          cb();
        }, 400);
      }
  	}, opt.duration);
  }

  // 显示时的业务逻辑
  Vue.prototype.$toast.show = (msg, option, cb)=> {
    Vue.prototype.$toast(msg, option, cb);
  }

  // 成功后的业务逻辑
  Vue.prototype.$toast.loading = (msg, option)=> {
    Vue.prototype.$toast(msg, opt);
  }

}

if (typeof window != "undefined" && window.Vue) {
  window.Vue.use(VueToastY);
}

export default VueToastY;