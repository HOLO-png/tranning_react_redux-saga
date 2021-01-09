import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-duplicates
import { STATUSES } from '../../constants/index';
// eslint-disable-next-line import/no-duplicates
import { LIST_TASKS } from '../../constants/index';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import TasksList from '../../components/TasksList/index';
import TasksForm from '../../components/TasksForm';
import styles from './Styles';

class TasksBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // eslint-disable-next-line react/sort-comp
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  // eslint-disable-next-line react/sort-comp
  renderBoard() {
    // const {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {STATUSES.map((status, index) => {
          const taskFiltered = LIST_TASKS.filter(
            (task) => task.status === status.value,
          );
          return <TasksList tasks={taskFiltered} status={status} key={index} />;
        })}
        ;
      </Grid>
    );
    return xhtml;
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    const { open } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <TasksForm open={open} onClose={this.handleClose} />
    );
  }

  render() {
    const { classes } = this.props;
    // const [open, setOpen] = React.useState(false);
    let xhtml = null;
    const { classes } = props;
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
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TasksBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TasksBoard);
