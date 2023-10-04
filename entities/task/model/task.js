import {defineStore} from 'pinia';
import {normalize, schema} from 'normalizr';

export const taskSchema = new schema.Entity('tasks');
export const normalizeTasks = data => normalize(data, [taskSchema]);

export const useTaskStore = defineStore('task', () => {
  let list = ref([]);
  let task = ref({ id: null });
  let isListLoading = ref(false);
  const queryConfig = { completed: null };

  const isTasksListEmpty = computed(() => list.value.length === 0);
  const filteredTasks = computed(() => {
    return Object.values(list.value).filter((task) => (queryConfig.completed === null || task?.completed === queryConfig.completed))
  })

  const getTasksListAsync = async () => {
    try {
      isListLoading.value = true;
      const { data} = await useFetch('/api/typicode/todos');
      const normalizeData = toRaw(data.value);
      // console.log(normalizeTasks(normalizeData).entities['tasks'])
      list.value = normalizeTasks(normalizeData).entities['tasks'];
    } catch (e) {
      console.log(e);
    } finally {
      isListLoading.value = false;
    }
  }

  const getTaskByIdAsync = async () => {
    try {
      const route = useRoute();
      const {id} = route.params;
      const {data} = await useFetch(`/api/typicode/todos/${id}`);
      task = data.value;
    } catch (e) {
      console.log(e);
    }
  }

  const toggleTask = (currentTask, detail = false) => {
    if (detail) task = {...currentTask, completed: !currentTask.completed};
    else {
      list = {
        ...list,
        [task.id]: {...currentTask, completed: !currentTask.completed}
      };
    }
  }


  return {list, task, queryConfig, filteredTasks, isListLoading, isTasksListEmpty, getTasksListAsync, getTaskByIdAsync, toggleTask}
})
