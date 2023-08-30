import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    data: [],
    isListLoading: false,
    isDetailsLoading: false,
    queryConfig: {},
  }),
  getters: {
    // isTasksListEmpty: (state) => state.data.length === 0,
    // filteredTasks: (state) => Object.values(state.data).filter((task) => (
    //   state.queryConfig.completed === null || task?.completed === state.queryConfig.completed
    // )),
  },
  // actions: {
  //   increment() {
  //     this.count++
  //   }
  // }
})