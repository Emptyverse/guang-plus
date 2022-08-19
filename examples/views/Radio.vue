<template>
  <div>
    <g-radio-group v-model="group_sex">
      <g-radio label="男人">男人</g-radio>
      <g-radio label="女人">女人</g-radio>
      <g-radio label="人妖">人妖</g-radio>
    </g-radio-group>
    <h1>{{group_sex}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group_sex: "男人"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>