import styles from './Styles';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TasksBoard from './../TasksBoard/TasksBoard';
import theme from './../../commons/Theme/Theme';
class App extends Component {
  render() {
    console.log('this Props:', this.props);
    // const {classes} = this.props;
    return (
      // <div className="App">
      //    <h1>HoangLong</h1>
      //    <Button variant="contained" color="secondary" href="#contained-buttons">
      //       Link
      //    </Button>
      //    <Button variant="contained" color="secondary" href="#contained-buttons" disableElevation>
      //       Link
      //    </Button>
      //    <Button color="primary">Link</Button>
      //    <Button variant="outlined" color="primary" href="#outlined-buttons">
      //       Link
      //    </Button>

      //    <div className={classes.box}>
      //       <div className={classes.shape}>
      //          ReactJs
      //       </div>
      //       <div className={classes.shape}>
      //          AngularJs
      //       </div>
      //       <div className={classes.shape}>
      //          VueJs
      //       </div>
      //    </div>
      // </div>
      <ThemeProvider theme={theme}>
        <TasksBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App); // dispatch function styles and App into the withStyles to css in js :);
