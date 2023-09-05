<script setup lang="ts">
import { Checkbox } from 'ant-design-vue';
import { taskModel, taskLib } from '@/entities/task';
const taskStore = taskModel.useTaskStore();

import { computed } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      completed: false,
      title: '',
      value: '',
    }),
  }
});
const { data: { id, completed } } = props;
const task = computed(() => taskStore.data[id]);
const isTaskCompleted = computed(() => completed)
const status = computed(() => taskLib.getTaskStatus(completed));

// const toggleTask = () => store.commit(taskModel.mutations.toggleTask, taskId.value);
const onToggleTask = () => taskStore.toggleTask(task, id);
</script>

<template>
  <Checkbox @click="onToggleTask" :checked="isTaskCompleted">
    {{ task }}
    <template v-if="isTaskCompleted">{{status}}</template>
  </Checkbox>
</template>

<style scoped>

</style>