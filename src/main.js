// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// ajax
import axios from 'axios'

// api
import api from './api/index.js'

// Muse-UI
import MuseUI from 'muse-ui'    // js
import 'muse-ui/dist/muse-ui.css'  // css

// vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' // css

Vue.config.productionTip = false;

Vue.use(MuseUI);   // 加载MuseUI插件
Vue.use(VueAwesomeSwiper); // 加载 VueAwesomeSwiper轮播图插件

Vue.prototype.$http = axios;
Vue.prototype.$api = api;

// filter
Vue.filter("combineName", function (val) {
	if (!val || val.length === 0) return 'null';
	if (val.length === 1) return !!val[0] ? val[0].name : 'null';
	var arr = [];
	val.forEach(function (v, i) {
		arr.push(!!v ? v.name : 'null');
	});
	return arr.join("/");
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render(h) {
		return h(App);
	},
});

