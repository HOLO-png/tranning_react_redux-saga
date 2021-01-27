import React, { Component } from 'react';
import {
   AppBar,
   Badge,
   IconButton,
   InputBase,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
   withStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './styles';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         mobileMoreAnchorEl: null,
         mobileMenuId: null,
         anchorElMenu: null,
         menuId: null,
      };
   }
   handleMobileMenuClose = () => {
      console.log('handleMobileMenuClose');
   };
   handleProfileMenuOpen = (e) => {
      this.setState({
         anchorElMenu: e.currentTarget,
      });
   };

   // handleProfileMenuOpen = () => {
   //    console.log('handleProfileMenuOpen');
   // };
   handleMobileMenuOpen = (e) => {
      this.setState({
         mobileMoreAnchorEl: e.currentTarget,
      });
   };
   handleMenuClose = () => {
      this.setState({
         anchorElMenu: null,
      });
   };
   handleLogOut = () => {
      const { history } = this.props;
      if (history) {
         history.push('/Login');
      }
   };
   renderMenu = () => {
      const { anchorElMenu, menuId } = this.state;
      const isMenuOpen = Boolean(anchorElMenu);
      // console.log(isMenuOpen);
      return (
         <Menu
            anchorEl={anchorElMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
         >
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={this.handleLogOut}>LogOut</MenuItem>
         </Menu>
      );
   };
   renderMobileMenu = () => {
      const { mobileMoreAnchorEl, mobileMenuId } = this.state;
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      // console.log(isMobileMenuOpen);
      return (
         <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
         >
            <MenuItem>
               <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                     <MailIcon />
                  </Badge>
               </IconButton>
               <p>Messages</p>
            </MenuItem>
            <MenuItem>
               <IconButton
                  aria-label="show 11 new notifications"
                  color="inherit"
               >
                  <Badge badgeContent={11} color="secondary">
                     <NotificationsIcon />
                  </Badge>
               </IconButton>
               <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={this.handleProfileMenuOpen}>
               <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
               >
                  <AccountCircle />
               </IconButton>
               <p>Profile</p>
            </MenuItem>
         </Menu>
      );
   };
   toogleSidebar = () => {
      const { showSidebar, onToggleSidebar } = this.props;
      if (onToggleSidebar) {
         onToggleSidebar(!showSidebar);
      }
   };
   render() {
      const { classes, name } = this.props;
      const menuId = 'primary-search-account-menu';
      const mobileMenuId = 'primary-search-account-menu-mobile';
      return (
         <div className={classes.grow}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton
                     edge="start"
                     className={classes.menuButton}
                     color="inherit"
                     aria-label="open drawer"
                     onClick={this.toogleSidebar}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title} variant="h6" noWrap>
                     {name}
                  </Typography>
                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon />
                     </div>
                     <InputBase
                        placeholder="Search…"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                     />
                  </div>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                     <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                           <MailIcon />
                        </Badge>
                     </IconButton>
                     <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                     >
                        <Badge badgeContent={17} color="secondary">
                           <NotificationsIcon />
                        </Badge>
                     </IconButton>
                     <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                     >
                        <AccountCircle />
                     </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                     <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={this.handleMobileMenuOpen}
                        color="inherit"
                     >
                        <MoreIcon />
                     </IconButton>
                  </div>
               </Toolbar>
            </AppBar>
            {this.renderMobileMenu()}
            {this.renderMenu()}
         </div>
      );
   }
}
export default withStyles(styles)(withRouter(Header));
// show table menu for user see to they may optional
// to create dashboard then you must create 3 component : 1_Content, 2_header_contain_menu, 3_Sabar(the icon toggle sabar )
// đây là phần header sài chung cho 2 cái page khác nhau: AdminLayoutPage, TasksBoard, và đối với AdminLayoutPage thì ko có phần header
// dùng css bineline để đặt lại css cho header , nó hỗ trợ mặc định cho web của bạn, cài lại àm ko chịu bất cứ ảnh hưởng nào từ css cũ
