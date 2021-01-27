// import Button from '@material-ui/core/Button';
import './../../App.css';
import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // import complete then must put them together
import CssBaseline from '@material-ui/core/CssBaseline';
// import TasksBoard from './../TasksBoard/index';
import theme from '../../commons/Theme/Theme';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Styles';
import configureStore from '../../redux/configureStore';
import GlobalLoading from '../../components/GlobalLoading/index';
import ModalCop from '../../components/ModalCop.';
import AdminLayoutRoute from '../../commons/AdminLayout';
import UserLayoutRoute from './../../commons/UserLayout';
import { ADMIN_ROUTES, USER_ROUTES } from '../../constants';

const store = configureStore();
// now they render the routes, to pour container out routes
// import Switch to show the routes corresponding// import route
// have 2 way species route 1 was of taskboard , 2 was page Login

class App extends Component {
   renderAdminRoute = () => {
      let xhtml = null;
      // eslint-disable-next-line no-undef
      // console.log(ADMIN_ROUTES);
      xhtml = ADMIN_ROUTES.map((route) => {
         return (
            <AdminLayoutRoute
               name={route.name}
               key={route.path}
               component={route.component}
               exact={route.exact}
               path={route.path}
               icon={route.icon}
            />
         );
      });
      return xhtml;
   };
   renderUserRoute = () => {
      let xhtml = null;
      xhtml = USER_ROUTES.map((route) => {
         return (
            <UserLayoutRoute
               name={route.name}
               key={route.path}
               component={route.component}
               // exact={route.exact}
               path={route.path}
               // icon={route.icon}
            />
         );
      });
      return xhtml;
   };
   render() {
      // const {classes} = this.props;
      return (
         <Provider store={store}>
            {/* integration in here to future import react-router-dom for redux-from */}
            <Router>
               <ThemeProvider theme={theme}>
                  {/* <TasksBoard /> */}
                  <Switch>
                     {' '}
                     {/* distingush page taskboard and page Login */}{' '}
                     {/* integration Swich here to show Taskboard, write the method to pay about các route corresponding */}
                     {this.renderAdminRoute()}
                     {this.renderUserRoute()}
                     {/* write function here you write like this */}
                     {/* because use common need to create it in commons */}
                     {/* create 2 pageLayout private for 2 function other */}
                     {/* use to distingush 2 page, 1 page have dashboard, 1 page not dasboard, truyền vào key, component from router. component, exact, path */}
                     {/* create commons AdminLayoutRoute complete then import into the shared */}
                  </Switch>
                  {/* đc đặt trong switch nên renderAdminRoute sẽ hiển thị ra trước và đè lên các component khác */}
                  {/* renderAdminRoute làm nhiệm vụ truyền các param Route AdminLayoutPage ra AdminLayoutPage và Dashboard để Dashboard hiển thị */}
                  <GlobalLoading />
                  <ModalCop />
                  <ToastContainer />
                  <CssBaseline />
               </ThemeProvider>
            </Router>
         </Provider>
      );
   }
}

export default withStyles(styles)(App); // dispatch function styles and App into the withStyles to css in js :);
