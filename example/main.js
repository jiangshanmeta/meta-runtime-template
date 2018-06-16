import Vue from "vue";

import App from "./App";

import metaRuntimeTemplate from 'src/index.js'

Vue.component('metaRuntimeTemplate',metaRuntimeTemplate);

new Vue({
    el:"#app",
    render(h){
        return h(App)
    }
})