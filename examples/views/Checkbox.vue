<template>
  <div>

    <g-checkbox-group v-model="hobby">
      <g-checkbox label="篮球">篮球</g-checkbox>
      <g-checkbox label="足球">足球</g-checkbox>
      <g-checkbox label="乒乓球">乒乓球</g-checkbox>
    </g-checkbox-group>

    <p>您选择的爱好是:{{hobby}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobby: ["足球"],
      checked: true
    };
  }
};
</script>