import styled from 'styled-components';

export default (component) => styled(component)`
  margin: 0;
  padding: 0;
  position: relative;
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input {
    border: 1px solid rgba(128, 128, 128, 0.32);
    height: 40px;
    width: 100%;
    border-radius: 5px;
    color: grey;
    padding: ${({ padding }) => padding || '0 20px'};
  }
  .highlighted {
  }
  .highlighted:focus {
    border: 1px solid rgba(128, 128, 128, 0.9);
  }
  .rounded {
    border-radius: 40px;
    padding: ${({ padding }) => padding || '0 30px'};
  }
  .prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  .suffix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
`;
