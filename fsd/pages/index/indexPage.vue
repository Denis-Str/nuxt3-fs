<script setup lang="ts">
import {Col, Empty, Layout, Row, Spin} from "ant-design-vue";
import {taskModel, TaskRow} from "~/fsd/entities/task";
import {TaskFilters, ToggleTask} from "~/fsd/features";

const taskStore = taskModel.useTaskStore();
taskStore.getTasksListAsync();

const isListLoading = computed(() => taskStore.isListLoading);
const isTasksListEmpty = computed(() => taskStore.isTasksListEmpty);
const filteredTasks = computed(() => taskStore.filteredTasks)
</script>

<template>
  <div>
    <Row justify="center">
      <TaskFilters />
    </Row>
    <Layout class="content">
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
    </Layout>
  </div>

</template>

<style scoped>
.content {
  margin: 40px;
  flex: 1;
}
</style>