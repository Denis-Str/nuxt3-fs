<script setup>
import { LayoutContent, Row, Col, Spin, Empty } from 'ant-design-vue';

import { taskModel, TaskRow } from '@/entities/task';
import { TaskFilters } from '@/features/task/task-filters';
import { ToggleTask } from '@/features/task/task-toggle';

const taskStore = taskModel.useTaskStore();
taskStore.getTasksListAsync();

const isListLoading = computed(() => taskStore.isListLoading);
const isTasksListEmpty = computed(() => taskStore.isTasksListEmpty);
const filteredTasks = computed(() => taskStore.filteredTasks)

</script>

<template>
  <NuxtLayout>
    <Row justify="center">
      <TaskFilters />
    </Row>
    <LayoutContent class="content">
      <Row :gutter="[0, 20]" justify="center">
        <Spin v-if="isListLoading" size="large" />
        <Empty v-else-if="isTasksListEmpty" description="No tasks found" />
        <template v-else v-for="task in filteredTasks" :key="task?.id">
          <Col :span="24">
            <TaskRow :data="task" :titleHref="`/task-details/${task?.id}`">
              <template #before>
                <ToggleTask :data="task" />
              </template>
            </TaskRow>
          </Col>
        </template>
      </Row>
    </LayoutContent>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.content {
  margin: 40px;
}
</style>