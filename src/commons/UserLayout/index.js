import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// xây dựng page admin route
class UserLayoutRoute extends Component {
   render() {
      // const { route } = this.props;
      const { name, component: YourComponent, exact, path, icon } = this.props;
      // console.log(name, YourComponent, exact, path);
      return (
         <Route
            icon={icon}
            name={name}
            exact={exact}
            path={path}
            render={(routeProps) => {
               return (
                  <YourComponent {...routeProps} />
                  // layout trang dành cho người dùng đăng ký đăng nhập vào nó ko liên quan tới dashboard nên ta ko
                  // ben trong DashBoard ta se hien thi component của từng cái route
               );
            }}
         />
         // mặc định mình sẽ hiển thị route như 1 component nhưng trong project này chứng ta cần phải cho nó vào dashboard để hiển thị nên ta cho thg route 1 element là render={ funtion => dashboard bao boc adminpage}
      );
   }
}

export default UserLayoutRoute;
