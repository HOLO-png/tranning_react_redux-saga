import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import task from './task';
import uiLoading from './uiLoading';
import modal from './modal';
import uiSidebar from './uiSidebar';
const rootReducer = combineReducers({
   task,
   uiLoading,
   modal,
   form: formReducer,
   uiSidebar,
});

export default rootReducer;
