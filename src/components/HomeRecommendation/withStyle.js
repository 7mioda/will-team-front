import styled from 'styled-components';

export default (component) => styled(component)`
  margin: 20px auto;
  color: rgb(72, 72, 72);
  font-family: Roboto, sans-serif;
  background: url("/img/security.png") left bottom / 40% 80% no-repeat;
  height: 400px;
  h2 {
    margin-bottom: 20px;
  }
  .recommendation_text {
    font-weight: 300;
    width: 30%;
    margin-top: 10%;
    margin-right: 10%;
    float: right;
  }
`;
