import { defineStore } from 'pinia';
import {normalize, schema} from 'normalizr';
import { typicodeApi } from '@/shared/api';

export const NAMESPACE = 'tasks';
export const taskSchema = new schema.Entity(NAMESPACE);
export const normalizeTask = data => normalize(data, taskSchema);
export const normalizeTasks = data => normalize(data, [taskSchema]);


export const useTaskStore = defineStore('task', {
  state: () => ({
    data: [],
    isListLoading: false,
    isDetailsLoading: false,
    queryConfig: {
      completed: null
    },
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
        // const response = await typicodeApi.tasks.getTasksList();
        // console.log(response)
        // this.data = normalizeTasks(await typicodeApi.tasks.getTasksList()).entities[NAMESPACE];
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
    toggleTask(task, id) {
      console.log(task, id)
      const newData = {
        ...this.data,
        [id]: { ...task, completed: !task.completed }
      }
      this.data = newData;
    }
  }
})