import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TasksForm extends Component {
  render() {
    var { open, onClose, classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        rowsMax={10}
        className={classes.dialog}
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
          {/* <Icon>format_list_bulleted_icon</Icon> */}
          <h3>Form Add New Word Of Your</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Work name:</DialogContentText>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter the job name"
            multiline
            rowsMax={4}
            variant="outlined"
            className={classes.textField}
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Work description:</DialogContentText>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter the job description"
            multiline
            rowsMax={4}
            variant="outlined"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Disagree
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TasksForm);
