import styled from 'styled-components';

export default (component) => styled(component)`
  position: absolute;
  z-index: 50;
  width: 20%;
  
  .menu{
      display: block;
      height: 100vh;
      background: #fff;
      color: rgb(72, 72, 72);
    }
    .menu-item {
      height: auto;
    }
    .menu-item__dropdown {
      display: block;
      position: static;
      width: 100%;
      box-shadow: none;
      border-style: none;
    }
    .menu-item__title {
      position: relative;
      color: rgb(72, 72, 72);
      height: 50px;
    }
    .menu-item__title:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: inline-block;
    height: 2px;
    width: 0;
    background: #474747;
    transition: width ease-in-out 0.7s;
    }
    .menu-item__title:hover:after {
      width: 100%;
    }
  
  .menu__logo {
    position: absolute;
    display: inline-block;
    border: none;
    width: 34px;
    height: 34px;
    background: url('/static/img/airbnb-pink-logo.svg');
    top: 50%;
    transform: translateX(-140%);
    left: 24px;
    z-index: 100;
  }
  
    .menu__logo{
      top: 27px;
      cursor: pointer;
    }
    
    .menu__logo:after {
      content:'';
      display: inline-block;
      width: 5px;
      height: 5px;
      background: blue;
      margin-left: 105%;
    }
    
    .inactive:after {
      content:'';
      display: inline-block;
      width: 5px;
      height: 5px;
      background: red;
      margin-left: 105%;
    }
    
    .menu--active {
      transform: translateX(0);
    }
    
    .menu--inactive {
      transform: translateX(-150%);
    }
`;
