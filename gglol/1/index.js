var Vue = require('vue');


import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//vue 跨域$http
var VueResource = require('vue-resource');
Vue.use(VueResource);

//引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

//引入路由 vue 2.0版本 需要用es6 的方法引入
// var VueRouter = require('vue-router');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({
    //保存
    state: {
        isbottomPopup: false,
        isleftPopup: false,
        title:'',
        bool:true
    },
    //设置 通过mutations设置的值来改变state
    mutations: {
        set_open: function(state, data) {
            state.isleftPopup = data
        },
        set_close: function(state, data) {
            state.isbottomPopup = data
        },
        set_title:function(state,data){
            state.title = data
        },
        set_show:function(state,data){
            state.bool =  data;
        }
    }

})
console.log(store)
var Index = require('./components/index.vue')

var Detail = require('./components/detail.vue')
var News = require('./components/channels/news.vue')
var Player = require('./components/channels/players.vue')
var Search = require('./components/channels/search.vue')
var Heros = require('./components/channels/voides.vue')


var router = new VueRouter({
    routes: [{
        path: '/index',
        component: Index,
        children: [{
            path: '/news/:id',
            component: News
        }, {
            path: '/players/:id',
            component: Player

        }, {
            path: '/search/:id',
            component: Search
        }, {
            path: '/voides/:id',
            component: Heros
        },{
             path:'/detail/:id',
                component: Detail
        }]
    }, {
        path: '/',
        redirect: '/news/1'
    }]
})



new Vue({
    router: router,
    store: store
}).$mount('#lol')
