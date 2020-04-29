import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Router from "./config/router";
import VueRouter from "vue-router"
import VueMq from 'vue-mq';
import "aos/dist/aos.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(VueMq, {
	breakpoints: {
		sm: 960,
		md: 1250,
		lg: Infinity,
	},
});

new Vue({
	vuetify,
	router: Router,
	render: (h) => h(App),
}).$mount("#app");
