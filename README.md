# UI library For Vue

# guang-plus

## 安装
```
npm install guang-plus -S
```
### 使用

#### 全局引入

```
import GuangUI from 'guang-ui'
```
```
import 'guang-ui/lib/gui.css'
```
```
Vue.use(GuangUI)
```
#### 按需引入

```
import { Button } from 'guang-ui'
```

```
Vue.use(Button)
```



## Prerequisites

- npm >=v6.12.0
- node >=12.13.0

## Components & Feature

- [x] Button     `g-button`
- [x] Icon          `g-icon`
- [x] Input 输入框       `g-input`
- [x] InputNumber 计数器          `g-inputnumber`
- [x] Uploader 上传图片           `g-uploader`
- [x] Radio 单选框            `g-radio`
- [x] Checkbox 复选框             `g-checkbox`
- [x] Form 表单               `g-form`
- [x] Toast 表单              `g-toast`
- [x] Message 消息提示               `g-message`
- [x] Messagebox 弹窗            `g-messagebox`
- [x] Modal 复杂弹窗             `g-modal`
- [x] 支持按需加载组件
## Vue Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
