import * as uiTypes from './../constants/uiLoading';

const initialState = {
   showSidebar: false,
};

const uiSidebar = (state = initialState, action) => {
   switch (action.type) {
      case uiTypes.SHOW_SIDEBAR: {
         return { ...state, showSidebar: true };
      }
      case uiTypes.HIDE_SIDEBAR: {
         return { ...state, showSidebar: false };
      }
      default:
         return state;
   }
};

export default uiSidebar;
