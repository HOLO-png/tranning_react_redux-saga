// import * as tasksApi from './../apis/tasks';
import * as tasksTypes from './../constants/tasks';
import { STATUSES } from './../constants/index';

export const fetchListTasks = (params = {}) => {
   return {
      type: tasksTypes.FETCH_TASKS,
      payload: {
         params,
      },
   };
};

export const fetchListTasksSuccess = (data) => {
   return {
      type: tasksTypes.FETCH_TASKS_SUCCESS,
      payload: {
         data,
      },
   };
};

export const fetchListTasksError = (error) => {
   return {
      type: tasksTypes.FETCH_TASKS_ERROR,
      payload: {
         error,
      },
   };
};
// eslint-disable-next-line import/prefer-default-export
// export const fetchListTasksRequest = () => {
//    return (dispatch) => {
//       dispatch(fetchListTasks());
//       tasksApi
//          .getList()
//          .then((res) => {
//             dispatch(fetchListTasksSuccess(res.data));
//          })
//          .catch((error) => {
//             dispatch(fetchListTasksError(error));
//          });
//    };
// };

// eslint-disable-next-line import/prefer-default-export
export const searchTask = (keyWord) => {
   return {
      type: tasksTypes.SEARCH_TASK,
      payload: {
         keyWord,
      },
   };
};

export const searchTaskSuccess = (data) => {
   return {
      type: tasksTypes.SEARCH_TASK_SUCCESS,
      payload: {
         data,
      },
   };
};

export const searchTaskError = (error) => {
   return {
      type: tasksTypes.SEARCH_TASK_ERROR,
      payload: {
         error,
      },
   };
};

export const addTask = (title, description) => {
   return {
      type: tasksTypes.ADD_TASK,
      payload: {
         title,
         description,
      },
   };
};

export const addTaskSuccess = (data) => {
   return {
      type: tasksTypes.ADD_TASK_SUCCESS,
      payload: {
         data,
      },
   };
};

export const addTaskError = (error) => {
   return {
      type: tasksTypes.ADD_TASK_SUCCESS,
      payload: {
         error,
      },
   };
};

export const editTask = (taskItem) => {
   return {
      type: tasksTypes.EDIT_TASK,
      payload: {
         taskItem,
      },
   };
};

export const updateTask = (title, description, status = STATUSES[0].value) => {
   return {
      type: tasksTypes.UPDATE_TASK,
      payload: {
         title,
         description,
         status,
      },
   };
};

export const updateTaskSuccess = (data) => {
   return {
      type: tasksTypes.UPDATE_TASK_SUCCESS,
      payload: {
         data,
      },
   };
};

export const updateTaskError = (error) => {
   return {
      type: tasksTypes.UPDATE_TASK_SUCCESS,
      payload: {
         error,
      },
   };
};

export const deleteTask = (id) => {
   // only take id to find task corresponding
   return {
      type: tasksTypes.DELETE_TASK,
      payload: {
         id,
      },
   };
};

export const deleteTaskSuccess = (data) => {
   return {
      type: tasksTypes.DELETE_TASK_SUCCESS,
      payload: {
         data,
      },
   };
};

export const deleteTaskError = (error) => {
   return {
      type: tasksTypes.DELETE_TASK_SUCCESS,
      payload: {
         error,
      },
   };
};
