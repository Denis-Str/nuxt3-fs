export default defineEventHandler(async (event) => {
  const todoID = getRouterParam(event, 'todoID');
  return $fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
})