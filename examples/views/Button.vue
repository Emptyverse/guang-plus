<template>
  <div>
    <g-button
      type="primary"
      @click="handleClick"
      disabled
    >primary</g-button>
    <g-button
      type="success"
      round
    >success</g-button>
    <g-button
      type="warning"
      icon="info"
    >warning</g-button>
    <g-button
      type="danger"
      @click="handleClick"
    >danger</g-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert(1);
    }
  }
};
</script>

<style scoped>
</style>