<template>

  <div class="input-wrapper">
    <g-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="prepend">https://</template>
    </g-input>

    <g-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="append">.com</template>
    </g-input>

    <g-input
      placeholder="请输入姓名"
      clearable
      center
      :value="msg"
      @input="(data) => msg=data"
    >
      <template slot="prepend">https://</template>
      <template slot="append">.com</template>
    </g-input>

    <h1>{{msg}}</h1>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world"
    };
  }
};
</script>

<style scoped lang="scss">
.input-wrapper {
  width: 480px;
  margin: 100px auto;
}
</style>