<script setup>
import { Layout, LayoutContent, Row, TypographyTitle } from 'ant-design-vue';

  useHead({
  title: 'Nuxt 3 FSD',
})
</script>

<template>
  <Layout class="default-layout-component">
    <LayoutContent class="default-layout-component">
      <Row justify="center" class="toolbar">
        <TypographyTitle :level="1">Tasks list</TypographyTitle>
      </Row>
    </LayoutContent>
    <slot />
  </Layout>
</template>

<style scoped>
.default-layout-component {
  min-height: 100%;

  .toolbar {
    margin-top: 40px;
  }
}
</style>