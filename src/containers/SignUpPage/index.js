import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style';

class SignUpPage extends Component {
   render() {
      const { classes } = this.props;
      return (
         <div id="formLogin">
            <form>
               <h1>SignUp form</h1>
               <input
                  className="text-field"
                  type="text"
                  placeholder="Email or Username"
               />
               <input
                  className="text-field"
                  type="password"
                  placeholder="Password"
               />
               <p>Nhập lại mật khẩu</p>
               <input
                  className="text-field"
                  type="password"
                  placeholder="Enter the Password"
               />
               <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="Tôi đã đọc các chính sách và đồng ý điều khoản"
                  className={classes.fullWidth}
               />
               <a className="btn btn-loginForm" href>
                  SignUp
               </a>
               <p>Or SignUp with</p>
               <div>
                  <a className="btn" href>
                     facebook
                  </a>
                  <a className="btn" href>
                     Google
                  </a>
               </div>
               <span>
                  already have an account ?
                  <Link to="/Login">
                     <a>Login now</a>
                  </Link>
               </span>
            </form>
         </div>
      );
   }
}

export default withStyles(styles)(SignUpPage);
