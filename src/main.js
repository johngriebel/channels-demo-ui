import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import DraftRoom from './components/DraftRoom'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: 'landing', name: 'landing', component: LandingPage},
    { path: 'draft-room', name: 'draft-room', component: DraftRoom},
    { path: '', component: Login },

  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
