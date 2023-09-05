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
  }
});
const task = computed(() => taskStore.data[props.data.id]);
const isTaskCompleted = computed(() => task.value.completed);
const status = computed(() => taskLib.getTaskStatus(task.value.completed));
const onToggleTask = () => taskStore.toggleTask({ ...props.data });
</script>

<template>
  <Checkbox @click="onToggleTask" :checked="isTaskCompleted">
    <template v-if="isTaskCompleted">{{status}}</template>
  </Checkbox>
</template>

<style scoped>

</style>