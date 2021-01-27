import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import globalLoading from './../../assets/animationLoading/sEKwt.gif';
import * as uiActions from './../../actions/uiLoading';

class GlobalLoading extends Component {
   render() {
      const { classes, uiLoading } = this.props;
      let xhtml = null;
      if (uiLoading === true) {
         xhtml = (
            <div className={classes.globalLoading}>
               <img
                  src={globalLoading}
                  alt="loading"
                  className={classes.icon}
               />
            </div>
         );
      }
      return xhtml;
   }
}
// eslint-disable-next-line react/no-typos
GlobalLoading.propTypes = {
   classes: PropTypes.object,
   uiLoading: PropTypes.bool,
};
const mapStateToProps = (state) => {
   return {
      uiLoading: state.uiLoading.uiLoading,
   };
};

// const mapDispatchToProps = (dispatch) => {
//    return {
//       uiActionCreators: bindActionCreators(uiActions, dispatch),
//    };
// };
const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
