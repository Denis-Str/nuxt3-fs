<script setup>
import { taskModel } from '@/entities/task';
import { TaskFilters } from '@/features/task-filters';
import { ToggleTask } from '@/features/toggle-task';

const store = taskModel.useTaskStore();
</script>

<template>
  <NuxtLayout>
    <task-filters />
    <ul>
      <li>
        <toggle-task />
      </li>
      <li>
        <toggle-task />
      </li>
    </ul>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.color {
  color: $primary;
}
</style>