import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('../views/Home.vue');

const Icon = () => import ('../views/Icon.vue');

const Button = () => import ('../views/Button.vue');

const Input = () => import ('../views/Input.vue');
const InputNumber = () => import ('../views/InputNumber.vue');
const Radio = () => import ('../views/Radio.vue');
const Checkbox = () => import ('../views/Checkbox.vue');
const Uploader = () => import ('../views/Uploader.vue');
const Form = () => import ('../views/Form.vue');

const Toast = () => import ('../views/Toast.vue');
const Modal = () => import ('../views/Modal.vue');

const MessageBox = () => import ('../views/MessageBox.vue');
const Message = () => import ('../views/Message.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/icon',
    name: 'icon',
    component: Icon,
  },
  {
    path: '/button',
    name: 'button',
    component: Button,
  },
  {
    path: '/input',
    name: 'input',
    component: Input,
  },
  {
    path: '/inputnumber',
    name: 'inputnumber',
    component: InputNumber,
  },
  {
    path: '/toast',
    name: 'toast',
    component: Toast,
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal,
  },
  {
    path: '/messagebox',
    name: 'messagebox',
    component: MessageBox,
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio,
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox,
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: Uploader,
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
