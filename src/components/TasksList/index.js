import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
// import Button from '@material-ui/core/Button';
import TasksItem from '../TasksItem';

class TasksList extends Component {
   render() {
      const { classes, tasks, status, onEditTask, onDeleTask } = this.props;
      // take event from component other, you need to props again
      // dispatch for container TaskBoard because it help handling beside asions,saga, reducers, store
      return (
         <Grid
            item
            key={status.value}
            md={4}
            xs={12}
            className={classes.listTasks}
         >
            <Box mt={4} mb={1}>
               <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
               {tasks.map((task) => {
                  return (
                     <TasksItem
                        task={task}
                        status={status}
                        key={task.id}
                        onEditTask={onEditTask}
                        onDeleTask={onDeleTask} // take from TaskItem because taskItem is child of TaskList
                     />
                  );
               })}
            </div>
         </Grid>
      );
   }
}
export default withStyles(styles)(TasksList);
