<script setup>
import { RadioButton, RadioGroup } from 'ant-design-vue';
import { taskModel } from '@/entities/task';
import { filtersList, getFilterById, DEFAULT_FILTER } from './config';

const taskStore = taskModel.useTaskStore();
const isListLoading = computed(() => taskStore.isListLoading);
const defaultFilter = ref(DEFAULT_FILTER);

const onFilterClick = (id) => taskStore.queryConfig = getFilterById(id).config;

</script>

<template>
  <radio-group buttonStyle="solid" v-model:value="defaultFilter">
    <template v-for="{ title, id } in filtersList" :key="title">
      <radio-button
        :value="id"
        :disabled="isListLoading"
        @change="onFilterClick(id)"
      >
        {{title}}
      </radio-button>
    </template>
  </radio-group>
</template>

<style scoped>
</style>