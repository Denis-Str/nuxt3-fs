export default defineEventHandler(async (event) => {
  // $fetch('/api/submit', { method: 'post', body: { test: 123 } })
  // const body = await readBody(event)

  // в компоненте const { data } = await useFetch('/api/hello/nuxt?age=3')
  console.log(event.context)
  const name = getRouterParam(event, 'name')
  const { age } = getQuery(event)
  return `Hello, ${name}, you are ${age}!`
  // return {
  //   hello: 'world'
  // }
  // const { data } = await useFetch('/api/hello')
  //  в компоненте можно получить из data.value
})