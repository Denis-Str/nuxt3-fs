<script setup>
import { LayoutContent, Result, Button, Spin } from 'ant-design-vue';
import { TaskCard, taskModel } from '@/entities/task';
import { ToggleTask } from '@/features/task/task-toggle';

const taskStore = taskModel.useTaskStore();
taskStore.getTaskByIdAsync();

const isDetailsLoading = computed(() => taskStore.isDetailsLoading);

</script>
<template>
  <NuxtLayout name="custom">
    <LayoutContent class="content">
      <Spin v-if="isDetailsLoading" size="large" />
      <Result
        v-else-if="!taskStore?.task && !isDetailsLoading"
        status="404"
        title="404"
        subTitle="Task was not found"
      >
        <template #extra>
          <NuxtLink to="/"><Button>Back to tasks list</Button></NuxtLink>
        </template>
      </Result>
      <TaskCard
        v-else
        :data="taskStore?.task"
        size="default"
        :loading="isDetailsLoading"
        class="card"
        :bodyStyle="{ height: 400 }"
      >
        <template #actions>
          <ToggleTask :data="taskStore?.task" detail />
        </template>
        <template #extra>
          <NuxtLink to="/">Back to tasks list</NuxtLink>
        </template>
      </TaskCard>
    </LayoutContent>
  </NuxtLayout>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 60%;
}
</style>