import React, { Component } from 'react';
import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-duplicates
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/no-cycle
import { STATUSES } from '../../constants/index';
// eslint-disable-next-line import/no-duplicates
// import { LIST_TASKS } from '../../constants/index';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import TasksList from '../../components/TasksList/index';
// eslint-disable-next-line import/no-cycle
import TasksForm from '../TasksForm';
// eslint-disable-next-line import/no-cycle
import * as tasksActions from '../../actions/tasks';
import * as modalActions from '../../actions/modal';
import SearchTask from '../../components/SearchTask/index';
import styles from './styles';

class TasksBoard extends Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       open: false,
   //    };
   // }

   componentDidMount() {
      const { tasksActionCreators } = this.props;
      // const { fetchListTasksRequest } = tasksActionCreators;
      const { fetchListTasks } = tasksActionCreators;
      // fetchListTasksRequest();
      fetchListTasks();
   }

   // eslint-disable-next-line react/sort-comp
   // handleClose = () => {
   //    this.setState({
   //       open: false,
   //    });
   // };

   onHandleChange = (event) => {
      const { value } = event.target;
      // eslint-disable-next-line react/prop-types
      const { tasksActionCreators } = this.props;
      // eslint-disable-next-line react/prop-types
      const { searchTask } = tasksActionCreators;
      // fetchListTasksRequest();
      searchTask(value);
   };

   // eslint-disable-next-line react/sort-comp
   showSearchTask = () => {
      let xhtml = null;
      xhtml = <SearchTask onHandleChange={this.onHandleChange} />;
      return xhtml;
   };

   onEditTask = (taskItem) => {
      const { tasksActionCreators, modalActionCreators } = this.props;
      const { editTask } = tasksActionCreators;
      editTask(taskItem);

      const {
         showModal,
         changeModalTitle,
         changeModalContent,
      } = modalActionCreators;
      showModal();
      changeModalTitle('Edit The Work');
      changeModalContent(<TasksForm />);
   };
   showModalDelete = (task) => {
      const { tasksActionCreators, modalActionCreators, classes } = this.props;
      const { hideModal } = modalActionCreators;
      const {
         showModal,
         changeModalTitle,
         changeModalContent,
      } = modalActionCreators;
      showModal(); // show modal
      changeModalTitle('Delete The Work'); // put title for modal
      changeModalContent(
         <div className={classes.modalDelete}>
            <div className={classes.modalConfigText}>
               <h3 className={classes.modalTitle}>
                  Are you sure want to delete{' '}
                  <span className={classes.modalTextBold}>{task.title}</span> ?
               </h3>
            </div>
            <Box display="flex" flexDirection="row-reverse" mt={5} mb={2}>
               <Box ml={1}>
                  <Button
                     variant="contained"
                     color="secondary"
                     onClick={hideModal} // because use action in 1 function then must you do it like this
                  >
                     Cancel
                  </Button>
               </Box>
               <Box>
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={() => this.onDeleTask(task)}
                     // in 1 function to dispatch data for 1 function other, you do it like this
                  >
                     Agree
                  </Button>
               </Box>
            </Box>
         </div>,
      ); // show modal deleteTask for user know to adjusted
   };

   onDeleTask = (task) => {
      const { tasksActionCreators } = this.props;
      // const { fetchListTasksRequest } = tasksActionCreators;
      const { deleteTask } = tasksActionCreators;
      // fetchListTasksRequest();
      deleteTask(task.id);
      console.log(task.id);
   };
   // eslint-disable-next-line react/sort-comp
   renderBoard = () => {
      // const {classes} = this.props;
      const { LIST_TASKS, classes } = this.props; //
      let xhtml = null;
      xhtml = (
         <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.tasksListBoard}
         >
            {STATUSES.map((status, index) => {
               const taskFiltered = LIST_TASKS.filter(
                  (task) => task.status === status.value,
               );
               return (
                  <TasksList
                     tasks={taskFiltered}
                     status={status}
                     key={index}
                     onEditTask={this.onEditTask}
                     onDeleTask={this.showModalDelete}
                     // because it take and handling then no need props, to can do it you more This into the
                     // take onDeleTask from taskList because taskList is child of TaskBoard
                     // take and handling
                  />
               );
            })}
            ;
         </Grid>
      );
      return xhtml;
   };

   handleClickOpen = () => {
      const { tasksActionCreators } = this.props;
      // const { fetchListTasksRequest } = tasksActionCreators;
      const { editTask } = tasksActionCreators;
      // fetchListTasksRequest();
      editTask(null);
      const { modalActionCreators } = this.props;
      const {
         showModal,
         changeModalTitle,
         changeModalContent,
      } = modalActionCreators;
      showModal();
      changeModalTitle('Add New Work');
      changeModalContent(<TasksForm />);
   };

   // renderForm = () => {
   //    const { open } = this.state;
   //    return (
   //       // eslint-disable-next-line react/jsx-filename-extension
   //       <TasksForm open={open} onClose={this.handleClose} />
   //    );
   // };

   render() {
      const { classes } = this.props;
      // const [open, setOpen] = React.useState(false);
      return (
         <div className={classes.tasksBoard}>
            <Button
               variant="contained"
               color="primary"
               href="#contained-buttons"
               onClick={this.handleClickOpen}
            >
               <AddIcon />
               ADD NEW WORK
            </Button>
            {this.showSearchTask()}
            {this.renderBoard()}
            {/* {this.renderForm()} */}
         </div>
      );
   }
}

TasksBoard.propTypes = {
   classes: PropTypes.object,
   tasksActionsCreators: PropTypes.shape({
      // fetchListTasksRequest: PropTypes.func,
      fetchListTasks: PropTypes.func,
      searchTask: PropTypes.func,
   }),
   modalActionCreators: PropTypes.shape({
      showModal: PropTypes.func,
      hideModal: PropTypes.func,
      changeModalTitle: PropTypes.func,
      changeModalContent: PropTypes.func,
   }),
};
const mapStateToProps = (state) => {
   return {
      LIST_TASKS: state.task.listTasks,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      tasksActionCreators: bindActionCreators(tasksActions, dispatch),
      modalActionCreators: bindActionCreators(modalActions, dispatch),
   };
};

export default withStyles(styles)(
   connect(mapStateToProps, mapDispatchToProps)(TasksBoard),
);
