import styled from 'styled-components';

export default (component) => styled(component)`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: transparent;
  }
  .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 81px;
    //border-bottom: 1px solid #f4f4f4;
    vertical-align: middle;
    text-transform: capitalize;
    color: #474747;
    font-weight: 400;
    background: transparent;
    transition: all .5s ease-in;
  }
  
  .left {
    justify-content: flex-start;
  }
  
  .right {
    justify-content: flex-end;
  }
  .center {
    justify-content: center;
  }
  @media only screen and (max-width: 750px) {
    .menu{
      display: block;
      height: auto;
      background: #fff;
      color: rgb(72, 72, 72);
    }
  }
`;
