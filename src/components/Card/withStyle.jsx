import styled from 'styled-components';

export default (component) => styled(component)`
  width: calc((100% / 4) - 1.5%);
  color: rgb(118, 118, 118);
  margin-left: 20px;
  font-size: 10px;
  padding-bottom: 30px;
  height: 310px;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
     0px 5px 10px rgba(0,0,0,0.05),
     0px 10px 10px rgba(0,0,0,0.05),
     0px 15px 10px rgba(0,0,0,0.05);
     
  .card__slider {
    border-radius: 5px;
    width: 100%;
    height: 90%;
    img {
      width: 100%;
      height: 100%;
      -moz-border-radius-topright: 5px;
      -moz-border-radius-topleft: 5px;
      }
    }

  .card__body {
    padding: 5px;
    width: 100%;
  }

  .card__body h3 {
    padding: 2px 0;
    text-transform: uppercase;
    font-weight: 500;
  }
  .card__body h2 {
    padding: 2px 0;
    color: rgb(73, 73, 73);
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 270px;
  }

  .currency {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 2px;
  }

  .euro {
    background: url('/img/euro.svg') center center / 10px 10px no-repeat;
  }

  p {
    padding: 2px 0;
    font-weight: 300;
    font-size: 12px;
  }
  @media only screen and (min-width: 1260px)  and (max-width: 1350px) {
    width: calc((100% / 2) - 3%);
    margin-right: 1%;
    &:nth-child(2n){
    margin-right: 0;
    }
  }
  @media only screen and (max-width: 1260px) {
    width: calc((100% / 2) - 40px);
    margin-right: 1%;
    &:nth-child(2n){
    margin-right: 0;
    }
  }
  
  @media only screen and (max-width: 650px) {
    width: calc(100% - 40px);
    margin-right: 20px;
    margin-left: 20px;
  }
`;

