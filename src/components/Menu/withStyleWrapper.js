import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  z-index: 50;
  width: 100%;
  
  .menu__logo {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #e93e8f;
    position: absolute;
    display: inline-block;
    border: none;
    width: 34px;
    height: 34px;
    background: url('/static/img/airbnb-pink-logo.svg');
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    left: 24px;
    z-index: 100;
  }
  
  @media only screen and (max-width: 50px) {
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
      transform: translateY(0);
    }
    
    .menu--inactive {
      transform: translateY(-100%);
    }
  }
`;
