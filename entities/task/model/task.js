import { defineStore } from 'pinia';
import {normalize, schema} from 'normalizr';
import { typicodeApi } from '@/shared/api';

export const useTaskStore = defineStore('task', {
  state: () => ({
    data: [],
    isListLoading: false,
    isDetailsLoading: false,
    queryConfig: {},
  }),
  getters: {
    isTasksListEmpty: (state) => state.data.length === 0,
    filteredTasks: (state) => Object.values(state.data).filter((task) => (
      state.queryConfig.completed === null || task?.completed === state.queryConfig.completed
    )),
  },
  actions: {
    async getTasksListAsync() {
      this.isListLoading = true;
      try {
        this.data = await typicodeApi.tasks.getTasksList();
      } catch (e) {
        console.log(e);
      } finally {
        this.isListLoading = false;
      }
    },
    async getTaskByIdAsync(taskId) {
      this.isListLoading = true;
      try {
        const data = await typicodeApi.tasks.getTaskById(taskId);
        console.log(data);
      } catch (e) {
        console.log(e);
      } finally {
        this.isListLoading = false;
      }
    },

  }
})