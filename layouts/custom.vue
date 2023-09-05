<script setup>
import { Layout } from "ant-design-vue";

</script>

<template>
  <Layout class="root">
    <slot />
  </Layout>
</template>

<style scoped lang="scss">
.root {
  height: 100%;
}
</style>