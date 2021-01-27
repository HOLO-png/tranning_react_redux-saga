import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as uiActions from './../../actions/uiLoading';
import styles from './styles';
import Header from './Header/index';
import Sidebar from './Sidebar/index';

class DashBoard extends Component {
   onToggleSidebar = (value) => {
      const { uiSideActionCreators } = this.props;
      const { hideSidebar, showSidebar } = uiSideActionCreators;
      if (value === true) {
         showSidebar();
      } else {
         hideSidebar();
      }
   };
   render() {
      const { children, classes, name, icon, showSidebar } = this.props;
      // console.log(showSidebar);
      return (
         <div className={classes.dashboard}>
            <Header
               name={name}
               icon={icon}
               showSidebar={showSidebar}
               onToggleSidebar={this.onToggleSidebar}
            />
            <div className={classes.wrapper}>
               <Sidebar
                  showSidebar={showSidebar}
                  onToggleSidebar={this.onToggleSidebar}
               />
               <div
                  className={cn(classes.wrapperContent, {
                     [classes.shiftLeft]: showSidebar === false,
                  })}
               >
                  {children}
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      showSidebar: state.uiSidebar.showSidebar,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      uiSideActionCreators: bindActionCreators(uiActions, dispatch),
   };
};

export default compose(withStyles(styles))(
   connect(mapStateToProps, mapDispatchToProps)(DashBoard),
);

// phần này mình sẽ hiển thị danh sách chung của các route component, nhận đc children từ component Adminlayout phục vụ cho việc ấy
// phần children này bao component của AdminLayoutRoute nên sẽ hiển thị ra component đó
