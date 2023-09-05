import {defineStore} from 'pinia';
import {normalize, schema} from 'normalizr';
import {typicodeApi} from '@/shared/api';

export const taskSchema = new schema.Entity('tasks');
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
        this.data = normalizeTasks(await typicodeApi.tasks.getTasksList()).entities['tasks'];
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
    toggleTask(task) {
      this.data = {
        ...this.data,
        [task.id]: {...task, completed: !task.completed}
      };
    }
  }
})