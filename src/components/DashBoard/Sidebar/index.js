import {
   CssBaseline,
   Divider,
   Drawer,
   Icon,
   IconButton,
   List,
   ListItem,
   withStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../../../commons/Theme/Theme';
import { ADMIN_ROUTES } from '../../../constants';
import styles from './styles';

class Sidebar extends Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       open: false,
   //    };
   // }
   toggleDrawer = (value) => {
      const { onToggleSidebar } = this.props;
      if (onToggleSidebar) {
         onToggleSidebar(value);
      }
   };
   handleDrawerClose = (value) => {
      const { onToggleSidebar } = this.props;
      if (onToggleSidebar) {
         onToggleSidebar(value);
         console.log(onToggleSidebar);
      }
   };
   closeMenu = (open) => {
      const { onToggleSidebar } = this.props;
      if (onToggleSidebar) {
         onToggleSidebar(open);
      }
   };
   renderDrawer = () => {
      const { classes } = this.props;
      let xhtml = null;
      xhtml = (
         <div className={classes.list} role="presentation">
            <List component="div">
               {ADMIN_ROUTES.map((item, index) => {
                  return (
                     <NavLink
                        to={item.path}
                        exact={item.exact}
                        className={classes.menuItem}
                        activeClassName={classes.menuLinkActive}
                        key={item.path}
                        onClick={() => this.closeMenu(false)}
                     >
                        <Icon className={classes.IconItem}>{item.icon}</Icon>
                        <ListItem
                           key={index}
                           className={classes.listItem}
                           button
                        >
                           {item.name}
                        </ListItem>
                     </NavLink>
                  );
               })}
            </List>
            <Divider />
         </div>
      );
      return xhtml;
   };
   render() {
      const { classes, showSidebar } = this.props;
      console.log(showSidebar);
      return (
         <div className={classes.drawer}>
            <CssBaseline />
            <Drawer
               // anchor={showSidebar}
               open={showSidebar}
               // variant="permanent"
               onClose={() => this.toggleDrawer(false)}
               className={classes.drawerPaper}
            >
               <div className={classes.drawerHeader}>
                  <IconButton onClick={() => this.handleDrawerClose(false)}>
                     {showSidebar === false ? (
                        <ChevronRightIcon />
                     ) : (
                        <ChevronLeftIcon />
                     )}
                  </IconButton>
               </div>
               {this.renderDrawer()}
            </Drawer>
         </div>
      );
   }
}
export default withStyles(styles)(Sidebar);
// show table menu for user see to they may optional
// to create dashboard then you must create 3 component : 1_Content, 2_header_contain_menu, 3_Sabar(the icon toggle sabar )
