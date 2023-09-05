<script setup>
import { Card } from 'ant-design-vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      id: '',
      completed: false,
      title: '',
      value: '',
    }),
  },
  titleHref: {
    type: String,
    default: '',
  }
});

</script>

<template>
  <Card :title="`Task# ${props.data.id || ''}`" class="root">
    <NuxtLink v-if="titleHref" :to="titleHref">{{props.data?.title}}</NuxtLink>
    <span v-else>{{props.data?.title}}</span>
    <slot />
    <template #actions>
      <slot name="actions" />
    </template>
    <template #extra>
      <slot name="extra" />
    </template>
  </Card>
</template>

<style scoped>
.root {
  padding: 40px;

  & + & {
    margin: 20px;
  }
}
</style>