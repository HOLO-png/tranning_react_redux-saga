import * as uiTypes from './../constants/uiLoading';

const initialState = {
   uiLoading: false,
   // showSidebar: false,
};

const uiLoading = (state = initialState, action) => {
   switch (action.type) {
      case uiTypes.SHOW_LOADING: {
         return { uiLoading: true };
      }
      case uiTypes.HIDE_LOADING: {
         return { uiLoading: false };
      }
      // case uiTypes.SHOW_SIDEBAR: {
      //    return { ...state, showSidebar: true };
      // }
      // case uiTypes.HIDE_SIDEBAR: {
      //    return { ...state, showSidebar: false };
      // }
      default:
         return state;
   }
};

export default uiLoading;
