<script setup lang="ts">
import { Checkbox } from 'ant-design-vue';
import { taskModel, taskLib } from '@/entities/task';
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
  detail: {
    type: Boolean,
    default: false,
  }
});
const task = computed(() => props.detail ? taskStore.task : taskStore.list[props.data.id]);
const isTaskCompleted = computed(() => task.value?.completed);
const status = computed(() => taskLib.getTaskStatus(task.value?.completed));
const onToggleTask = () => taskStore.toggleTask({ ...props.data }, props.detail);
</script>

<template>
  <Checkbox @click="onToggleTask" :checked="isTaskCompleted">
    <template v-if="detail">{{ status }}</template>
    <template v-else>
      <div v-if="isTaskCompleted">{{status}}</div>
    </template>
  </Checkbox>
</template>

<style scoped>

</style>