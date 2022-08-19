<template>
  <label class="g-radio">
    <span class="g-radio--outer">
      <span
        class="g-radio--inner"
        :class="{'is-checked': isChecked}"
      ></span>
      <input
        class="g-radio-native"
        type="radio"
        :value="label"
        v-model="radioValue"
      >
    </span>
    <span class="g-radio--label">
      {{label}}
    </span>
  </label>
</template>

<script>
export default {
  name: "g-radio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    isGroup() {
      return this.RadioGroup;
    },
    radioValue: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        if (this.isGroup) {
          this.RadioGroup.$emit("input", value);
        } else {
          this.$emit("input", value);
        }
      }
    },
    isChecked() {
      return this.radioValue === this.label;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>