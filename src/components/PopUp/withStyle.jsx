import styled from 'styled-components';

export default (component) => styled(component)`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.67);
  animation: fadeIn 0.5s both;
  .modal {
    position: absolute;
    left: 50%;
    top: 50vh;
    background-color: #fff;
    z-index: 10;
    transform: translate(-50%, -50%);
    animation: slideFromTop 0.5s both 0.1s;
  }
  .modal__close-icon {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideFromTop {
    from {
      transform: translate(-50%, -500px);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }
`;
