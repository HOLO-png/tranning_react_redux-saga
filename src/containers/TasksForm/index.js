import React, { Component } from 'react';
import { withStyles, MenuItem } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import * as tasksActions from './../../actions/tasks';
import * as modalActions from './../../actions/modal';
// import IconButton from '@material-ui/core/IconButton';
import { CONTACT_FORM } from '../../constants/form';
import renderTextField from './../../components/FieldForm/index';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styles from './styles';
import validate from './validate';
import SelectField from '../../components/SelectField';

// React-native-drag-sort keo tha reactjs
class TasksForm extends Component {
   // eslint-disable-next-line react/sort-comp
   handleSubmitForm = (data) => {
      // you use this function to check update and add, have 2 way: taskItem, status, add: taskItem=null, status=null
      console.log(data);
      const { tasksActionCreators, taskItem } = this.props;
      const { addTask, updateTask } = tasksActionCreators;
      const { title, description, status } = data;
      if (taskItem && taskItem.id) {
         updateTask(title, description, status);
      } else {
         addTask(title, description);
      } // have taskItem and taskItemId then call updateTask opposite call addTask
   };
   componentDidMount() {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.initialize(this.props.initialValues);
   }
   renderSelectField = () => {
      const { taskItem, classes } = this.props;
      // const { title, description } = taskItem;
      let xhtml = null;
      if (taskItem && taskItem.id) {
         xhtml = (
            <div className={classes.selectField}>
               <Button
                  // variant="contained"
                  // color="secondary"
                  className={classes.buttonSelect}
                  startIcon={<Icon>nfc</Icon>}
                  // onClick={hideModal}
               >
                  <h6>Work Status:</h6>
               </Button>
               <Field
                  id="status"
                  label="Status of job"
                  className={classes.select}
                  rowsMax={6}
                  // variant="outlined"
                  // margin="normal"
                  name="status"
                  component={SelectField}
                  // value={taskItem ? taskItem.title : ''}
                  // validate={validate}
                  // validate={[this.required, this.minLength15]}
               >
                  <MenuItem value={0}>Ready</MenuItem>
                  <MenuItem value={1}>In Progress</MenuItem>
                  <MenuItem value={2}>Completed</MenuItem>
               </Field>
            </div>
         );
      }
      return xhtml;
   };
   required = (value) => {
      let error = 'Please re-enter a title for this input box!!';
      if (value !== null && typeof value !== 'undefined' && value !== '') {
         error = null;
      }
      return error;
      // console.log(value);
   };
   minLength15 = (value) => {
      let error = null;
      if (value.length > 15) {
         error = 'job name must be less than 15 characters!!';
      }
      return error;
   };
   render() {
      // eslint-disable-next-line react/prop-types
      const {
         classes,
         handleSubmit,
         invalid,
         submitting,
         modalActionCreators,
         // taskItem,
         initialValues,
      } = this.props;
      const { hideModal } = modalActionCreators;
      // console.log(initialValues);
      return (
         <form onSubmit={handleSubmit(this.handleSubmitForm)}>
            <Grid className={classes.content}>
               <Grid item md={12} classname={classes.textFieldGird}>
                  <Button
                     // variant="contained"
                     // color="secondary"
                     className={classes.button}
                     startIcon={<Icon>border_color</Icon>}
                     // onClick={hideModal}
                  >
                     <h3>Work name:</h3>
                  </Button>

                  {/* <TextField
                     id="outlined-multiline-flexible"
                     label="Enter the job name"
                     multiline
                     rowsMax={6}
                     variant="outlined"
                     className={classes.textField}
                  /> */}
                  <Field
                     id="title"
                     label="Enter the job name"
                     className={classes.textField}
                     rowsMax={6}
                     variant="outlined"
                     margin="normal"
                     name="title"
                     component={renderTextField}
                     // value={taskItem ? taskItem.title : ''}
                     // validate={validate}
                     // validate={[this.required, this.minLength15]}
                  />
               </Grid>
               <Grid item md={12} classname={classes.textFieldGird}>
                  <Button
                     // variant="contained"
                     // color="secondary"
                     className={classes.button}
                     startIcon={<Icon>description</Icon>}
                     // onClick={hideModal}
                  >
                     <h3>Work description:</h3>
                  </Button>
                  {/* <TextField
                     id="outlined-multiline-flexible"
                     label="Enter the job description"
                     multiline
                     rowsMax={6}
                     variant="outlined"
                     className={classes.textField}
                  /> */}
                  <Field
                     id="description"
                     label="Enter the job description"
                     multiline
                     rowsMax={6}
                     variant="outlined"
                     className={classes.textField}
                     name="description"
                     component={renderTextField}
                     // value={taskItem ? taskItem.description : ''}
                     // validate={validate}
                  />
               </Grid>
               {this.renderSelectField()}
               <Grid item md={12} className={classes.ActionGird}>
                  <Button
                     variant="contained"
                     color="secondary"
                     className={classes.button}
                     endIcon={<Icon>delete</Icon>}
                     onClick={hideModal}
                  >
                     Cancel
                  </Button>
                  <Button
                     disabled={invalid || submitting}
                     variant="contained"
                     color="primary"
                     className={classes.button}
                     endIcon={<Icon>save</Icon>}
                     type="submit"
                  >
                     Submit
                  </Button>
               </Grid>
            </Grid>
         </form>
      );
   }
}

TasksForm.propTypes = {
   classes: PropTypes.object,
};
const ContactForm = reduxForm({
   form: CONTACT_FORM,
   validate,
   keepDirtyOnReinitialize: true,
   initialValues: true,
});
const mapStateToProps = (state) => {
   return {
      taskItem: state.task.taskItems,
      initialValues: state.task.taskItems,
   };
};

const mapDispatchtoProps = (dispatch) => {
   return {
      tasksActionCreators: bindActionCreators(tasksActions, dispatch),
      modalActionCreators: bindActionCreators(modalActions, dispatch),
   };
};

export default compose(
   withStyles(styles),
   ContactForm,
)(connect(mapStateToProps, mapDispatchtoProps)(TasksForm));
