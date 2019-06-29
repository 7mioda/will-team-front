import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  color: #fff;
  height: 350px;
  margin-top: 30px;
  background: url("https://a0.muscache.com/4ea/air/v2/pictures/7decda7c-a63d-4bb1-992c-e2d6db3e2308.jpg?t=r:w1131-h343-sfit,e:fjpg-c75") center center / cover no-repeat;
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
