import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  color: rgb(72, 72, 72);
  margin-top: 30px;
  .airbnb-plus__banner {
    width: 100%;
    height: 300px;
    background: url("https://a0.muscache.com/4ea/air/v2/pictures/ea6285d9-5352-4447-b13d-b39bfc92dfe5.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75") center center / cover no-repeat;
  }
  & > h3 {
    font-weight: 100;
    margin-bottom: 10px;
    }
  .airbnb-plus__btn {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    width: 274px;
    text-transform: uppercase;
    font-weight: 500;
  } 
`;
