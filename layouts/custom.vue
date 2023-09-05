<script setup>
import { Layout } from "ant-design-vue";

</script>

<template>
  <div class="content">
    <Layout class="root">
      <slot />
    </Layout>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>