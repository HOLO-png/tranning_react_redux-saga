import * as tasksTypes from './../constants/tasks';
import { toastError, toastSuccess } from './../commons/toastHelpel/toastHelper';
import {
   MES_ADD_TASK_SUCCESS,
   MES_UPDATE_TASK_SUCCESS,
   MES_DELETE_TASK_SUCCESS,
} from '../constants/message';

const initialState = {
   listTasks: [],
   taskItems: null,
};

const task = (state = initialState, action) => {
   switch (action.type) {
      case tasksTypes.FETCH_TASKS: {
         return {
            ...state,
            listTasks: [],
         };
      }
      case tasksTypes.FETCH_TASKS_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listTasks: data,
         };
      }
      case tasksTypes.FETCH_TASKS_ERROR: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            listTasks: [],
         };
      }
      case tasksTypes.SEARCH_TASK_SUCCESS: {
         const { data } = action.payload;
         return {
            ...state,
            listTasks: data,
         };
      }
      case tasksTypes.ADD_TASK: {
         return {
            ...state,
            taskItems: null,
         };
      }
      case tasksTypes.ADD_TASK_SUCCESS: {
         const { data } = action.payload;
         toastSuccess(MES_ADD_TASK_SUCCESS);
         return {
            ...state,
            listTasks: [data].concat(state.listTasks),
         };
      }
      case tasksTypes.ADD_TASK_ERROR: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            error,
         };
      }
      case tasksTypes.EDIT_TASK: {
         const { taskItem } = action.payload;
         return {
            ...state,
            taskItems: taskItem,
         };
      }
      case tasksTypes.UPDATE_TASK: {
         // no need to do anything then update because it useful to just call Saga
         return {
            ...state,
         }; // to just do such is enough
      }
      case tasksTypes.UPDATE_TASK_SUCCESS: {
         const { data } = action.payload; // pick data from Saga
         const { listTasks } = state; // pick listTasks from state
         const index = listTasks.findIndex((item) => item.id === data.id); // find element in listTask have contain id like id form data
         toastSuccess(MES_UPDATE_TASK_SUCCESS); // only need import and use( mind import correct to use), insert more message to notification
         if (index !== -1) {
            const newList = [
               ...listTasks.slice(0, index),
               data,
               ...listTasks.slice(index + 1), // pick elemnent from index to the end
            ]; // pick element from 0 -> index(not included index), insert data sent Saga into the listTask, after concatenasion elements standing behing
            return {
               ...state,
               listTasks: newList,
            }; // return about state and lictTask taken into the NewList
         } // you new establist add new task , not yet establist update task then you into the taskFrom to check when update when add
         return {
            ...state,
            listTasks: [data].concat(state.listTasks),
         };
      }
      case tasksTypes.UPDATE_TASK_ERROR: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            error,
         };
      }
      case tasksTypes.DELETE_TASK: {
         // no need to do anything then update because it useful to just call Saga
         return {
            ...state,
         }; // to just do such is enough
      }
      case tasksTypes.DELETE_TASK_SUCCESS: {
         const { data: taskId } = action.payload; // pick data from Saga,take task id, change the data to taskId
         // const { listTasks } = state;
         toastSuccess(MES_DELETE_TASK_SUCCESS);
         return {
            ...state,
            listTasks: state.listTasks.filter((item) => item.id !== taskId), // filter task and removed this task out listTask
         };
      } // after delete success then show message success for user know( you into the toastHelper to enter data)
      case tasksTypes.DELETE_TASK_ERROR: {
         const { error } = action.payload;
         toastError(error);
         return {
            ...state,
            error,
         };
      }
      default:
         return state;
   }
};
export default task;
