const BASE_URL = 'todos';

export const getTasksList = async () => $fetch(`/typicodeApi/${BASE_URL}`);

export const getTaskById = async taskId => $fetch(`/typicodeApi/${BASE_URL}/${taskId}`);