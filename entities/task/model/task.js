import {defineStore} from 'pinia';
import {normalize, schema} from 'normalizr';
import {typicodeApi} from '@/shared/api';

export const taskSchema = new schema.Entity('tasks');
export const normalizeTasks = data => normalize(data, [taskSchema]);


export const useTaskStore = defineStore('task', {
  state: () => ({
    data: [],
    task: {},
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
      this.isDetailsLoading = true;
      try {
        this.task = await typicodeApi.tasks.getTaskById(taskId);
      } catch (e) {
        console.log(e);
      } finally {
        this.isDetailsLoading = false;
      }
    },
    toggleTask(task, detail= false) {
      if (detail) this.task = { ...task, completed: !task.completed };
      else {
        this.data = {
          ...this.data,
          [task.id]: {...task, completed: !task.completed}
        };
      }
    }
  }
})