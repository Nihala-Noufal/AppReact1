

import React from "react";
import {  Menu } from 'antd';



function AppHeader(){
    return(
            <div className="container-fluid">
            <div className="header">
      <div className="logo">
          <i class="fs fa-bolt"></i>
          <a href="http://www.google.com">App</a>
      </div>
      <Menu  mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
   

  </div>
      
</div>
    )
    
}
export default AppHeader;