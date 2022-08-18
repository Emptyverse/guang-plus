// import CheckboxGroup from './index.vue'

// CheckboxGroup.install = function(Vue) {
//   Vue.component(CheckboxGroup.name, CheckboxGroup)
// }

// export default CheckboxGroup

import CheckBoxGroup from './index.vue'
import './style.scss'

CheckBoxGroup.install = function(Vue) {
  Vue.component(CheckBoxGroup.name, CheckBoxGroup)
}

export default CheckBoxGroup
