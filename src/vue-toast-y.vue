<template>
  <transition v-bind:name="'fade-' + direction">
  	<div class="m-toast" v-show="visible" v-bind:class="position">{{msg}}</div>
  </transition>
</template>
<style lang="scss">
  .m-toast {
  	position: fixed;
  	transform: translate(-50%, -50%);
  	max-width: 60%;
  	background-color: rgba(0, 0, 0, 0.62);
  	color: white;
  	border-radius: 5px;
  	padding: 10px 15px;
  	text-align: center;
  	line-height: 100%;
  	font-size: 14px;
  	overflow: hidden;

	/* 淡入淡出-down */
  	&.fade-down-enter-active {
	  transition: all 0.4s;
  	}
  	&.fade-down-leave-active {
  	  transition: all 0.4s;
  	}
  	&.fade-down-enter, &.fade-down-leave-to {
  	  transform: translate(-50%, -100%);
  	  opacity: 0;
  	}

	/* 淡入淡出-up */
	&.fade-up-enter-active {
	  transition: all 0.4s;
  	}
  	&.fade-up-leave-active {
  	  transition: all 0.4s;
  	}
  	&.fade-up-enter, &.fade-up-leave-to {
  	  transform: translate(-50%, 0);
  	  opacity: 0;
  	}

	/* 显示位置 */
	&.top {
  	  top: 10%;
	  right: auto;
	  bottom: auto;
  	  left: 50%;
  	}
	&.center {
	  top: 50%;
	  right: auto;
	  bottom: auto;
  	  left: 50%;
	}
  	&.bottom {
  	  top: auto;
	  right: auto;
	  bottom: 10%;
  	  left: 50%;
  	}
  }
</style>
<script>
  export default {
  	data () {
  	  return {
  	  	msg: "this is a msg!",
  	  	visible: false,
  	  	position: "center",
  	  	direction: "down"
  	  }
  	}
  }
</script>