<template>

  <label class="g-checkbox">

    <span class="g-checkbox--outer">
      <span
        class="g-checkbox--inner"
        :class="{'is-checked': isChecked}"
      ></span>
      <input
        type="checkbox"
        class="g-checkbox-native"
        :value="label"
        v-model="CKValue"
      >

    </span>

    <span class="checkbox__label">
      {{label}}
    </span>

  </label>

</template>

<script>
export default {
  name: "g-checkbox",
  inject: {
    CKGroup: {
      default: ""
    }
  },
  props: {
    label: String,
    value: [Boolean, Array]
  },
  computed: {
    isChecked() {
      if (this.isGroup) {
        return this.CKGroup.value.includes(this.label);
      } else {
        if (typeof this.value === "boolean") {
          return this.value;
        }
        return this.value.includes(this.label);
      }
    },
    isGroup() {
      return this.CKGroup;
    },
    CKValue: {
      get() {
        return this.isGroup ? this.CKGroup.value : this.value;
      },
      set(value) {
        if (this.isGroup) {
          this.CKGroup.$emit("input", value);
        } else {
          this.$emit("input", value);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>