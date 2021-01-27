import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import styles from './styles';

class TasksItem extends Component {
   render() {
      const { classes, task, status, onEditTask, onDeleTask } = this.props;
      // because no have Ditpatch and just ditpatch for component need you props onEditTask and onDeleTask
      // ditpatch for taskList
      return (
         <Card key={task.id} className={classes.cardTask}>
            <CardContent>
               <Grid container justify="space-between">
                  <Grid item md={8}>
                     <h4>{task.title}</h4>
                  </Grid>
                  <Grid item md={4}>
                     <h3>{status.label}</h3>
                  </Grid>
               </Grid>
               <Typography component="p">{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
               <Button size="small"></Button>
               <Fab
                  color="primary"
                  aria-label="edit"
                  className={classes.fab}
                  size="small"
                  onClick={() => onEditTask(task)}
               >
                  <Icon fontSize="small">edit_icon</Icon>
               </Fab>
               <Fab
                  color="secondary"
                  aria-label="edit"
                  className={classes.fab}
                  size="small"
                  onClick={() => onDeleTask(task)} // catch event for icon delete already ditpatch task for component other
               >
                  <Icon fontSize="small">delete_icon</Icon>
               </Fab>
            </CardActions>
         </Card>
      );
   }
}
export default withStyles(styles)(TasksItem);
