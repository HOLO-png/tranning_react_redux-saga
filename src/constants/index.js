import AdminPageContainer from '../containers/AdminPageContainer';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import TasksBoard from '../containers/TasksBoard/index';
export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
   {
      value: 0,
      label: 'READY',
   },
   {
      value: 1,
      label: 'IN PROGRESS',
   },
   {
      value: 2,
      label: 'COMPLETED',
   },
];
export const LIST_TASKS = [
   {
      id: 0,
      title: 'Swim',
      description: 'im go swiming to pool',
      status: 0,
   },
   {
      id: 1,
      title: 'go to school',
      description: 'im go to school',
      status: 2,
   },
   {
      id: 3,
      title: 'see YouTuBe',
      description: 'im see youtube school pool',
      status: 1,
   },
];
export const STATUS_CODE = {
   SUCCESS: 200,
   CREATED: 201,
   UPDATED: 202,
};
export const ADMIN_ROUTES = [
   // to create routes you need to path: url, name: label of routes there, exact default Home must have
   {
      path: '/',
      name: 'Admin page',
      exact: true,
      component: AdminPageContainer, //  create AdminPageContainer to distingush routes other together
      icon: 'account_box',
      // create in container because it represent for original 1 page, but 1page be lying in 1 container
   },
   {
      path: '/admin/task-board',
      name: 'Manage word page',
      exact: false,
      component: TasksBoard,
      icon: 'task_alt',
      // this is page manage task job
   },
]; // after create is complete, you need to add Router in AppContainer, import into the
export const USER_ROUTES = [
   {
      path: '/Login',
      name: 'Login-user',
      component: LoginPage,
   },
   {
      path: '/SignUp',
      name: 'SignUp-user',
      component: SignUpPage,
   },
];
