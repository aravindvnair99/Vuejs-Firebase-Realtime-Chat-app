import Vue form 'vue'
import Router from 'vue-router'
import Chat form './components/Chat.vue'
import Room form './components/Room.vue'
import AddRoom from './components/AddRoom.Vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat/:nickname/:roomid/:roomname',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/room/:nickname',
    name: 'RoomList',
    component: Room
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
