import axiosSevies from '../commons/axiosSevies/AxiosSevies';
import { API_ENDPOINT } from './../constants/index';
import qs from 'query-string'; // dispatch qs in query-string to search tasks in list task

// http://localhost:3000/tasks
const url = 'tasks';

// eslint-disable-next-line import/prefer-default-export
export const getList = (params = {}) => {
   let queryParams = '';
   if (Object.keys(params).length > 0) {
      queryParams = `?${qs.stringify(params)}`;
   }
   return axiosSevies.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
// http://localhost:3000/tasks: POST
export const addTask = (data) => {
   return axiosSevies.post(`${API_ENDPOINT}/${url}`, data);
};

// http://localhost:3000/tasks: PUT
export const updateTask = (data, taskId) => {
   // other than api addTask, updateTask need id to find out Task need edit
   return axiosSevies.put(`${API_ENDPOINT}/${url}/${taskId}`, data); // transmossion more taskId into the url to find task
};

export const deleteTask = (taskId) => {
   // other than api addTask, updateTask need id to find out Task need edit
   return axiosSevies.delete(`${API_ENDPOINT}/${url}/${taskId}`); // transmossion more taskId into the url to find task
};
// additional put into the axiosSevies
