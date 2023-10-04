export default defineEventHandler(async () => {
  return $fetch('https://jsonplaceholder.typicode.com/todos');
})