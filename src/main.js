// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false


// Scrolls
import VueScrollClass from 'vue-scroll-class'
Vue.use(VueScrollClass)


// APIs
import VueResource from 'vue-resource'
Vue.use(VueResource)


// Date Formatting
import VueMoment from 'vue-moment'
Vue.use(VueMoment)


// Instagram
import VueInstagram from 'vue-instagram'
Vue.use(VueInstagram)


// Form Validation
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
