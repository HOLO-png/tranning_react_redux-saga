import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';
import { Link } from 'react-router-dom';

class Loginpage extends Component {
   render() {
      return (
         <div id="formLogin">
            <form>
               <h1>Login form</h1>
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
               <a className="btn btn-loginForm" href>
                  Login
               </a>
               <p>Or login with</p>
               <div>
                  <a className="btn" href>
                     facebook
                  </a>
                  <a className="btn" href>
                     Google
                  </a>
               </div>
               <span>
                  not a member ?
                  <Link to="/SignUp">
                     <a>Signup now</a>
                  </Link>
               </span>
            </form>
         </div>
      );
   }
}

export default withStyles(styles)(Loginpage);
