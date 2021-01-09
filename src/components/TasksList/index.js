import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import TasksItem from '../TasksItem';

class TasksList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item key={status.value} md={4} xs={12}>
        <Box mt={4} mb={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return <TasksItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TasksList);
