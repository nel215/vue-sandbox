import Vue from 'vue';

const data = { obj: {}};
const vm = new Vue({data: data})
Vue.set(data.obj, 1, 'a')
Vue.delete(data.obj, 1)
