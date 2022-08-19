<template>
  <div>
    <g-button
      type="primary"
      @click="showToast"
    >点击出现Toast</g-button>
  </div>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toast({
        message: "hello world!",
        duration: 3000,
        onClose: () => {
          alert("关闭了");
        }
      });

      setTimeout(() => {
        this.$toast({
          message: "hello world!",
          duration: 3000,
          onClose: () => {
            alert("关闭了");
          }
        });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>