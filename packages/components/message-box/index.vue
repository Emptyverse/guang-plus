<template>
  <div class="mask">
    <transition name="message-fade">
      <div
        class="g-message-box"
        v-if="visible"
      >
        <div class="g-message-box__header">
          {{title}}
        </div>
        <div class="g-message-box__content">
          {{content}}
        </div>
        <div class="g-message-box__footer">
          <template v-if="type==='confirm'">
            <g-button
              size="small"
              @click="clickHandle('cancel')"
            >取消</g-button>
          </template>
          <g-button
            type="primary"
            size="small"
            @click="clickHandle('confirm')"
          >确定</g-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "温馨提示"
    },
    content: {
      type: String,
      default: ""
    },
    onOk: Function,
    onCancel: Function,
    type: {
      type: String,
      default: "confirm"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    this.createElement();
  },
  methods: {
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    clickHandle(type) {
      if (type === "cancel") {
        this.onCancel();
      } else {
        this.onOk();
      }
      this.close();
    },
    close() {
      this.visible = false;
    },
    destroyElement() {
      this.$destroy();
    }
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>