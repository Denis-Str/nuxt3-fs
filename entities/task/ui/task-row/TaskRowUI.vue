<script setup>
import { Row } from 'ant-design-vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  titleHref: {
    type: String,
    default: '',
  }
});
const { data, titleHref } = props;

</script>

<template>
  <Row :class="['root', { 'completed': data?.completed }]">
    <div class="margin-before">
      <slot name="before" />
    </div>
    <RouterLink v-if="titleHref" :to="titleHref">{{data?.title}}</RouterLink>
    <span v-else>{{data?.title}}</span>
  </Row>
</template>

<style scoped>
.root {
  background: #fff;
  padding: 20px;
  transition: 0.25s;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

.margin-before {
  margin-right: 10px;
}
</style>