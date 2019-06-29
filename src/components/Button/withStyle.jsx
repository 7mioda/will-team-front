import styled from 'styled-components';

export default (component) => styled(component)`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .btn {
    border: none;
    height: 50px;
    padding: 0 2em;
    outline: none;
    border-radius: 4px;
    font-family: inherit, sans-serif;
    text-transform: capitalize;
    font-size: 12px;
    color: ${({ color }) => color || 'white'};
    background: ${({ background }) => background || 'pink'};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
  .animated:hover {
    border: ${({ background }) => `1px solid ${background}` || '1px solid grey'};
    color: ${({ background }) => background || 'grey'};
    background: ${({ color }) => color || 'white'};
  }

  .animated:active {
    transform: scale(0.95);
  }

  .regular {
    border-radius: 0;
  }

  .rounded {
    border-radius: 50px;
  }

  .outline {
    border: ${({ color }) => `1px solid ${color}` || '1px solid grey'};
    color: ${({ color }) => color || 'grey'};
    background: ${({ background }) => background || 'white'};
  }
`;
