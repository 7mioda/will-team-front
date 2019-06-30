import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  height: 350px;
  color: rgb(72, 72, 72);
  margin-top: 30px;
  font-family: Roboto, sans-serif;
  background: url("/img/epargne.png") right bottom / 40% 100% no-repeat;
  .home-host__banner {
    padding: 50px;
    & > h1 {
    font-weight: 300;
    width: 30%;
    }
  }
  .home-host__btn {
    margin-top: 20px;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 13px;
  } 
`;
