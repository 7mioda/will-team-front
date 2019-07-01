import styled from 'styled-components';

export default (component) => styled(component)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
  }
  .slide * {
    //object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .slide {
    display: inline-block;
    width: calc(
      (100% / ${({ children, itemNumber = 1 }) => children.length * itemNumber}
    ) - ${({ itemNumber = 1 }) => itemNumber === 1 ? '0px' : '20px'});
    margin-right: ${({ itemNumber = 1 }) => (itemNumber > 1 ? '20px' : '0')};
    height: 100%;
  }
  .slide__track {
    width: calc(100% * ${({ children }) => children.length});
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: transform ease-in 0.7s;
  }
  .slide__button {
    border: none;
    outline: none;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    height: 31px;
    width: 31px;
    color: #ffffff;
    background: #000;
    cursor: pointer;
    z-index: 10;
    transition: all ease-in-out 0.3s;
  }
  .slide__button--next {
    right: 2px;
  }
  .slide__button--previous {
    left: 2px;
  }
  .slide__button:hover,
  .slide__button:focus,
  .slide__button:active {
    color: rgba(0, 0, 0, 0.3);
    background: #fff;
  }
  .indicator-container {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  .indicator {
    border: none;
    outline: none;
    margin-left: 5px;
    border-radius: 50%;
    height: 8px;
    width: 5px;
    cursor: pointer;
    transform: translateY(0);
    transition: all ease-in-out 0.5s;
  }
  .indicator.active {
    border-radius: 20%;
    height: 5px;
    width: 8px;
    padding-bottom: 1px;
    transform: translateY(-2px);
  }
`;
