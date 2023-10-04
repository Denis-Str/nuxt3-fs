<script setup>
import { Row } from 'ant-design-vue';
import { taskModel } from '@/entities/task';
const taskStore = taskModel.useTaskStore();

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
const { data, titleHref } = props;
const task = computed(() => taskStore.list[props.data.id]);
const isTaskCompleted = computed(() => task.value?.completed)

</script>

<template>
  <Row :class="['root', { completed: isTaskCompleted }]">
    <div class="margin-before">
      <slot name="before" />
    </div>
    <NuxtLink v-if="titleHref" :to="titleHref">{{data?.title}}</NuxtLink>
    <span v-else>{{data?.title}}</span>
  </Row>
</template>

<style scoped>
.root {
  display: flex;
  align-items: center;
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