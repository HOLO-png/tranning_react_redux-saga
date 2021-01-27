import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchTask extends Component {
   render() {
      const { classes, onHandleChange } = this.props;
      return (
         <div className="searchTask">
            <h3>SearchTask</h3>
            <form className={classes.root} noValidate autoComplete="off">
               <TextField
                  autoComplete="off"
                  id="standard-basic"
                  label="Search Tasks of you"
                  className={classes.TextField}
                  onChange={onHandleChange}
               />
               <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SearchIcon />}
               >
                  Search
               </Button>
            </form>
         </div>
      );
   }
}
SearchTask.propTypes = {
   classes: PropTypes.object,
   onHandleChange: PropTypes.func,
};

export default withStyles(styles)(SearchTask);
