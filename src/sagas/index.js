import {
   fork,
   take,
   call,
   put,
   delay,
   takeLatest,
   select,
   takeEvery,
} from 'redux-saga/effects';
import {
   fetchListTasksSuccess,
   fetchListTasksError,
   searchTaskSuccess,
   addTaskSuccess,
   addTaskError,
   fetchListTasks,
   updateTaskSuccess,
   updateTaskError,
   deleteTaskSuccess,
   deleteTaskError,
   // updateTask,
} from './../actions/tasks';
import * as taskTypes from './../constants/tasks';
import { showLoading, hideLoading } from './../actions/uiLoading';
import { getList, addTask, updateTask, deleteTask } from './../apis/tasks';
import { STATUS_CODE, STATUSES } from './../constants/index';
import { hideModal } from '../actions/modal';

// tiến trình, chức năng cũng như vai trò của redux-saga:
// Bước 1: tạo gnerator function để action.
// Bước 2: Thực thi action fetch tasks.
// Bước 2.1: hiển thị thanh tiến trình (loading...).
// Bước 3: Kiểm tra status code.
// Nếu thành công ...
// Nếu thất bại ...
// Bước 4: tắt Loading
// Bước 5: Thực thi các công việc tiếp theo.
function* watchFetchListTasksAction() {
   while (true) {
      const actions = yield take(taskTypes.FETCH_TASKS);
      yield put(showLoading());
      const { params } = actions.payload;
      // console.log(params);
      const resp = yield call(getList, params);
      const { status, data } = resp;
      const { SUCCESS, UPDATED, CREATED } = STATUS_CODE;
      if (status === SUCCESS) {
         yield put(fetchListTasksSuccess(data));
      } else {
         yield put(fetchListTasksError(data));
      }
      yield delay(500);
      yield put(hideLoading());
   }
}
function* watchCreateTasksAction() {
   yield true;
   // console.log('Watch create tasks action');
}

function* searchTaskSaga({ payload }) {
   yield delay(500);
   const { keyWord } = payload;
   // console.log(keyWord);
   yield put(fetchListTasks({ q: keyWord }));
   // console.log(actions);
   // const { keyWord } = payload;
   // const list = yield select((state) => state.task.listTasks);
   // const filteredTask = list.filter((task) =>
   //    task.title.trim().toLowerCase().includes(keyWord.trim().toLowerCase()),
   // );
   // yield put(searchTaskSuccess(filteredTask));
}
function* addTaskSaga({ payload }) {
   // when the user click into the buttom submit then new implementasion addTaskSaga
   const { title, description } = payload;
   yield delay(500);
   yield put(showLoading());
   const resp = yield call(addTask, {
      title,
      description,
      status: STATUSES[0].value,
   }); // dispatch payload for apis addTask
   // console.log(resp.status);
   const { data, status } = resp;
   if (status === STATUS_CODE.CREATED) {
      yield put(addTaskSuccess(data));
      yield put(hideModal());
   } else {
      yield put(addTaskError(data));
   }
   yield delay(500);
   yield put(hideLoading());
}
function* updateTaskSaga({ payload }) {
   // To updateTask you need pick id , have 2 way to pick idTask is access into the store in reduser and pick in actions updateTask have idTask
   const { title, description, status } = payload;
   const taskEditing = yield select((state) => state.task.taskItems); // use Select to pick idTask in store
   yield put(showLoading()); // show loading for user know
   const resp = yield call(
      updateTask,
      {
         title,
         description,
         status,
      },
      taskEditing.id, // access id for task api to update
   ); // dispatch payload for apis addTask
   const { data, status: statusCode } = resp; // status be coincide name with status above need you must be change name
   console.log(data);
   if (statusCode === STATUS_CODE.SUCCESS) {
      // json-server when the update success then it return SUCCESS(200)
      yield put(updateTaskSuccess(data)); // transmission data after call api finished
      yield put(hideModal()); // no hideModal to user know yourself need to what next work
   } else {
      yield put(updateTaskError(data));
   }
   yield delay(1000); // show loading at least 1s to no problem jerky
   yield put(hideLoading());
   // you need to write reduser cho updatetaskSaga then it is already finished running
}

function* deleteTaskSaga({ payload }) {
   const { id } = payload;
   yield put(showLoading());
   const resp = yield call(deleteTask, id);
   const { data, status } = resp; // status be coincide name with status above need you must be change name
   console.log(data);
   if (status === STATUS_CODE.SUCCESS) {
      // json-server when the update success then it return SUCCESS(200)
      yield put(deleteTaskSuccess(id)); // transmission data after call api finished
      yield put(hideModal()); // no hideModal to user know yourself need to what next work
   } else {
      yield put(deleteTaskError(data));
   }
   yield delay(1000); // show loading at least 1s to no problem jerky
   yield put(hideLoading());
   // you need to write reduser cho updatetaskSaga then it is already finished running
}

export default function* generatorFuncSaga() {
   yield fork(watchFetchListTasksAction);
   yield fork(watchCreateTasksAction);
   // yield takeEvery(taskTypes.SEARCH_TASK, searchTaskSaga); // takeEvery dùng đẻ chạy ngay chạy lun chạy ko cần biết các hành động của người hoặc web , và nó sẽ chạy mà chẳng chú ý đến delay trong giống như takeLatest
   yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga);
   yield takeLatest(taskTypes.ADD_TASK, addTaskSaga); // takelatest dùng để dừng hành động của người dùng trong 1 khoản thời gian nào đó để loaddata và nó thực hiện hành động cuối cùng
   yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga); //
   yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}
